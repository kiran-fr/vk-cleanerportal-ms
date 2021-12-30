import * as cdk from '@aws-cdk/core';
// import * as sqs from '@aws-cdk/aws-sqs';
import * as lambda from '@aws-cdk/aws-lambda';
// import {Duration} from "@aws-cdk/core";


export const UserRegistrationLambda = () =>{
  return {
    code:lambda.Code.fromAsset('./functions/UserRegistration'),
    functionName:'UserRegistration',
    handler:'index.UserRegistrationHanlder',
    memorySize:1024,
    runtime:lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(15)
  }
}

export const userEmailConfirm = () =>{
  return {
    code:lambda.Code.fromAsset('./functions/UserEmailConfirm'),
    functionName:'userEmail',
    handler:'index.handler',
    memorySize:1024,
    runtime:lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(15)
  }
}

export const WorksManTermsAndConditionLambda = () => {
  return {
    code:lambda.Code.fromAsset('./functions/WorksManTermsAndCondition'),
    functionName:'WorksManTermsAndCondition',
    handler:'index.WorksManTermsAndConditionHandler',
    memorySize:1024,
    runtime:lambda.Runtime.NODEJS_14_X,
    timeout:cdk.Duration.seconds(15)
  }
} 

export const WorksManExperienceLambda = () => {
  return {
    code:lambda.Code.fromAsset('./functions/WorksManExperience'),
    functionName:'WorksManExperience',
    handler:'index.WorksManExperienceHandler',
    memorySize:1024,
    runtime:lambda.Runtime.NODEJS_14_X,
    timeout:cdk.Duration.seconds(15)
  }
}

export const WorksmanEligibilityLambda = () => {
  return {
    code:lambda.Code.fromAsset('./functions/WorksmanEligibility'),
    functionName:'WorksmanEligibility',
    handler:'index.WorksmanEligibilityHandler',
    memorySize:1024,
    runtime:lambda.Runtime.NODEJS_14_X,
    timeout:cdk.Duration.seconds(15)
  }
}

export const WorksManAddressLambda  = () => {
  return {
    code:lambda.Code.fromAsset('./functions/WorksManAddress'),
    functionName:'WorksManAddress',
    handler:'index.WorksManAddressHandler',
    memorySize:1024,
    runtime:lambda.Runtime.NODEJS_14_X,
    timeout:cdk.Duration.seconds(15)
  }
}