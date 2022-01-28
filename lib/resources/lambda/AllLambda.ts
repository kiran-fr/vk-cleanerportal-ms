import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';

export const UserRegistrationLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/UserRegistration'),
    functionName: 'UserRegistration',
    handler: 'index.UserRegistrationHanlder',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(15)
  }
}

export const WorksManTermsAndConditionLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/WorksManTermsAndCondition'),
    functionName: 'WorksManTermsAndCondition',
    handler: 'index.WorksManTermsAndConditionHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(15)
  }
}

export const WorksManExperienceLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/WorksManExperience'),
    functionName: 'WorksManExperience',
    handler: 'index.WorksManExperienceHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(15)
  }
}

export const GetWorksmanAccountRegistartionStatusLambda = () => {
  return {
    code:lambda.Code.fromAsset('./functions/GetWorksmanAccountRegistartionStatus'),
    functionName:'GetWorksmanAccountRegistartionStatus',
    handler:'index.GetWorksmanAccountRegistartionStatusHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}


export const GetTestUserLambda = () => {
  return {
    code:lambda.Code.fromAsset('./functions/GetTestUser'),
    functionName:'GetTestUser',
    handler:'index.handler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}

export const PostTestUserLambda = () => {
  return {
    code:lambda.Code.fromAsset('./functions/GetPostTestUser'),
    functionName:'PostTestUser',
    handler:'index.handler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}


export const getAllMobileNumberLambda = () => {
  return {
    code:lambda.Code.fromAsset('./functions/userEmailError'),
    functionName:'getAllMobileNumbers',
    handler:'index.getAllMobileNumbersHanlder',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}