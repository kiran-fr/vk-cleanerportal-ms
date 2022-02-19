import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import {
  UserRegistrationLambda, WorksManTermsAndConditionLambda, WorksManExperienceLambda,
  GetWorksmanAccountRegistartionStatusLambda, GetTestUserLambda, PostTestUserLambda, getAllMobileNumberLambda,
  GetWorkmanDetailsLambda,
  UpdateWorksmanDetailsLambda,
  UserPostCodesLambda,
  GetAllPostcodesLambda,
  DeletePostcodesLambda,
  WorksmnaScheduleLambda,
  DeleteWorkmanScheduleLambda,
  GetWorksmanSchedulesLambda
} from './resources/lambda/allLambda';
import * as sfn from "@aws-cdk/aws-stepfunctions";
import * as tasks from "@aws-cdk/aws-stepfunctions-tasks";
import * as apigateway from "@aws-cdk/aws-apigateway"
import { ApigatewayDataConstants } from '../constants/ApiGatewayConstant';
import {
  WorksmanTermsAndConditionsApiGateway, PostUserApiGateway, getAllMobileNumbersApiGateway,
  worksmanExperienceApiGateway, GetWorksmanAccountRegistartionStatusApiGateway, GetTestUserApiGateway,
  GetWorkmanDetailsApiGateway,
  UpdateWorksmanDetailsApiGateway,
  UserPostCodesApiGateway,
  GetAllPostcodesApiGateway,
  DeletePostcodesApiGateway,
  WorksmnaScheduleApiGateway,
  DeleteWorkmanScheduleApiGateway,
  GetWorksmanScheduleApiGateway
} from "./resources/ApiGateway/AllApiGateWays";
import * as apiGatewayAuthorizers from '@aws-cdk/aws-apigatewayv2-authorizers';
import * as apiGatewayIntegrations from '@aws-cdk/aws-apigatewayv2-integrations';
import * as cognito from '@aws-cdk/aws-cognito';

export class CdkExampleStack extends cdk.Stack {
  public Machine: sfn.StateMachine;
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const userRegistration = new lambda.Function(this, 'UserRegistration', UserRegistrationLambda())
    const WorksManTermsAndCondition = new lambda.Function(this, 'WorksManTermsAndCondition', WorksManTermsAndConditionLambda())
    const WorksManExperience = new lambda.Function(this, 'WorksManExperience', WorksManExperienceLambda())
    const GetWorksmanAccountRegistartionStatus = new lambda.Function(this, "GetWorksmanAccountRegistartionStatus", GetWorksmanAccountRegistartionStatusLambda())
    const GetTestUser = new lambda.Function(this, "GetTestUser", GetTestUserLambda())
    const PostTestUser = new lambda.Function(this, "PostTestUser", PostTestUserLambda())
    const getAllMobileNumbersDemo = new lambda.Function(this, "getAllMobileNumber", getAllMobileNumberLambda())
    const GetWorkmanDetailLambda = new lambda.Function(this, "GetWorkmanDetails", GetWorkmanDetailsLambda())
    const UpdateWorksmanDetailLambda = new lambda.Function(this, "UpdateWorksmanDetail", UpdateWorksmanDetailsLambda())
    const UserPostCodeLambdaApi = new lambda.Function(this, "UserPostCodes", UserPostCodesLambda())
    const GetAllPostcodesLambdaApi = new lambda.Function(this, "GetAllPostcodes", GetAllPostcodesLambda())
    const DeletePostcodesLambdaApi = new lambda.Function(this, "DeletePostcodes", DeletePostcodesLambda())
    const WorksmnaScheduleLambdaApi = new lambda.Function(this, "WorksmnaScheduletcodes", WorksmnaScheduleLambda())
    const DeleteWorkmanScheduleLambdaApi = new lambda.Function(this, "DeleteWorkmanSchedule", DeleteWorkmanScheduleLambda())
    const GetWorksmanScheduleLambdaApi = new lambda.Function(this, "GetWorksmanSchedule", GetWorksmanSchedulesLambda())

    const api = new apigateway.RestApi(this, 'WorksManApiDefault', ApigatewayDataConstants(apigateway));

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
     standardAttributes:{
      givenName: {
        required:true,
        mutable:true
      },
      familyName: {
        required:true,
        mutable:true
      },
      email: {
        required:true,
        mutable:true
      },
      address: {
        required:true,
        mutable:true
      },
      birthdate: {
        required:true,
        mutable:true
      },
      gender: {
        required:true,
        mutable:true
      },
      locale: {
        required:true,
        mutable:true
      },
      phoneNumber: {
        required:true,
        mutable:true
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
          userPassword:true
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
    PostUserApiGateway(api, PostTestUser, 'POST', auth)
    UserPostCodesApiGateway(api, UserPostCodeLambdaApi, 'POST', auth)
    WorksmnaScheduleApiGateway(api, WorksmnaScheduleLambdaApi, 'POST', auth)

    // GET APIS
    GetWorksmanAccountRegistartionStatusApiGateway(api, GetWorksmanAccountRegistartionStatus, 'GET', auth)
    GetTestUserApiGateway(api, GetTestUser, 'GET', auth)
    getAllMobileNumbersApiGateway(api, getAllMobileNumbersDemo, 'GET')
    GetWorkmanDetailsApiGateway(api, GetWorkmanDetailLambda, 'GET', auth)
    GetAllPostcodesApiGateway(api, GetAllPostcodesLambdaApi, 'GET', auth)
    GetWorksmanScheduleApiGateway(api, GetWorksmanScheduleLambdaApi, 'GET', auth)

    // DELETE APIS
    DeletePostcodesApiGateway(api, DeletePostcodesLambdaApi, 'DELETE', auth)
    DeleteWorkmanScheduleApiGateway(api, DeleteWorkmanScheduleLambdaApi, 'DELETE', auth)

    // UPDATE APIS
    UpdateWorksmanDetailsApiGateway(api, UpdateWorksmanDetailLambda, 'PUT', auth)

  }
}