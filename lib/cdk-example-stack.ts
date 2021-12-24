import * as cdk from '@aws-cdk/core';
// import * as ec2 from '@aws-cdk/aws-ec2';
// import * as rds from '@aws-cdk/aws-rds';
import * as lambda from '@aws-cdk/aws-lambda';
import { UserRegistrationLambda, userEmailConfirm } from './resources/lambda/allLambda';
import * as sfn from "@aws-cdk/aws-stepfunctions";
import * as tasks from "@aws-cdk/aws-stepfunctions-tasks";
import * as apigateway from "@aws-cdk/aws-apigateway"

export class CdkExampleStack extends cdk.Stack {
  public Machine: sfn.StateMachine;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    const userRegistration = new lambda.Function(this,'UserRegistration',UserRegistrationLambda())
    const UserEmailConfirm = new lambda.Function(this,'UserEmailConfirm',userEmailConfirm())

    const definition = new tasks.LambdaInvoke(this,'User Registration' , {
      lambdaFunction:userRegistration,
      outputPath:"$.Payload"
    })
      .next(
        new tasks.LambdaInvoke(this, "User Email Confirm", {
          lambdaFunction: UserEmailConfirm,
          outputPath: "$.Payload",
        })
      );

    this.Machine = new sfn.StateMachine(this, "StateMachine", {
      definition,
    });


    const api = new apigateway.RestApi(this, 'api', {
      description: 'example api gateway',
      deployOptions: {
        stageName: 'dev',
      },
      // 👇 enable CORS
      defaultCorsPreflightOptions: {
        allowHeaders: [
          'Content-Type',
          'X-Amz-Date',
          'Authorization',
          'X-Api-Key',
        ],
        allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
        allowCredentials: true,
        allowOrigins: ['http://localhost:3000'],
      },
    });

    new cdk.CfnOutput(this, 'apiUrl', {value: api.url});

    // 👇 add a /todos resource
    const customer = api.root.addResource('customer');

    // 👇 integrate GET /todos with getTodosLambda
    customer.addMethod(
      'GET',
      new apigateway.LambdaIntegration(UserEmailConfirm, {proxy: true}),
    );

  }
}