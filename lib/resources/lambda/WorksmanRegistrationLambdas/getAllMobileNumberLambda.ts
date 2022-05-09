import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export const getAllMobileNumberLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/userEmailError'),
    functionName: 'getAllMobileNumbers',
    handler: 'index.getAllMobileNumbersHanlder',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}