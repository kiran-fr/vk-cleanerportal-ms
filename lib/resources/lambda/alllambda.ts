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
    code: lambda.Code.fromAsset('./functions/GetWorksmanAccountRegistartionStatus'),
    functionName: 'GetWorksmanAccountRegistartionStatus',
    handler: 'index.GetWorksmanAccountRegistartionStatusHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}


export const GetTestUserLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetTestUser'),
    functionName: 'GetTestUser',
    handler: 'index.handler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}

export const PostTestUserLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetPostTestUser'),
    functionName: 'PostTestUser',
    handler: 'index.handler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}


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

export const GetWorkmanDetailsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetWorksmanDetails'),
    functionName: 'GetWorkmanDetailsFun',
    handler: 'index.GetWorksmanDetailsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const UpdateWorksmanDetailsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/UpdateWorksmanDetails'),
    functionName: 'UpdateWorksmanDetailsFun',
    handler: 'index.UpdateWorksmanDetailsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const UserPostCodesLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/UserPostCodes'),
    functionName: 'UserPostCodesFun',
    handler: 'index.UserPostCodesHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const GetAllPostcodesLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetAllPostcodes'),
    functionName: 'GetAllPostcodesFun',
    handler: 'index.GetAllPostcodesHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const DeletePostcodesLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/DeletePostcodes'),
    functionName: 'DeletePostcodesFun',
    handler: 'index.DeletePostcodesHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const CreateWorksmanScheduleLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/CreateWorksmanSchedule'),
    functionName: 'CreateWorksmanScheduleFun',
    handler: 'index.CreateWorksmanScheduleHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const DeleteWorkmanScheduleLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/DeleteWorkmanSchedule'),
    functionName: 'DeleteWorkmanScheduleFun',
    handler: 'index.DeleteWorkmanScheduleHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const GetWorksmanSchedulesLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetWorksmanSchedules'),
    functionName: 'GetWorksmanSchedulesFun',
    handler: 'index.GetWorksmanSchedulesHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const WorksmanjobsCreateLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/WorksmanjobsCreate'),
    functionName: 'WorksmanjobsCreateFun',
    handler: 'index.WorksmanjobsCreateHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const GetWorksmanjobsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetWorksmanjobs'),
    functionName: 'GetWorksmanjobsFun',
    handler: 'index.GetWorksmanjobsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const CreateBankDetailsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/CreateBankDetails'),
    functionName: 'CreateBankDetailsFun',
    handler: 'index.CreateBankDetailsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const UpdateBankDetailsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/UpdateBankDetails'),
    functionName: 'UpdateBankDetailsFun',
    handler: 'index.UpdateBankDetailsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const GetBankDetailsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetBankDetails'),
    functionName: 'GetBankDetailsFun',
    handler: 'index.GetBankDetailsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const CreateMessagesLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/CreateMessages'),
    functionName: 'CreateMessagesFun',
    handler: 'index.CreateMessagesHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const GetMessagesLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetMessages'),
    functionName: 'GetMessagesFun',
    handler: 'index.GetMessagesHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const CreateCustomerTableLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/CreateCustomerTable'),
    functionName: 'CreateCustomerTableFun',
    handler: 'index.CreateCustomerTableHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const CreateCustomerAddressLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/CreateCustomerAddress'),
    functionName: 'CreateCustomerAddressFun',
    handler: 'index.CreateCustomerAddressHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}

export const GetJobsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetJobsTable'),
    functionName: 'GetJobsFun',
    handler: 'index.GetJobsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}
export const GetPaymentDetailsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetPaymentDetails'),
    functionName: 'GetPaymentDetailsFun',
    handler: 'index.GetPaymentDetailsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}

export const CreatePaymentHistoryDetailsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/CreatePaymentHistoryDetails'),
    functionName: 'CreatePaymentHistoryDetailsFun',
    handler: 'index.CreatePaymentHistoryDetailsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}


export const GetPaymentHistoryDetailsLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetPaymentHistoryDetails'),
    functionName: 'GetPaymentHistoryDetailsFun',
    handler: 'index.GetPaymentHistoryDetailsHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}

export const GetDistrictWisePostCodesLambda = () => {
  return {
    code: lambda.Code.fromAsset('./functions/GetDistrictWisePostCodes'),
    functionName: 'GetDistrictWisePostCodesFun',
    handler: 'index.GetDistrictWisePostCodesHandler',
    memorySize: 1024,
    runtime: lambda.Runtime.NODEJS_14_X,
    timeout: cdk.Duration.seconds(35)
  }
}


