import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { UserRegistrationLambda,WorksManTermsAndConditionLambda, WorksManExperienceLambda } from './resources/lambda/allLambda';
import * as sfn from "@aws-cdk/aws-stepfunctions";
import * as tasks from "@aws-cdk/aws-stepfunctions-tasks";
import * as apigateway from "@aws-cdk/aws-apigateway"
import { ApigatewayDataConstants } from '../constants/ApiGatewayConstant';
import { worksmanExperienceApiGateway,WorksmanTermsAndConditionsApiGateway} from "./resources/ApiGateway/AllApiGateWays"

export class CdkExampleStack extends cdk.Stack {
  public Machine: sfn.StateMachine;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userRegistration = new lambda.Function(this, 'UserRegistration', UserRegistrationLambda())
    const WorksManTermsAndCondition = new lambda.Function(this, 'WorksManTermsAndCondition', WorksManTermsAndConditionLambda())
    const WorksManExperience = new lambda.Function(this, 'WorksManExperience', WorksManExperienceLambda())
    
    const Test = new lambda.Function(this, 'Test', {
      code:lambda.Code.fromAsset('./functions/Test'),
      functionName:'WorksManExperience',
      handler:'index.testHandler',
      memorySize:1024,
      runtime:lambda.Runtime.NODEJS_14_X,
      timeout:cdk.Duration.seconds(15)
    })

    const definition = new tasks.LambdaInvoke(this, 'User Registration', {
      lambdaFunction: userRegistration,
      outputPath: "$.Payload"
    })
      // .next(
      //   new tasks.LambdaInvoke(this, "User Email Confirm", {
      //     lambdaFunction: UserEmailConfirm,
      //     outputPath: "$.Payload",
      //   })
      // );

    this.Machine = new sfn.StateMachine(this, "StateMachine", {
      definition,
    });

    const api = new apigateway.RestApi(this, 'WorksManApi', ApigatewayDataConstants());

    new cdk.CfnOutput(this, 'apiUrl', { value: api.url });


    WorksmanTermsAndConditionsApiGateway(api,WorksManTermsAndCondition,'POST')
    worksmanExperienceApiGateway(api,WorksManExperience,'POST')

  }
}