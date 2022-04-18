import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import {
  UserRegistrationLambda, WorksManTermsAndConditionLambda, WorksManExperienceLambda,
  GetWorksmanAccountRegistartionStatusLambda, getAllMobileNumberLambda,
  GetWorkmanDetailsLambda,
  UpdateWorksmanDetailsLambda,
  UserPostCodesLambda,
  GetAllPostcodesLambda,
  DeletePostcodesLambda,
  CreateWorksmanScheduleLambda,
  DeleteWorkmanScheduleLambda,
  GetWorksmanSchedulesLambda,
  GetWorksmanjobsLambda,
  WorksmanjobsCreateLambda,
  GetMessagesLambda,
  CreateMessagesLambda,
  CreateBankDetailsLambda,
  GetBankDetailsLambda,
  CreateCustomerTableLambda,
  CreateCustomerAddressLambda,
  GetJobsLambda,
  GetPaymentDetailsLambda,
  CreatePaymentHistoryDetailsLambda,
  GetPaymentHistoryDetailsLambda,
  GetDistrictWisePostCodesLambda,
  UpdateBankDetailsLambda
} from './resources/lambda/alllambda';
import * as sfn from "@aws-cdk/aws-stepfunctions";
import * as apigateway from "@aws-cdk/aws-apigateway"
import { ApigatewayDataConstants } from '../constants/ApiGatewayConstant';
import {
  WorksmanTermsAndConditionsApiGateway, getAllMobileNumbersApiGateway,
  worksmanExperienceApiGateway, GetWorksmanAccountRegistartionStatusApiGateway,
  GetWorkmanDetailsApiGateway,
  UpdateWorksmanDetailsApiGateway,
  createPostcodesApiGateway,
  GetAllPostcodesApiGateway,
  DeletePostcodesApiGateway,
  CreateWorksmanScheduleApiGateway,
  DeleteWorkmanScheduleApiGateway,
  GetWorksmanScheduleApiGateway,
  GetWorksmanjobsApiGateway,
  WorksmanjobsCreateApiGateway,
  GetMessagesApiGateway,
  CreateMessagesApiGateway,
  CreateBankDetailsApiGateway,
  GetBankDetailsApiGateway,
  CreateCustomerTableApiGateway,
  CreateCustomerAddressApiGateway,
  GetJobsApiGateway,
  GetPaymentDetailsApiGateway,
  CreatePaymentHistoryDetailsApiGateway,
  GetPaymentHistoryDetailsApiGateway,
  GetDistrictWisePostCodesApiGateway,
  UpdateBankDetailsApiGateway
} from "./resources/ApiGateway/AllApiGateWays";
import * as cognito from '@aws-cdk/aws-cognito';

