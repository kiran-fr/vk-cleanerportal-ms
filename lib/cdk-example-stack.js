"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkExampleStack = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const allLambda_1 = require("./resources/lambda/allLambda");
const apigateway = require("@aws-cdk/aws-apigateway");
const ApiGatewayConstant_1 = require("../constants/ApiGatewayConstant");
const AllApiGateWays_1 = require("./resources/ApiGateway/AllApiGateWays");
const cognito = require("@aws-cdk/aws-cognito");
class CdkExampleStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const userRegistration = new lambda.Function(this, 'UserRegistration', allLambda_1.UserRegistrationLambda());
        const WorksManTermsAndCondition = new lambda.Function(this, 'WorksManTermsAndCondition', allLambda_1.WorksManTermsAndConditionLambda());
        const WorksManExperience = new lambda.Function(this, 'WorksManExperience', allLambda_1.WorksManExperienceLambda());
        const GetWorksmanAccountRegistartionStatus = new lambda.Function(this, "GetWorksmanAccountRegistartionStatus", allLambda_1.GetWorksmanAccountRegistartionStatusLambda());
        const GetTestUser = new lambda.Function(this, "GetTestUser", allLambda_1.GetTestUserLambda());
        const PostTestUser = new lambda.Function(this, "PostTestUser", allLambda_1.PostTestUserLambda());
        const getAllMobileNumbersDemo = new lambda.Function(this, "getAllMobileNumber", allLambda_1.getAllMobileNumberLambda());
        const GetWorkmanDetailLambda = new lambda.Function(this, "GetWorkmanDetails", allLambda_1.GetWorkmanDetailsLambda());
        const UpdateWorksmanDetailLambda = new lambda.Function(this, "UpdateWorksmanDetail", allLambda_1.UpdateWorksmanDetailsLambda());
        const UserPostCodeLambdaApi = new lambda.Function(this, "UserPostCodes", allLambda_1.UserPostCodesLambda());
        const GetAllPostcodesLambdaApi = new lambda.Function(this, "GetAllPostcodes", allLambda_1.GetAllPostcodesLambda());
        const DeletePostcodesLambdaApi = new lambda.Function(this, "DeletePostcodes", allLambda_1.DeletePostcodesLambda());
        const WorksmnaScheduleLambdaApi = new lambda.Function(this, "WorksmnaScheduletcodes", allLambda_1.WorksmnaScheduleLambda());
        const DeleteWorkmanScheduleLambdaApi = new lambda.Function(this, "DeleteWorkmanSchedule", allLambda_1.DeleteWorkmanScheduleLambda());
        const GetWorksmanScheduleLambdaApi = new lambda.Function(this, "GetWorksmanSchedule", allLambda_1.GetWorksmanSchedulesLambda());
        const api = new apigateway.RestApi(this, 'WorksManApiDefault', ApiGatewayConstant_1.ApigatewayDataConstants(apigateway));
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
        const auth = new apigateway.CognitoUserPoolsAuthorizer(this, 'Authorizer', {
            cognitoUserPools: [userPool]
        });
        // POST APIS
        AllApiGateWays_1.WorksmanTermsAndConditionsApiGateway(api, WorksManTermsAndCondition, 'POST', auth);
        AllApiGateWays_1.worksmanExperienceApiGateway(api, WorksManExperience, 'POST', auth);
        AllApiGateWays_1.PostUserApiGateway(api, PostTestUser, 'POST', auth);
        AllApiGateWays_1.UserPostCodesApiGateway(api, UserPostCodeLambdaApi, 'POST', auth);
        AllApiGateWays_1.WorksmnaScheduleApiGateway(api, WorksmnaScheduleLambdaApi, 'POST', auth);
        // GET APIS
        AllApiGateWays_1.GetWorksmanAccountRegistartionStatusApiGateway(api, GetWorksmanAccountRegistartionStatus, 'GET', auth);
        AllApiGateWays_1.GetTestUserApiGateway(api, GetTestUser, 'GET', auth);
        AllApiGateWays_1.getAllMobileNumbersApiGateway(api, getAllMobileNumbersDemo, 'GET');
        AllApiGateWays_1.GetWorkmanDetailsApiGateway(api, GetWorkmanDetailLambda, 'GET', auth);
        AllApiGateWays_1.GetAllPostcodesApiGateway(api, GetAllPostcodesLambdaApi, 'GET', auth);
        AllApiGateWays_1.GetWorksmanScheduleApiGateway(api, GetWorksmanScheduleLambdaApi, 'GET', auth);
        // DELETE APIS
        AllApiGateWays_1.DeletePostcodesApiGateway(api, DeletePostcodesLambdaApi, 'DELETE', auth);
        AllApiGateWays_1.DeleteWorkmanScheduleApiGateway(api, DeleteWorkmanScheduleLambdaApi, 'DELETE', auth);
        // UPDATE APIS
        AllApiGateWays_1.UpdateWorksmanDetailsApiGateway(api, UpdateWorksmanDetailLambda, 'PUT', auth);
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLDREQVdzQztBQUd0QyxzREFBcUQ7QUFDckQsd0VBQTBFO0FBQzFFLDBFQVcrQztBQUcvQyxnREFBZ0Q7QUFFaEQsTUFBYSxlQUFnQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBRTVDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLGtDQUFzQixFQUFFLENBQUMsQ0FBQTtRQUNoRyxNQUFNLHlCQUF5QixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsMkJBQTJCLEVBQUUsMkNBQStCLEVBQUUsQ0FBQyxDQUFBO1FBQzNILE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxvQ0FBd0IsRUFBRSxDQUFDLENBQUE7UUFDdEcsTUFBTSxvQ0FBb0MsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHNDQUFzQyxFQUFFLHNEQUEwQyxFQUFFLENBQUMsQ0FBQTtRQUM1SixNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSw2QkFBaUIsRUFBRSxDQUFDLENBQUE7UUFDakYsTUFBTSxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsOEJBQWtCLEVBQUUsQ0FBQyxDQUFBO1FBQ3BGLE1BQU0sdUJBQXVCLEdB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S0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3BELDhDQUE2QixDQUFDLEdBQUcsRUFBRSx1QkFBdUIsRUFBRSxLQUFLLENBQUMsQ0FBQTtRQUNsRSw0Q0FBMkIsQ0FBQyxHQUFHLEVBQUUsc0JBQXNCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ3JFLDBDQUF5QixDQUFDLEdBQUcsRUFBRSx3QkFBd0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDckUsOENBQTZCLENBQUMsR0FBRyxFQUFFLDRCQUE0QixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUU3RSxjQUFjO1FBQ2QsMENBQXlCLENBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN4RSxnREFBK0IsQ0FBQyxHQUFHLEVBQUUsOEJBQThCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBRXBGLGNBQWM7UUFDZCxnREFBK0IsQ0FBQyxHQUFHLEVBQUUsMEJBQTBCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO0lBRS9FLENBQUM7Q0FDRjtBQXpKRCwwQ0F5SkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcclxuaW1wb3J0IHtcclxuICBVc2VyUmVnaXN0cmF0aW9uTGFtYmRhLCBXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uTGFtYmRhLCBXb3Jrc01hbkV4cGVyaWVuY2VMYW1iZGEsXHJcbiAgR2V0V29ya3NtYW5BY2NvdW50UmVnaXN0YXJ0aW9uU3RhdHVzTGFtYmRhLCBHZXRUZXN0VXNlckxhbWJkYSwgUG9zdFRlc3RVc2VyTGFtYmRhLCBnZXRBbGxNb2JpbGVOdW1iZXJMYW1iZGEsXHJcbiAgR2V0V29ya21hbkRldGFpbHNMYW1iZGEsXHJcbiAgVXBkYXRlV29ya3NtYW5EZXRhaWxzTGFtYmRhLFxyXG4gIFVzZXJQb3N0Q29kZXNMYW1iZGEsXHJcbiAgR2V0QWxsUG9zdGNvZGVzTGFtYmRhLFxyXG4gIERlbGV0ZVBvc3Rjb2Rlc0xhbWJkYSxcclxuICBXb3Jrc21uYVNjaGVkdWxlTGFtYmRhLFxyXG4gIERlbGV0ZVdvcmttYW5TY2hlZHVsZUxhbWJkYSxcclxuICBHZXRXb3Jrc21hblNjaGVkdWxlc0xhbWJkYVxyXG59IGZyb20gJy4vcmVzb3VyY2VzL2xhbWJkYS9hbGxMYW1iZGEnO1xyXG5pbXBvcnQgKiBhcyBzZm4gZnJvbSBcIkBhd3MtY2RrL2F3cy1zdGVwZnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9ucy10YXNrc1wiO1xyXG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gXCJAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheVwiXHJcbmltcG9ydCB7IEFwaWdhdGV3YXlEYXRhQ29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL0FwaUdhdGV3YXlDb25zdGFudCc7XHJcbmltcG9ydCB7XHJcbiAgV29ya3NtYW5UZXJtc0FuZENvbmRpdGlvbnNBcGlHYXRld2F5LCBQb3N0VXNlckFwaUdhdGV3YXksIGdldEFsbE1vYmlsZU51bWJlcnNBcGlHYXRld2F5LFxyXG4gIHdvcmtzbWFuRXhwZXJpZW5jZUFwaUdhdGV3YXksIEdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1c0FwaUdhdGV3YXksIEdldFRlc3RVc2VyQXBpR2F0ZXdheSxcclxuICBHZXRXb3JrbWFuRGV0YWlsc0FwaUdhdGV3YXksXHJcbiAgVXBkYXRlV29ya3NtYW5EZXRhaWxzQXBpR2F0ZXdheSxcclxuICBVc2VyUG9zdENvZGVzQXBpR2F0ZXdheSxcclxuICBHZXRBbGxQb3N0Y29kZXNBcGlHYXRld2F5LFxyXG4gIERlbGV0ZVBvc3Rjb2Rlc0FwaUdhdGV3YXksXHJcbiAgV29ya3NtbmFTY2hlZHVsZUFwaUdhdGV3YXksXHJcbiAgRGVsZXRlV29ya21hblNjaGVkdWxlQXBpR2F0ZXdheSxcclxuICBHZXRXb3Jrc21hblNjaGVkdWxlQXBpR2F0ZXdheVxyXG59IGZyb20gXCIuL3Jlc291cmNlcy9BcGlHYXRld2F5L0FsbEFwaUdhdGVXYXlzXCI7XHJcbmltcG9ydCAqIGFzIGFwaUdhdGV3YXlBdXRob3JpemVycyBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheXYyLWF1dGhvcml6ZXJzJztcclxuaW1wb3J0ICogYXMgYXBpR2F0ZXdheUludGVncmF0aW9ucyBmcm9tICdAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheXYyLWludGVncmF0aW9ucyc7XHJcbmltcG9ydCAqIGFzIGNvZ25pdG8gZnJvbSAnQGF3cy1jZGsvYXdzLWNvZ25pdG8nO1xyXG5cclxuZXhwb3J0IGNsYXNzIENka0V4YW1wbGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgcHVibGljIE1hY2hpbmU6IHNmbi5TdGF0ZU1hY2hpbmU7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJSZWdpc3RyYXRpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdVc2VyUmVnaXN0cmF0aW9uJywgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSgpKVxyXG4gICAgY29uc3QgV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ1dvcmtzTWFuVGVybXNBbmRDb25kaXRpb24nLCBXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uTGFtYmRhKCkpXHJcbiAgICBjb25zdCBXb3Jrc01hbkV4cGVyaWVuY2UgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdXb3Jrc01hbkV4cGVyaWVuY2UnLCBXb3Jrc01hbkV4cGVyaWVuY2VMYW1iZGEoKSlcclxuICAgIGNvbnN0IEdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1cyA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXNcIiwgR2V0V29ya3NtYW5BY2NvdW50UmVnaXN0YXJ0aW9uU3RhdHVzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXRUZXN0VXNlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHZXRUZXN0VXNlclwiLCBHZXRUZXN0VXNlckxhbWJkYSgpKVxyXG4gICAgY29uc3QgUG9zdFRlc3RVc2VyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIlBvc3RUZXN0VXNlclwiLCBQb3N0VGVzdFVzZXJMYW1iZGEoKSlcclxuICAgIGNvbnN0IGdldEFsbE1vYmlsZU51bWJlcnNEZW1vID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcImdldEFsbE1vYmlsZU51bWJlclwiLCBnZXRBbGxNb2JpbGVOdW1iZXJMYW1iZGEoKSlcclxuICAgIGNvbnN0IEdldFdvcmttYW5EZXRhaWxMYW1iZGEgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiR2V0V29ya21hbkRldGFpbHNcIiwgR2V0V29ya21hbkRldGFpbHNMYW1iZGEoKSlcclxuICAgIGNvbnN0IFVwZGF0ZVdvcmtzbWFuRGV0YWlsTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIlVwZGF0ZVdvcmtzbWFuRGV0YWlsXCIsIFVwZGF0ZVdvcmtzbWFuRGV0YWlsc0xhbWJkYSgpKVxyXG4gICAgY29uc3QgVXNlclBvc3RDb2RlTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIlVzZXJQb3N0Q29kZXNcIiwgVXNlclBvc3RDb2Rlc0xhbWJkYSgpKVxyXG4gICAgY29uc3QgR2V0QWxsUG9zdGNvZGVzTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkdldEFsbFBvc3Rjb2Rlc1wiLCBHZXRBbGxQb3N0Y29kZXNMYW1iZGEoKSlcclxuICAgIGNvbnN0IERlbGV0ZVBvc3Rjb2Rlc0xhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJEZWxldGVQb3N0Y29kZXNcIiwgRGVsZXRlUG9zdGNvZGVzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBXb3Jrc21uYVNjaGVkdWxlTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIldvcmtzbW5hU2NoZWR1bGV0Y29kZXNcIiwgV29ya3NtbmFTY2hlZHVsZUxhbWJkYSgpKVxyXG4gICAgY29uc3QgRGVsZXRlV29ya21hblNjaGVkdWxlTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkRlbGV0ZVdvcmttYW5TY2hlZHVsZVwiLCBEZWxldGVXb3JrbWFuU2NoZWR1bGVMYW1iZGEoKSlcclxuICAgIGNvbnN0IEdldFdvcmtzbWFuU2NoZWR1bGVMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiR2V0V29ya3NtYW5TY2hlZHVsZVwiLCBHZXRXb3Jrc21hblNjaGVkdWxlc0xhbWJkYSgpKVxyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ1dvcmtzTWFuQXBpRGVmYXVsdCcsIEFwaWdhdGV3YXlEYXRhQ29uc3RhbnRzKGFwaWdhdGV3YXkpKTtcclxuXHJcbiAgICBjb25zdCB1c2VyUG9vbCA9IG5ldyBjb2duaXRvLlVzZXJQb29sKHRoaXMsICd1c2VycG9vbCcsIHtcclxuICAgICAgdXNlclBvb2xOYW1lOiBgdmstY2xlYW4tcG9ydGFsYCxcclxuICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWSxcclxuICAgICAgc2VsZlNpZ25VcEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIHNpZ25JbkFsaWFzZXM6IHsgZW1haWw6IHRydWUsIHBob25lOiB0cnVlIH0sXHJcbiAgICAgIGF1dG9WZXJpZnk6IHsgZW1haWw6IHRydWUgfSxcclxuICAgICAgcGFzc3dvcmRQb2xpY3k6IHtcclxuICAgICAgICBtaW5MZW5ndGg6IDYsXHJcbiAgICAgICAgcmVxdWlyZUxvd2VyY2FzZTogdHJ1ZSxcclxuICAgICAgICByZXF1aXJlRGlnaXRzOiB0cnVlLFxyXG4gICAgICAgIHJlcXVpcmVVcHBlcmNhc2U6IHRydWUsXHJcbiAgICAgICAgcmVxdWlyZVN5bWJvbHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgc3RhbmRhcmRBdHRyaWJ1dGVzOntcclxuICAgICAgZ2l2ZW5OYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBtdXRhYmxlOnRydWVcclxuICAgICAgfSxcclxuICAgICAgZmFtaWx5TmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBtdXRhYmxlOnRydWVcclxuICAgICAgfSxcclxuICAgICAgYWRkcmVzczoge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGJpcnRoZGF0ZToge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdlbmRlcjoge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvY2FsZToge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lTnVtYmVyOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBtdXRhYmxlOnRydWVcclxuICAgICAgfSxcclxuICAgICB9LFxyXG4gICAgICBhY2NvdW50UmVjb3Zlcnk6IGNvZ25pdG8uQWNjb3VudFJlY292ZXJ5LkVNQUlMX09OTFksXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3RhbmRhcmRDb2duaXRvQXR0cmlidXRlcyA9IHtcclxuICAgICAgZ2l2ZW5OYW1lOiB0cnVlLFxyXG4gICAgICBmYW1pbHlOYW1lOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgYWRkcmVzczogdHJ1ZSxcclxuICAgICAgYmlydGhkYXRlOiB0cnVlLFxyXG4gICAgICBnZW5kZXI6IHRydWUsXHJcbiAgICAgIGxvY2FsZTogdHJ1ZSxcclxuICAgICAgcGhvbmVOdW1iZXI6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGllbnRSZWFkQXR0cmlidXRlcyA9IG5ldyBjb2duaXRvLkNsaWVudEF0dHJpYnV0ZXMoKVxyXG4gICAgICAud2l0aFN0YW5kYXJkQXR0cmlidXRlcyhzdGFuZGFyZENvZ25pdG9BdHRyaWJ1dGVzKVxyXG4gICAgXHJcbiAgICBjb25zdCBjbGllbnRXcml0ZUF0dHJpYnV0ZXMgPSBuZXcgY29nbml0by5DbGllbnRBdHRyaWJ1dGVzKClcclxuICAgICAgLndpdGhTdGFuZGFyZEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgIC4uLnN0YW5kYXJkQ29nbml0b0F0dHJpYnV0ZXMsXHJcbiAgICAgICAgZW1haWxWZXJpZmllZDogZmFsc2UsXHJcbiAgICAgICAgcGhvbmVOdW1iZXJWZXJpZmllZDogZmFsc2UsXHJcbiAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgIGNvbnN0IHVzZXJQb29sQ2xpZW50ID0gbmV3IGNvZ25pdG8uVXNlclBvb2xDbGllbnQodGhpcywgJ3VzZXJwb29sLWNsaWVudCcsIHtcclxuICAgICAgICB1c2VyUG9vbCxcclxuICAgICAgICBhdXRoRmxvd3M6IHsgIFxyXG4gICAgICAgICAgYWRtaW5Vc2VyUGFzc3dvcmQ6IHRydWUsXHJcbiAgICAgICAgICBjdXN0b206IHRydWUsXHJcbiAgICAgICAgICB1c2VyU3JwOiB0cnVlLFxyXG4gICAgICAgICAgdXNlclBhc3N3b3JkOnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICBjb2duaXRvLlVzZXJQb29sQ2xpZW50SWRlbnRpdHlQcm92aWRlci5DT0dOSVRPLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmVhZEF0dHJpYnV0ZXM6IGNsaWVudFJlYWRBdHRyaWJ1dGVzLFxyXG4gICAgICAgIHdyaXRlQXR0cmlidXRlczogY2xpZW50V3JpdGVBdHRyaWJ1dGVzLFxyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdyZWdpb24nLCB7IHZhbHVlOiBjZGsuU3RhY2sub2YodGhpcykucmVnaW9uIH0pO1xyXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ3VzZXJQb29sSWQnLCB7IHZhbHVlOiB1c2VyUG9vbC51c2VyUG9vbElkIH0pO1xyXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ3VzZXJQb29sQ2xpZW50SWQnLCB7XHJcbiAgICAgIHZhbHVlOiB1c2VyUG9vbENsaWVudC51c2VyUG9vbENsaWVudElkLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdhcGlVcmwnLCB7IHZhbHVlOiBhcGkudXJsIH0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgYXV0aCA9IG5ldyBhcGlnYXRld2F5LkNvZ25pdG9Vc2VyUG9vbHNBdXRob3JpemVyKHRoaXMsICdBdXRob3JpemVyJywge1xyXG4gICAgICBjb2duaXRvVXNlclBvb2xzOiBbdXNlclBvb2xdXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vIFBPU1QgQVBJU1xyXG4gICAgV29ya3NtYW5UZXJtc0FuZENvbmRpdGlvbnNBcGlHYXRld2F5KGFwaSwgV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbiwgJ1BPU1QnLCBhdXRoKVxyXG4gICAgd29ya3NtYW5FeHBlcmllbmNlQXBpR2F0ZXdheShhcGksIFdvcmtzTWFuRXhwZXJpZW5jZSwgJ1BPU1QnLCBhdXRoKVxyXG4gICAgUG9zdFVzZXJBcGlHYXRld2F5KGFwaSwgUG9zdFRlc3RVc2VyLCAnUE9TVCcsIGF1dGgpXHJcbiAgICBVc2VyUG9zdENvZGVzQXBpR2F0ZXdheShhcGksIFVzZXJQb3N0Q29kZUxhbWJkYUFwaSwgJ1BPU1QnLCBhdXRoKVxyXG4gICAgV29ya3NtbmFTY2hlZHVsZUFwaUdhdGV3YXkoYXBpLCBXb3Jrc21uYVNjaGVkdWxlTGFtYmRhQXBpLCAnUE9TVCcsIGF1dGgpXHJcblxyXG4gICAgLy8gR0VUIEFQSVNcclxuICAgIEdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1c0FwaUdhdGV3YXkoYXBpLCBHZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXMsICdHRVQnLCBhdXRoKVxyXG4gICAgR2V0VGVzdFVzZXJBcGlHYXRld2F5KGFwaSwgR2V0VGVzdFVzZXIsICdHRVQnLCBhdXRoKVxyXG4gICAgZ2V0QWxsTW9iaWxlTnVtYmVyc0FwaUdhdGV3YXkoYXBpLCBnZXRBbGxNb2JpbGVOdW1iZXJzRGVtbywgJ0dFVCcpXHJcbiAgICBHZXRXb3JrbWFuRGV0YWlsc0FwaUdhdGV3YXkoYXBpLCBHZXRXb3JrbWFuRGV0YWlsTGFtYmRhLCAnR0VUJywgYXV0aClcclxuICAgIEdldEFsbFBvc3Rjb2Rlc0FwaUdhdGV3YXkoYXBpLCBHZXRBbGxQb3N0Y29kZXNMYW1iZGFBcGksICdHRVQnLCBhdXRoKVxyXG4gICAgR2V0V29ya3NtYW5TY2hlZHVsZUFwaUdhdGV3YXkoYXBpLCBHZXRXb3Jrc21hblNjaGVkdWxlTGFtYmRhQXBpLCAnR0VUJywgYXV0aClcclxuXHJcbiAgICAvLyBERUxFVEUgQVBJU1xyXG4gICAgRGVsZXRlUG9zdGNvZGVzQXBpR2F0ZXdheShhcGksIERlbGV0ZVBvc3Rjb2Rlc0xhbWJkYUFwaSwgJ0RFTEVURScsIGF1dGgpXHJcbiAgICBEZWxldGVXb3JrbWFuU2NoZWR1bGVBcGlHYXRld2F5KGFwaSwgRGVsZXRlV29ya21hblNjaGVkdWxlTGFtYmRhQXBpLCAnREVMRVRFJywgYXV0aClcclxuXHJcbiAgICAvLyBVUERBVEUgQVBJU1xyXG4gICAgVXBkYXRlV29ya3NtYW5EZXRhaWxzQXBpR2F0ZXdheShhcGksIFVwZGF0ZVdvcmtzbWFuRGV0YWlsTGFtYmRhLCAnUFVUJywgYXV0aClcclxuXHJcbiAgfVxyXG59Il19