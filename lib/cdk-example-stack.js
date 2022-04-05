"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkExampleStack = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const alllambda_1 = require("./resources/lambda/alllambda");
const apigateway = require("@aws-cdk/aws-apigateway");
const ApiGatewayConstant_1 = require("../constants/ApiGatewayConstant");
const cognito = require("@aws-cdk/aws-cognito");
class CdkExampleStack extends cdk.Stack {
    // public readonly urlOutput: CfnOutput;
    constructor(scope, id, props) {
        super(scope, id, props);
        const userRegistration = new lambda.Function(this, 'UserRegistration', alllambda_1.UserRegistrationLambda());
        const WorksManTermsAndCondition = new lambda.Function(this, 'WorksManTermsAndCondition', alllambda_1.WorksManTermsAndConditionLambda());
        const WorksManExperience = new lambda.Function(this, 'WorksManExperience', alllambda_1.WorksManExperienceLambda());
        const GetWorksmanAccountRegistartionStatus = new lambda.Function(this, "GetWorksmanAccountRegistartionStatus", alllambda_1.GetWorksmanAccountRegistartionStatusLambda());
        const getAllMobileNumbersDemo = new lambda.Function(this, "getAllMobileNumber", alllambda_1.getAllMobileNumberLambda());
        const GetWorkmanDetailLambda = new lambda.Function(this, "GetWorkmanDetails", alllambda_1.GetWorkmanDetailsLambda());
        const UpdateWorksmanDetailLambda = new lambda.Function(this, "UpdateWorksmanDetail", alllambda_1.UpdateWorksmanDetailsLambda());
        const UserPostCodeLambdaApi = new lambda.Function(this, "UserPostCodes", alllambda_1.UserPostCodesLambda());
        const GetAllPostcodesLambdaApi = new lambda.Function(this, "GetAllPostcodes", alllambda_1.GetAllPostcodesLambda());
        const DeletePostcodesLambdaApi = new lambda.Function(this, "DeletePostcodes", alllambda_1.DeletePostcodesLambda());
        const CreateWorksmanScheduleLambdaApi = new lambda.Function(this, "CreateWorksmanSchedule", alllambda_1.CreateWorksmanScheduleLambda());
        const DeleteWorkmanScheduleLambdaApi = new lambda.Function(this, "DeleteWorkmanSchedule", alllambda_1.DeleteWorkmanScheduleLambda());
        const GetWorksmanScheduleLambdaApi = new lambda.Function(this, "GetWorksmanSchedule", alllambda_1.GetWorksmanSchedulesLambda());
        const GetWorksmanjobsLambdaApi = new lambda.Function(this, "GetWorksmanjobs", alllambda_1.GetWorksmanjobsLambda());
        const WorksmanjobsCreateLambdaApi = new lambda.Function(this, "WorksmanjobsCreate", alllambda_1.WorksmanjobsCreateLambda());
        const CreateBankDetailsLambdaApi = new lambda.Function(this, "CreateBankDetails", alllambda_1.CreateBankDetailsLambda());
        const GetBankDetailsLambdaApi = new lambda.Function(this, "GetBankDetails", alllambda_1.GetBankDetailsLambda());
        const CreateMessagesLambdaApi = new lambda.Function(this, "CreateMessages", alllambda_1.CreateMessagesLambda());
        const GetMessagesLambdaApi = new lambda.Function(this, "GetMessages", alllambda_1.GetMessagesLambda());
        const CreateCustomerTableLambdaApi = new lambda.Function(this, "CreateCustomerTable", alllambda_1.CreateCustomerTableLambda());
        const CreateCustomerAddressLambdaApi = new lambda.Function(this, "CreateCustomerAddress", alllambda_1.CreateCustomerAddressLambda());
        const GetJobsLambdaApi = new lambda.Function(this, "GetJobs", alllambda_1.GetJobsLambda());
        const GetPaymentDetailsLambdaApi = new lambda.Function(this, "GetPaymentDetails", alllambda_1.GetPaymentDetailsLambda());
        const CreatePaymentHistoryDetailsLambdaApi = new lambda.Function(this, "CreatePaymentHistoryDetails", alllambda_1.CreatePaymentHistoryDetailsLambda());
        const GetPaymentHistoryDetailsLambdaApi = new lambda.Function(this, "GetPaymentHistoryDetails", alllambda_1.GetPaymentHistoryDetailsLambda());
        const GetDistrictWisePostCodesLambdaApi = new lambda.Function(this, "GetDistrictWisePostCodes", alllambda_1.GetDistrictWisePostCodesLambda());
        const api = new apigateway.RestApi(this, 'WorksManApiData', ApiGatewayConstant_1.ApigatewayDataConstants(apigateway));
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
            .withStandardAttributes(standardCognitoAttributes);
        const clientWriteAttributes = new cognito.ClientAttributes()
            .withStandardAttributes({
            ...standardCognitoAttributes,
            emailVerified: false,
            phoneNumberVerified: false,
        });
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
        // const auth = new apigateway.CognitoUserPoolsAuthorizer(this, 'Authorizer', {
        //   cognitoUserPools: [userPool]
        // });
        // // POST APIS
        // WorksmanTermsAndConditionsApiGateway(api, WorksManTermsAndCondition, 'POST', auth)
        // worksmanExperienceApiGateway(api, WorksManExperience, 'POST', auth)
        // // PostUserApiGateway(api, PostTestUser, 'POST', auth)
        // UserPostCodesApiGateway(api, UserPostCodeLambdaApi, 'POST', auth)
        // CreateWorksmanScheduleApiGateway(api, CreateWorksmanScheduleLambdaApi, 'POST', auth)
        // WorksmanjobsCreateApiGateway(api, WorksmanjobsCreateLambdaApi, 'POST', auth)
        // CreateBankDetailsApiGateway(api, CreateBankDetailsLambdaApi, 'POST', auth)
        // CreateMessagesApiGateway(api, CreateMessagesLambdaApi, 'POST', auth)
        // CreateCustomerTableApiGateway(api, CreateCustomerTableLambdaApi, 'POST', auth)
        // CreateCustomerAddressApiGateway(api, CreateCustomerTableLambdaApi, 'POST', auth)
        // CreatePaymentHistoryDetailsApiGateway(api, CreateCustomerTableLambdaApi, 'POST', auth)
        // // GET APIS
        // GetWorksmanAccountRegistartionStatusApiGateway(api, GetWorksmanAccountRegistartionStatus, 'GET', auth)
        // // GetTestUserApiGateway(api, GetTestUser, 'GET', auth)
        // getAllMobileNumbersApiGateway(api, getAllMobileNumbersDemo, 'GET')
        // GetWorkmanDetailsApiGateway(api, GetWorkmanDetailLambda, 'GET', auth)
        // GetAllPostcodesApiGateway(api, GetAllPostcodesLambdaApi, 'GET', auth)
        // GetWorksmanScheduleApiGateway(api, GetWorksmanScheduleLambdaApi, 'GET', auth)
        // GetWorksmanjobsApiGateway(api, GetWorksmanjobsLambdaApi, 'GET', auth)
        // GetBankDetailsApiGateway(api, GetBankDetailsLambdaApi, 'GET', auth)
        // GetMessagesApiGateway(api, GetMessagesLambdaApi, 'GET', auth)
        // GetJobsApiGateway(api, GetJobsLambdaApi, 'GET', auth)
        // GetPaymentDetailsApiGateway(api, GetPaymentDetailsLambdaApi, 'GET', auth)
        // GetPaymentHistoryDetailsApiGateway(api, GetPaymentHistoryDetailsLambdaApi, 'GET', auth)
        // GetDistrictWisePostCodesApiGateway(api, GetDistrictWisePostCodesLambdaApi, 'GET', auth)
        // // DELETE APIS
        // DeletePostcodesApiGateway(api, DeletePostcodesLambdaApi, 'DELETE', auth)
        // DeleteWorkmanScheduleApiGateway(api, DeleteWorkmanScheduleLambdaApi, 'DELETE', auth)
        // // UPDATE APIS
        // UpdateWorksmanDetailsApiGateway(api, UpdateWorksmanDetailLambda, 'PUT', auth)
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLDREQXdCc0M7QUFFdEMsc0RBQXFEO0FBQ3JELHdFQUEwRTtBQTBCMUUsZ0RBQWdEO0FBRWhELE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUU1Qyx3Q0FBd0M7SUFDeEMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsa0NBQXNCLEVBQUUsQ0FBQyxDQUFBO1FBQ2hHLE1BQU0seUJBQXlCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSwyQkFBMkIsRUFBRSwyQ0FBK0IsRUFBRSxDQUFDLENBQUE7UUFDM0gsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFLG9DQUF3QixFQUFFLENBQUMsQ0FBQTtRQUN0RyxNQUFNLG9DQUFvQyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsc0NBQXNDLEVBQUUsc0RBQTBDLEVBQUUsQ0FBQyxDQUFBO1FBQzVKLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxvQ0FBd0IsRUFBRSxDQUFDLENBQUE7UUFDM0csTUFBTSxzQkFBc0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLG1DQUF1QixFQUFFLENBQUMsQ0FBQTtRQUN4RyxNQUFN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QUNGO0FBbkxELDBDQW1MQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcclxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xyXG5pbXBvcnQge1xyXG4gIFVzZXJSZWdpc3RyYXRpb25MYW1iZGEsIFdvcmtzTWFuVGVybXNBbmRDb25kaXRpb25MYW1iZGEsIFdvcmtzTWFuRXhwZXJpZW5jZUxhbWJkYSxcclxuICBHZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXNMYW1iZGEsIGdldEFsbE1vYmlsZU51bWJlckxhbWJkYSxcclxuICBHZXRXb3JrbWFuRGV0YWlsc0xhbWJkYSxcclxuICBVcGRhdGVXb3Jrc21hbkRldGFpbHNMYW1iZGEsXHJcbiAgVXNlclBvc3RDb2Rlc0xhbWJkYSxcclxuICBHZXRBbGxQb3N0Y29kZXNMYW1iZGEsXHJcbiAgRGVsZXRlUG9zdGNvZGVzTGFtYmRhLFxyXG4gIENyZWF0ZVdvcmtzbWFuU2NoZWR1bGVMYW1iZGEsXHJcbiAgRGVsZXRlV29ya21hblNjaGVkdWxlTGFtYmRhLFxyXG4gIEdldFdvcmtzbWFuU2NoZWR1bGVzTGFtYmRhLFxyXG4gIEdldFdvcmtzbWFuam9ic0xhbWJkYSxcclxuICBXb3Jrc21hbmpvYnNDcmVhdGVMYW1iZGEsXHJcbiAgR2V0TWVzc2FnZXNMYW1iZGEsXHJcbiAgQ3JlYXRlTWVzc2FnZXNMYW1iZGEsXHJcbiAgQ3JlYXRlQmFua0RldGFpbHNMYW1iZGEsXHJcbiAgR2V0QmFua0RldGFpbHNMYW1iZGEsXHJcbiAgQ3JlYXRlQ3VzdG9tZXJUYWJsZUxhbWJkYSxcclxuICBDcmVhdGVDdXN0b21lckFkZHJlc3NMYW1iZGEsXHJcbiAgR2V0Sm9ic0xhbWJkYSxcclxuICBHZXRQYXltZW50RGV0YWlsc0xhbWJkYSxcclxuICBDcmVhdGVQYXltZW50SGlzdG9yeURldGFpbHNMYW1iZGEsXHJcbiAgR2V0UGF5bWVudEhpc3RvcnlEZXRhaWxzTGFtYmRhLFxyXG4gIEdldERpc3RyaWN0V2lzZVBvc3RDb2Rlc0xhbWJkYVxyXG59IGZyb20gJy4vcmVzb3VyY2VzL2xhbWJkYS9hbGxsYW1iZGEnO1xyXG5pbXBvcnQgKiBhcyBzZm4gZnJvbSBcIkBhd3MtY2RrL2F3cy1zdGVwZnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSBcIkBhd3MtY2RrL2F3cy1hcGlnYXRld2F5XCJcclxuaW1wb3J0IHsgQXBpZ2F0ZXdheURhdGFDb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMvQXBpR2F0ZXdheUNvbnN0YW50JztcclxuaW1wb3J0IHtcclxuICBXb3Jrc21hblRlcm1zQW5kQ29uZGl0aW9uc0FwaUdhdGV3YXksIGdldEFsbE1vYmlsZU51bWJlcnNBcGlHYXRld2F5LFxyXG4gIHdvcmtzbWFuRXhwZXJpZW5jZUFwaUdhdGV3YXksIEdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1c0FwaUdhdGV3YXksXHJcbiAgR2V0V29ya21hbkRldGFpbHNBcGlHYXRld2F5LFxyXG4gIFVwZGF0ZVdvcmtzbWFuRGV0YWlsc0FwaUdhdGV3YXksXHJcbiAgVXNlclBvc3RDb2Rlc0FwaUdhdGV3YXksXHJcbiAgR2V0QWxsUG9zdGNvZGVzQXBpR2F0ZXdheSxcclxuICBEZWxldGVQb3N0Y29kZXNBcGlHYXRld2F5LFxyXG4gIENyZWF0ZVdvcmtzbWFuU2NoZWR1bGVBcGlHYXRld2F5LFxyXG4gIERlbGV0ZVdvcmttYW5TY2hlZHVsZUFwaUdhdGV3YXksXHJcbiAgR2V0V29ya3NtYW5TY2hlZHVsZUFwaUdhdGV3YXksXHJcbiAgR2V0V29ya3NtYW5qb2JzQXBpR2F0ZXdheSxcclxuICBXb3Jrc21hbmpvYnNDcmVhdGVBcGlHYXRld2F5LFxyXG4gIEdldE1lc3NhZ2VzQXBpR2F0ZXdheSxcclxuICBDcmVhdGVNZXNzYWdlc0FwaUdhdGV3YXksXHJcbiAgQ3JlYXRlQmFua0RldGFpbHNBcGlHYXRld2F5LFxyXG4gIEdldEJhbmtEZXRhaWxzQXBpR2F0ZXdheSxcclxuICBDcmVhdGVDdXN0b21lclRhYmxlQXBpR2F0ZXdheSxcclxuICBDcmVhdGVDdXN0b21lckFkZHJlc3NBcGlHYXRld2F5LFxyXG4gIEdldEpvYnNBcGlHYXRld2F5LFxyXG4gIEdldFBheW1lbnREZXRhaWxzQXBpR2F0ZXdheSxcclxuICBDcmVhdGVQYXltZW50SGlzdG9yeURldGFpbHNBcGlHYXRld2F5LFxyXG4gIEdldFBheW1lbnRIaXN0b3J5RGV0YWlsc0FwaUdhdGV3YXksXHJcbiAgR2V0RGlzdHJpY3RXaXNlUG9zdENvZGVzQXBpR2F0ZXdheVxyXG59IGZyb20gXCIuL3Jlc291cmNlcy9BcGlHYXRld2F5L0FsbEFwaUdhdGVXYXlzXCI7XHJcbmltcG9ydCAqIGFzIGNvZ25pdG8gZnJvbSAnQGF3cy1jZGsvYXdzLWNvZ25pdG8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIENka0V4YW1wbGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgcHVibGljIE1hY2hpbmU6IHNmbi5TdGF0ZU1hY2hpbmU7XHJcbiAgLy8gcHVibGljIHJlYWRvbmx5IHVybE91dHB1dDogQ2ZuT3V0cHV0O1xyXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcbiAgICBjb25zdCB1c2VyUmVnaXN0cmF0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnVXNlclJlZ2lzdHJhdGlvbicsIFVzZXJSZWdpc3RyYXRpb25MYW1iZGEoKSlcclxuICAgIGNvbnN0IFdvcmtzTWFuVGVybXNBbmRDb25kaXRpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uJywgV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbkxhbWJkYSgpKVxyXG4gICAgY29uc3QgV29ya3NNYW5FeHBlcmllbmNlID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnV29ya3NNYW5FeHBlcmllbmNlJywgV29ya3NNYW5FeHBlcmllbmNlTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXMgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiR2V0V29ya3NtYW5BY2NvdW50UmVnaXN0YXJ0aW9uU3RhdHVzXCIsIEdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1c0xhbWJkYSgpKVxyXG4gICAgY29uc3QgZ2V0QWxsTW9iaWxlTnVtYmVyc0RlbW8gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiZ2V0QWxsTW9iaWxlTnVtYmVyXCIsIGdldEFsbE1vYmlsZU51bWJlckxhbWJkYSgpKVxyXG4gICAgY29uc3QgR2V0V29ya21hbkRldGFpbExhbWJkYSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHZXRXb3JrbWFuRGV0YWlsc1wiLCBHZXRXb3JrbWFuRGV0YWlsc0xhbWJkYSgpKVxyXG4gICAgY29uc3QgVXBkYXRlV29ya3NtYW5EZXRhaWxMYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiVXBkYXRlV29ya3NtYW5EZXRhaWxcIiwgVXBkYXRlV29ya3NtYW5EZXRhaWxzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBVc2VyUG9zdENvZGVMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiVXNlclBvc3RDb2Rlc1wiLCBVc2VyUG9zdENvZGVzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXRBbGxQb3N0Y29kZXNMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiR2V0QWxsUG9zdGNvZGVzXCIsIEdldEFsbFBvc3Rjb2Rlc0xhbWJkYSgpKVxyXG4gICAgY29uc3QgRGVsZXRlUG9zdGNvZGVzTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkRlbGV0ZVBvc3Rjb2Rlc1wiLCBEZWxldGVQb3N0Y29kZXNMYW1iZGEoKSlcclxuICAgIGNvbnN0IENyZWF0ZVdvcmtzbWFuU2NoZWR1bGVMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiQ3JlYXRlV29ya3NtYW5TY2hlZHVsZVwiLCBDcmVhdGVXb3Jrc21hblNjaGVkdWxlTGFtYmRhKCkpXHJcbiAgICBjb25zdCBEZWxldGVXb3JrbWFuU2NoZWR1bGVMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiRGVsZXRlV29ya21hblNjaGVkdWxlXCIsIERlbGV0ZVdvcmttYW5TY2hlZHVsZUxhbWJkYSgpKVxyXG4gICAgY29uc3QgR2V0V29ya3NtYW5TY2hlZHVsZUxhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHZXRXb3Jrc21hblNjaGVkdWxlXCIsIEdldFdvcmtzbWFuU2NoZWR1bGVzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXRXb3Jrc21hbmpvYnNMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiR2V0V29ya3NtYW5qb2JzXCIsIEdldFdvcmtzbWFuam9ic0xhbWJkYSgpKVxyXG4gICAgY29uc3QgV29ya3NtYW5qb2JzQ3JlYXRlTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIldvcmtzbWFuam9ic0NyZWF0ZVwiLCBXb3Jrc21hbmpvYnNDcmVhdGVMYW1iZGEoKSlcclxuICAgIGNvbnN0IENyZWF0ZUJhbmtEZXRhaWxzTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkNyZWF0ZUJhbmtEZXRhaWxzXCIsIENyZWF0ZUJhbmtEZXRhaWxzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXRCYW5rRGV0YWlsc0xhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHZXRCYW5rRGV0YWlsc1wiLCBHZXRCYW5rRGV0YWlsc0xhbWJkYSgpKVxyXG4gICAgY29uc3QgQ3JlYXRlTWVzc2FnZXNMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiQ3JlYXRlTWVzc2FnZXNcIiwgQ3JlYXRlTWVzc2FnZXNMYW1iZGEoKSlcclxuICAgIGNvbnN0IEdldE1lc3NhZ2VzTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkdldE1lc3NhZ2VzXCIsIEdldE1lc3NhZ2VzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBDcmVhdGVDdXN0b21lclRhYmxlTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkNyZWF0ZUN1c3RvbWVyVGFibGVcIiwgQ3JlYXRlQ3VzdG9tZXJUYWJsZUxhbWJkYSgpKVxyXG4gICAgY29uc3QgQ3JlYXRlQ3VzdG9tZXJBZGRyZXNzTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkNyZWF0ZUN1c3RvbWVyQWRkcmVzc1wiLCBDcmVhdGVDdXN0b21lckFkZHJlc3NMYW1iZGEoKSlcclxuICAgIGNvbnN0IEdldEpvYnNMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiR2V0Sm9ic1wiLCBHZXRKb2JzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXRQYXltZW50RGV0YWlsc0xhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHZXRQYXltZW50RGV0YWlsc1wiLCBHZXRQYXltZW50RGV0YWlsc0xhbWJkYSgpKVxyXG4gICAgY29uc3QgQ3JlYXRlUGF5bWVudEhpc3RvcnlEZXRhaWxzTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkNyZWF0ZVBheW1lbnRIaXN0b3J5RGV0YWlsc1wiLCBDcmVhdGVQYXltZW50SGlzdG9yeURldGFpbHNMYW1iZGEoKSlcclxuICAgIGNvbnN0IEdldFBheW1lbnRIaXN0b3J5RGV0YWlsc0xhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHZXRQYXltZW50SGlzdG9yeURldGFpbHNcIiwgR2V0UGF5bWVudEhpc3RvcnlEZXRhaWxzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXREaXN0cmljdFdpc2VQb3N0Q29kZXNMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiR2V0RGlzdHJpY3RXaXNlUG9zdENvZGVzXCIsIEdldERpc3RyaWN0V2lzZVBvc3RDb2Rlc0xhbWJkYSgpKVxyXG5cclxuXHJcbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5SZXN0QXBpKHRoaXMsICdXb3Jrc01hbkFwaURhdGEnLCBBcGlnYXRld2F5RGF0YUNvbnN0YW50cyhhcGlnYXRld2F5KSk7XHJcblxyXG4gICAgY29uc3QgdXNlclBvb2wgPSBuZXcgY29nbml0by5Vc2VyUG9vbCh0aGlzLCAndXNlcnBvb2wnLCB7XHJcbiAgICAgIHVzZXJQb29sTmFtZTogYHZrLWNsZWFuLXBvcnRhbGAsXHJcbiAgICAgIHJlbW92YWxQb2xpY3k6IGNkay5SZW1vdmFsUG9saWN5LkRFU1RST1ksXHJcbiAgICAgIHNlbGZTaWduVXBFbmFibGVkOiB0cnVlLFxyXG4gICAgICBzaWduSW5BbGlhc2VzOiB7IGVtYWlsOiB0cnVlLCBwaG9uZTogdHJ1ZSB9LFxyXG4gICAgICBhdXRvVmVyaWZ5OiB7IGVtYWlsOiB0cnVlIH0sXHJcbiAgICAgIHBhc3N3b3JkUG9saWN5OiB7XHJcbiAgICAgICAgbWluTGVuZ3RoOiA2LFxyXG4gICAgICAgIHJlcXVpcmVMb3dlcmNhc2U6IHRydWUsXHJcbiAgICAgICAgcmVxdWlyZURpZ2l0czogdHJ1ZSxcclxuICAgICAgICByZXF1aXJlVXBwZXJjYXNlOiB0cnVlLFxyXG4gICAgICAgIHJlcXVpcmVTeW1ib2xzOiB0cnVlLFxyXG4gICAgICB9LFxyXG4gICAgICBzdGFuZGFyZEF0dHJpYnV0ZXM6IHtcclxuICAgICAgICBnaXZlbk5hbWU6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbXV0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmFtaWx5TmFtZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtdXRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbWFpbDoge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtdXRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhZGRyZXNzOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgIG11dGFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJpcnRoZGF0ZToge1xyXG4gICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICAgICAgICBtdXRhYmxlOiB0cnVlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZW5kZXI6IHtcclxuICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxyXG4gICAgICAgICAgbXV0YWJsZTogdHJ1ZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9jYWxlOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgIG11dGFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBob25lTnVtYmVyOiB7XHJcbiAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcclxuICAgICAgICAgIG11dGFibGU6IHRydWVcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhY2NvdW50UmVjb3Zlcnk6IGNvZ25pdG8uQWNjb3VudFJlY292ZXJ5LkVNQUlMX09OTFksXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3RhbmRhcmRDb2duaXRvQXR0cmlidXRlcyA9IHtcclxuICAgICAgZ2l2ZW5OYW1lOiB0cnVlLFxyXG4gICAgICBmYW1pbHlOYW1lOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgYWRkcmVzczogdHJ1ZSxcclxuICAgICAgYmlydGhkYXRlOiB0cnVlLFxyXG4gICAgICBnZW5kZXI6IHRydWUsXHJcbiAgICAgIGxvY2FsZTogdHJ1ZSxcclxuICAgICAgcGhvbmVOdW1iZXI6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGNsaWVudFJlYWRBdHRyaWJ1dGVzID0gbmV3IGNvZ25pdG8uQ2xpZW50QXR0cmlidXRlcygpXHJcbiAgICAgIC53aXRoU3RhbmRhcmRBdHRyaWJ1dGVzKHN0YW5kYXJkQ29nbml0b0F0dHJpYnV0ZXMpXHJcblxyXG4gICAgY29uc3QgY2xpZW50V3JpdGVBdHRyaWJ1dGVzID0gbmV3IGNvZ25pdG8uQ2xpZW50QXR0cmlidXRlcygpXHJcbiAgICAgIC53aXRoU3RhbmRhcmRBdHRyaWJ1dGVzKHtcclxuICAgICAgICAuLi5zdGFuZGFyZENvZ25pdG9BdHRyaWJ1dGVzLFxyXG4gICAgICAgIGVtYWlsVmVyaWZpZWQ6IGZhbHNlLFxyXG4gICAgICAgIHBob25lTnVtYmVyVmVyaWZpZWQ6IGZhbHNlLFxyXG4gICAgICB9KVxyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdXNlclBvb2xDbGllbnQgPSBuZXcgY29nbml0by5Vc2VyUG9vbENsaWVudCh0aGlzLCAndXNlcnBvb2wtY2xpZW50Jywge1xyXG4gICAgICB1c2VyUG9vbCxcclxuICAgICAgYXV0aEZsb3dzOiB7XHJcbiAgICAgICAgYWRtaW5Vc2VyUGFzc3dvcmQ6IHRydWUsXHJcbiAgICAgICAgY3VzdG9tOiB0cnVlLFxyXG4gICAgICAgIHVzZXJTcnA6IHRydWUsXHJcbiAgICAgICAgdXNlclBhc3N3b3JkOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHN1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzOiBbXHJcbiAgICAgICAgY29nbml0by5Vc2VyUG9vbENsaWVudElkZW50aXR5UHJvdmlkZXIuQ09HTklUTyxcclxuICAgICAgXSxcclxuICAgICAgcmVhZEF0dHJpYnV0ZXM6IGNsaWVudFJlYWRBdHRyaWJ1dGVzLFxyXG4gICAgICB3cml0ZUF0dHJpYnV0ZXM6IGNsaWVudFdyaXRlQXR0cmlidXRlcyxcclxuICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ3JlZ2lvbicsIHsgdmFsdWU6IGNkay5TdGFjay5vZih0aGlzKS5yZWdpb24gfSk7XHJcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAndXNlclBvb2xJZCcsIHsgdmFsdWU6IHVzZXJQb29sLnVzZXJQb29sSWQgfSk7XHJcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAndXNlclBvb2xDbGllbnRJZCcsIHtcclxuICAgICAgdmFsdWU6IHVzZXJQb29sQ2xpZW50LnVzZXJQb29sQ2xpZW50SWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnYXBpVXJsJywgeyB2YWx1ZTogYXBpLnVybCB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGF1dGggPSBuZXcgYXBpZ2F0ZXdheS5Db2duaXRvVXNlclBvb2xzQXV0aG9yaXplcih0aGlzLCAnQXV0aG9yaXplcicsIHtcclxuICAgIC8vICAgY29nbml0b1VzZXJQb29sczogW3VzZXJQb29sXVxyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuXHJcbiAgICAvLyAvLyBQT1NUIEFQSVNcclxuICAgIC8vIFdvcmtzbWFuVGVybXNBbmRDb25kaXRpb25zQXBpR2F0ZXdheShhcGksIFdvcmtzTWFuVGVybXNBbmRDb25kaXRpb24sICdQT1NUJywgYXV0aClcclxuICAgIC8vIHdvcmtzbWFuRXhwZXJpZW5jZUFwaUdhdGV3YXkoYXBpLCBXb3Jrc01hbkV4cGVyaWVuY2UsICdQT1NUJywgYXV0aClcclxuICAgIC8vIC8vIFBvc3RVc2VyQXBpR2F0ZXdheShhcGksIFBvc3RUZXN0VXNlciwgJ1BPU1QnLCBhdXRoKVxyXG4gICAgLy8gVXNlclBvc3RDb2Rlc0FwaUdhdGV3YXkoYXBpLCBVc2VyUG9zdENvZGVMYW1iZGFBcGksICdQT1NUJywgYXV0aClcclxuICAgIC8vIENyZWF0ZVdvcmtzbWFuU2NoZWR1bGVBcGlHYXRld2F5KGFwaSwgQ3JlYXRlV29ya3NtYW5TY2hlZHVsZUxhbWJkYUFwaSwgJ1BPU1QnLCBhdXRoKVxyXG4gICAgLy8gV29ya3NtYW5qb2JzQ3JlYXRlQXBpR2F0ZXdheShhcGksIFdvcmtzbWFuam9ic0NyZWF0ZUxhbWJkYUFwaSwgJ1BPU1QnLCBhdXRoKVxyXG4gICAgLy8gQ3JlYXRlQmFua0RldGFpbHNBcGlHYXRld2F5KGFwaSwgQ3JlYXRlQmFua0RldGFpbHNMYW1iZGFBcGksICdQT1NUJywgYXV0aClcclxuICAgIC8vIENyZWF0ZU1lc3NhZ2VzQXBpR2F0ZXdheShhcGksIENyZWF0ZU1lc3NhZ2VzTGFtYmRhQXBpLCAnUE9TVCcsIGF1dGgpXHJcbiAgICAvLyBDcmVhdGVDdXN0b21lclRhYmxlQXBpR2F0ZXdheShhcGksIENyZWF0ZUN1c3RvbWVyVGFibGVMYW1iZGFBcGksICdQT1NUJywgYXV0aClcclxuICAgIC8vIENyZWF0ZUN1c3RvbWVyQWRkcmVzc0FwaUdhdGV3YXkoYXBpLCBDcmVhdGVDdXN0b21lclRhYmxlTGFtYmRhQXBpLCAnUE9TVCcsIGF1dGgpXHJcbiAgICAvLyBDcmVhdGVQYXltZW50SGlzdG9yeURldGFpbHNBcGlHYXRld2F5KGFwaSwgQ3JlYXRlQ3VzdG9tZXJUYWJsZUxhbWJkYUFwaSwgJ1BPU1QnLCBhdXRoKVxyXG5cclxuICAgIC8vIC8vIEdFVCBBUElTXHJcbiAgICAvLyBHZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXNBcGlHYXRld2F5KGFwaSwgR2V0V29ya3NtYW5BY2NvdW50UmVnaXN0YXJ0aW9uU3RhdHVzLCAnR0VUJywgYXV0aClcclxuICAgIC8vIC8vIEdldFRlc3RVc2VyQXBpR2F0ZXdheShhcGksIEdldFRlc3RVc2VyLCAnR0VUJywgYXV0aClcclxuICAgIC8vIGdldEFsbE1vYmlsZU51bWJlcnNBcGlHYXRld2F5KGFwaSwgZ2V0QWxsTW9iaWxlTnVtYmVyc0RlbW8sICdHRVQnKVxyXG4gICAgLy8gR2V0V29ya21hbkRldGFpbHNBcGlHYXRld2F5KGFwaSwgR2V0V29ya21hbkRldGFpbExhbWJkYSwgJ0dFVCcsIGF1dGgpXHJcbiAgICAvLyBHZXRBbGxQb3N0Y29kZXNBcGlHYXRld2F5KGFwaSwgR2V0QWxsUG9zdGNvZGVzTGFtYmRhQXBpLCAnR0VUJywgYXV0aClcclxuICAgIC8vIEdldFdvcmtzbWFuU2NoZWR1bGVBcGlHYXRld2F5KGFwaSwgR2V0V29ya3NtYW5TY2hlZHVsZUxhbWJkYUFwaSwgJ0dFVCcsIGF1dGgpXHJcbiAgICAvLyBHZXRXb3Jrc21hbmpvYnNBcGlHYXRld2F5KGFwaSwgR2V0V29ya3NtYW5qb2JzTGFtYmRhQXBpLCAnR0VUJywgYXV0aClcclxuICAgIC8vIEdldEJhbmtEZXRhaWxzQXBpR2F0ZXdheShhcGksIEdldEJhbmtEZXRhaWxzTGFtYmRhQXBpLCAnR0VUJywgYXV0aClcclxuICAgIC8vIEdldE1lc3NhZ2VzQXBpR2F0ZXdheShhcGksIEdldE1lc3NhZ2VzTGFtYmRhQXBpLCAnR0VUJywgYXV0aClcclxuICAgIC8vIEdldEpvYnNBcGlHYXRld2F5KGFwaSwgR2V0Sm9ic0xhbWJkYUFwaSwgJ0dFVCcsIGF1dGgpXHJcbiAgICAvLyBHZXRQYXltZW50RGV0YWlsc0FwaUdhdGV3YXkoYXBpLCBHZXRQYXltZW50RGV0YWlsc0xhbWJkYUFwaSwgJ0dFVCcsIGF1dGgpXHJcbiAgICAvLyBHZXRQYXltZW50SGlzdG9yeURldGFpbHNBcGlHYXRld2F5KGFwaSwgR2V0UGF5bWVudEhpc3RvcnlEZXRhaWxzTGFtYmRhQXBpLCAnR0VUJywgYXV0aClcclxuICAgIC8vIEdldERpc3RyaWN0V2lzZVBvc3RDb2Rlc0FwaUdhdGV3YXkoYXBpLCBHZXREaXN0cmljdFdpc2VQb3N0Q29kZXNMYW1iZGFBcGksICdHRVQnLCBhdXRoKVxyXG5cclxuICAgIC8vIC8vIERFTEVURSBBUElTXHJcbiAgICAvLyBEZWxldGVQb3N0Y29kZXNBcGlHYXRld2F5KGFwaSwgRGVsZXRlUG9zdGNvZGVzTGFtYmRhQXBpLCAnREVMRVRFJywgYXV0aClcclxuICAgIC8vIERlbGV0ZVdvcmttYW5TY2hlZHVsZUFwaUdhdGV3YXkoYXBpLCBEZWxldGVXb3JrbWFuU2NoZWR1bGVMYW1iZGFBcGksICdERUxFVEUnLCBhdXRoKVxyXG5cclxuICAgIC8vIC8vIFVQREFURSBBUElTXHJcbiAgICAvLyBVcGRhdGVXb3Jrc21hbkRldGFpbHNBcGlHYXRld2F5KGFwaSwgVXBkYXRlV29ya3NtYW5EZXRhaWxMYW1iZGEsICdQVVQnLCBhdXRoKVxyXG5cclxuICB9XHJcbn0iXX0=