export class CdkExampleStack extends cdk.Stack {
  public Machine: sfn.StateMachine;
  // public readonly urlOutput: CfnOutput;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userRegistration = new lambda.Function(this, 'UserRegistration', UserRegistrationLambda())
    const WorksManTermsAndCondition = new lambda.Function(this, 'WorksManTermsAndCondition', WorksManTermsAndConditionLambda())
    const WorksManExperience = new lambda.Function(this, 'WorksManExperience', WorksManExperienceLambda())
    const GetWorksmanAccountRegistartionStatus = new lambda.Function(this, "GetWorksmanAccountRegistartionStatus", GetWorksmanAccountRegistartionStatusLambda())
    const getAllMobileNumbersDemo = new lambda.Function(this, "getAllMobileNumber", getAllMobileNumberLambda())
    const GetWorkmanDetailLambda = new lambda.Function(this, "GetWorkmanDetails", GetWorkmanDetailsLambda())
    const UpdateWorksmanDetailLambda = new lambda.Function(this, "UpdateWorksmanDetail", UpdateWorksmanDetailsLambda())
    const UserPostCodeLambdaApi = new lambda.Function(this, "UserPostCodes", UserPostCodesLambda())
    const GetAllPostcodesLambdaApi = new lambda.Function(this, "GetAllPostcodes", GetAllPostcodesLambda())
    const DeletePostcodesLambdaApi = new lambda.Function(this, "DeletePostcodes", DeletePostcodesLambda())
    const CreateWorksmanScheduleLambdaApi = new lambda.Function(this, "CreateWorksmanSchedule", CreateWorksmanScheduleLambda())
    const DeleteWorkmanScheduleLambdaApi = new lambda.Function(this, "DeleteWorkmanSchedule", DeleteWorkmanScheduleLambda())
    const GetWorksmanScheduleLambdaApi = new lambda.Function(this, "GetWorksmanSchedule", GetWorksmanSchedulesLambda())
    const GetWorksmanjobsLambdaApi = new lambda.Function(this, "GetWorksmanjobs", GetWorksmanjobsLambda())
    const WorksmanjobsCreateLambdaApi = new lambda.Function(this, "WorksmanjobsCreate", WorksmanjobsCreateLambda())
    const CreateBankDetailsLambdaApi = new lambda.Function(this, "CreateBankDetails", CreateBankDetailsLambda())
    const GetBankDetailsLambdaApi = new lambda.Function(this, "GetBankDetails", GetBankDetailsLambda())
    const CreateMessagesLambdaApi = new lambda.Function(this, "CreateMessages", CreateMessagesLambda())
    const GetMessagesLambdaApi = new lambda.Function(this, "GetMessages", GetMessagesLambda())
    const CreateCustomerTableLambdaApi = new lambda.Function(this, "CreateCustomerTable", CreateCustomerTableLambda())
    const CreateCustomerAddressLambdaApi = new lambda.Function(this, "CreateCustomerAddress", CreateCustomerAddressLambda())
    const GetJobsLambdaApi = new lambda.Function(this, "GetJobs", GetJobsLambda())
    const GetPaymentDetailsLambdaApi = new lambda.Function(this, "GetPaymentDetails", GetPaymentDetailsLambda())
    const CreatePaymentHistoryDetailsLambdaApi = new lambda.Function(this, "CreatePaymentHistoryDetails", CreatePaymentHistoryDetailsLambda())
    const GetPaymentHistoryDetailsLambdaApi = new lambda.Function(this, "GetPaymentHistoryDetails", GetPaymentHistoryDetailsLambda())
    const GetDistrictWisePostCodesLambdaApi = new lambda.Function(this, "GetDistrictWisePostCodes", GetDistrictWisePostCodesLambda())
    const UpdateBankDetailsLambdaApi = new lambda.Function(this, "UpdateBankDetails", UpdateBankDetailsLambda())


    const api = new apigateway.RestApi(this, 'WorksmanApiData', ApigatewayDataConstants(apigateway));

    const userPool = new cognito.UserPool(this, 'userpool', {
      userPoolName: `vk-clean-portal`,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      selfSignUpEnabled: true,
      signInAliases: { email: true, phone: true },
      autoVerify: { email: true },
      passwordPolicy: {
        minLength: 6,
        requireLowercase: true,
        requireDigits: true,
        requireUppercase: true,
        requireSymbols: true,
      },
      standardAttributes: {
        givenName: {
          required: true,
          mutable: true
        },
        familyName: {
          required: true,
          mutable: true
        },
        email: {
          required: true,
          mutable: true
        },
        address: {
          required: true,
          mutable: true
        },
        birthdate: {
          required: true,
          mutable: true
        },
        gender: {
          required: true,
          mutable: true
        },
        locale: {
          required: true,
          mutable: true
        },
        phoneNumber: {
          required: true,
          mutable: true
        },
      },
      accountRecovery: cognito.AccountRecovery.EMAIL_ONLY,
    });


    const standardCognitoAttributes = {
      givenName: true,
      familyName: true,
      email: true,
      address: true,
      birthdate: true,
      gender: true,
      locale: true,
      phoneNumber: true,
    };

    const clientReadAttributes = new cognito.ClientAttributes()
      .withStandardAttributes(standardCognitoAttributes)

    const clientWriteAttributes = new cognito.ClientAttributes()
      .withStandardAttributes({
        ...standardCognitoAttributes,
        emailVerified: false,
        phoneNumberVerified: false,
      })



