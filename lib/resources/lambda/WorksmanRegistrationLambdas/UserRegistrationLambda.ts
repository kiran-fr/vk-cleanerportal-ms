import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export const UserRegistrationLambda = () => {
  return {
    code: lambda.Code.fromAsset("./functions/UserRegistration"),
    functionName: "UserRegistration",
    handler: "index.UserRegistrationHanlder",
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35),
  };
};