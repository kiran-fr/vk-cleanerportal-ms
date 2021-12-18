import * as cdk from '@aws-cdk/core';
// import * as ec2 from '@aws-cdk/aws-ec2';
// import * as rds from '@aws-cdk/aws-rds';
import * as lambda from '@aws-cdk/aws-lambda';
import { UserRegistrationLambda } from './resources/lambda/allLambda';
import * as sfn from "@aws-cdk/aws-stepfunctions";
import * as tasks from "@aws-cdk/aws-stepfunctions-tasks";


export class CdkExampleStack extends cdk.Stack {
  public Machine: sfn.StateMachine;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // example resource
    // const queue = new sqs.Queue(this, 'CdkExampleQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    // const getCustomer = new lambda.Function(this, 'getcustomer', getCustomerLambda());
    // const postCustomer = new lambda.Function(this, 'postcustomer', postCustomerLambda());
    
    // const definition = new tasks.LambdaInvoke(this, "Get Customer", {
    //   lambdaFunction: getCustomer,
    //   outputPath: "$.Payload",
    // })

    //   .next(
    //     new tasks.LambdaInvoke(this, "Post Customer", {
    //       lambdaFunction: postCustomer,
    //       outputPath: "$.Payload",
    //     })
    //   );

    // this.Machine = new sfn.StateMachine(this, "StateMachine", {
    //   definition,

    // });

    
    const UserRegistration = new lambda.Function(this,'UserRegistration',UserRegistrationLambda())

    const definition = new tasks.LambdaInvoke(this,'User Registration' , {
      lambdaFunction:UserRegistration,
      outputPath:"$.Scuccess"
    })
      // .next(
      //   new tasks.LambdaInvoke(this, "Post Customer", {
      //     lambdaFunction: postCustomer,
      //     outputPath: "$.Payload",
      //   })
      // );

    // this.Machine = new sfn.StateMachine(this, "StateMachine", {
    //   definition,

    // });


  }
}