    const userPoolClient = new cognito.UserPoolClient(this, 'userpool-client', {
      userPool,
      authFlows: {
        adminUserPassword: true,
        custom: true,
        userSrp: true,
        userPassword: true
      },
      supportedIdentityProviders: [
        cognito.UserPoolClientIdentityProvider.COGNITO,
      ],
      readAttributes: clientReadAttributes,
      writeAttributes: clientWriteAttributes,
    });



    new cdk.CfnOutput(this, 'region', { value: cdk.Stack.of(this).region });
    new cdk.CfnOutput(this, 'userPoolId', { value: userPool.userPoolId });
    new cdk.CfnOutput(this, 'userPoolClientId', {
      value: userPoolClient.userPoolClientId,
    });

    new cdk.CfnOutput(this, 'apiUrl', { value: api.url });



    const auth = new apigateway.CognitoUserPoolsAuthorizer(this, 'Authorizer', {
      cognitoUserPools: [userPool]
    });



    // POST APIS
    WorksmanTermsAndConditionsApiGateway(api, WorksManTermsAndCondition, 'POST', auth)
    worksmanExperienceApiGateway(api, WorksManExperience, 'POST', auth)
    // PostUserApiGateway(api, PostTestUser, 'POST', auth)
    createPostcodesApiGateway(api, UserPostCodeLambdaApi, 'POST', auth)
    CreateWorksmanScheduleApiGateway(api, CreateWorksmanScheduleLambdaApi, 'POST', auth)
    WorksmanjobsCreateApiGateway(api, WorksmanjobsCreateLambdaApi, 'POST', auth)
    CreateBankDetailsApiGateway(api, CreateBankDetailsLambdaApi, 'POST', auth)
    CreateMessagesApiGateway(api, CreateMessagesLambdaApi, 'POST', auth)
    // CreateCustomerTableApiGateway(api, CreateCustomerTableLambdaApi, 'POST', auth)
    // CreateCustomerAddressApiGateway(api, CreateCustomerTableLambdaApi, 'POST', auth)
    // // CreatePaymentHistoryDetailsApiGateway(api, CreateCustomerTableLambdaApi, 'POST', auth)

    // // GET APIS
    GetWorksmanAccountRegistartionStatusApiGateway(api, GetWorksmanAccountRegistartionStatus, 'GET', auth)
    // GetTestUserApiGateway(api, GetTestUser, 'GET', auth)
    getAllMobileNumbersApiGateway(api, getAllMobileNumbersDemo, 'GET')
    GetWorkmanDetailsApiGateway(api, GetWorkmanDetailLambda, 'GET', auth)
    GetAllPostcodesApiGateway(api, GetAllPostcodesLambdaApi, 'GET', auth)
    GetWorksmanScheduleApiGateway(api, GetWorksmanScheduleLambdaApi, 'GET', auth)
    GetWorksmanjobsApiGateway(api, GetWorksmanjobsLambdaApi, 'GET', auth)
    GetBankDetailsApiGateway(api, GetBankDetailsLambdaApi, 'GET', auth)
    GetMessagesApiGateway(api, GetMessagesLambdaApi, 'GET', auth)
    GetJobsApiGateway(api, GetJobsLambdaApi, 'GET', auth)
    GetPaymentDetailsApiGateway(api, GetPaymentDetailsLambdaApi, 'GET', auth)
    GetPaymentHistoryDetailsApiGateway(api, GetPaymentHistoryDetailsLambdaApi, 'GET', auth)
    GetDistrictWisePostCodesApiGateway(api, GetDistrictWisePostCodesLambdaApi, 'GET', auth)

    // // DELETE APIS
    DeletePostcodesApiGateway(api, DeletePostcodesLambdaApi, 'DELETE', auth)
    DeleteWorkmanScheduleApiGateway(api, DeleteWorkmanScheduleLambdaApi, 'DELETE', auth)

    // // UPDATE APIS
    // UpdateWorksmanDetailsApiGateway(api, UpdateWorksmanDetailLambda, 'PUT', auth)
    UpdateBankDetailsApiGateway(api, UpdateBankDetailsLambdaApi, 'PUT', auth)

  }
}