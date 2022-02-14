import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
import { UserRegistrationLambda, WorksManTermsAndConditionLambda, WorksManExperienceLambda,
   GetWorksmanAccountRegistartionStatusLambda, GetTestUserLambda, PostTestUserLambda, getAllMobileNumberLambda,
   GetWorkmanDetailsLambda, 
   UpdateWorksmanDetailsLambda,
   UserPostCodesLambda,
   GetAllPostcodesLambda,
   DeletePostcodesLambda,
   WorksmnaScheduleLambda,
   DeleteWorkmanScheduleLambda,
   GetWorksmanSchedulesLambda} from './resources/lambda/alllambda';
import * as sfn from "@aws-cdk/aws-stepfunctions";
import * as tasks from "@aws-cdk/aws-stepfunctions-tasks";
import * as apigateway from "@aws-cdk/aws-apigateway"
import { ApigatewayDataConstants } from '../constants/ApiGatewayConstant';
import { WorksmanTermsAndConditionsApiGateway, PostUserApiGateway, getAllMobileNumbersApiGateway, 
  worksmanExperienceApiGateway, GetWorksmanAccountRegistartionStatusApiGateway, GetTestUserApiGateway,
  GetWorkmanDetailsApiGateway, 
  UpdateWorksmanDetailsApiGateway,
  UserPostCodesApiGateway,
  GetAllPostcodesApiGateway,
  DeletePostcodesApiGateway,
  WorksmnaScheduleApiGateway,
  DeleteWorkmanScheduleApiGateway,
  GetWorksmanScheduleApiGateway} from "./resources/ApiGateway/AllApiGateWays"
import { CfnOutput } from '@aws-cdk/core';

export class CdkExampleStack extends cdk.Stack {
  public Machine: sfn.StateMachine;
  public readonly urlOutput: CfnOutput;
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

    const api = new apigateway.RestApi(this, 'WorksManApi', ApigatewayDataConstants(apigateway));

   
    this.urlOutput =  new cdk.CfnOutput(this, 'apiUrl', { value: api.url });

    // POST APIS
    WorksmanTermsAndConditionsApiGateway(api, WorksManTermsAndCondition, 'POST')
    worksmanExperienceApiGateway(api, WorksManExperience, 'POST')
    PostUserApiGateway(api, PostTestUser, 'POST')
    UserPostCodesApiGateway(api, UserPostCodeLambdaApi, 'POST')
    WorksmnaScheduleApiGateway(api, WorksmnaScheduleLambdaApi, 'POST')

    // GET APIS
    GetWorksmanAccountRegistartionStatusApiGateway(api, GetWorksmanAccountRegistartionStatus, 'GET')
    GetTestUserApiGateway(api, GetTestUser, 'GET')
    getAllMobileNumbersApiGateway(api, getAllMobileNumbersDemo, 'GET')
    GetWorkmanDetailsApiGateway(api, GetWorkmanDetailLambda, 'GET')
    GetAllPostcodesApiGateway(api, GetAllPostcodesLambdaApi, 'GET')
    GetWorksmanScheduleApiGateway(api, GetWorksmanScheduleLambdaApi, 'GET')

    // DELETE APIS
    DeletePostcodesApiGateway(api, DeletePostcodesLambdaApi, 'DELETE')
    DeleteWorkmanScheduleApiGateway(api, DeleteWorkmanScheduleLambdaApi, 'DELETE')

    // UPDATE APIS
    UpdateWorksmanDetailsApiGateway(api, UpdateWorksmanDetailLambda, 'PUT')

  }
}