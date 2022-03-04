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
        const GetWorksmanjobsLambdaApi = new lambda.Function(this, "GetWorksmanjobs", allLambda_1.GetWorksmanjobsLambda());
        const WorksmanjobsCreateLambdaApi = new lambda.Function(this, "WorksmanjobsCreate", allLambda_1.WorksmanjobsCreateLambda());
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
        // WorksmanjobsCreateApiGateway(api, WorksmanjobsCreateLambdaApi, 'POST', auth)
        // GET APIS
        AllApiGateWays_1.GetWorksmanAccountRegistartionStatusApiGateway(api, GetWorksmanAccountRegistartionStatus, 'GET', auth);
        AllApiGateWays_1.GetTestUserApiGateway(api, GetTestUser, 'GET', auth);
        AllApiGateWays_1.getAllMobileNumbersApiGateway(api, getAllMobileNumbersDemo, 'GET');
        AllApiGateWays_1.GetWorkmanDetailsApiGateway(api, GetWorkmanDetailLambda, 'GET', auth);
        AllApiGateWays_1.GetAllPostcodesApiGateway(api, GetAllPostcodesLambdaApi, 'GET', auth);
        AllApiGateWays_1.GetWorksmanScheduleApiGateway(api, GetWorksmanScheduleLambdaApi, 'GET', auth);
        AllApiGateWays_1.GetWorksmanjobsApiGateway(api, GetWorksmanjobsLambdaApi, 'GET', auth);
        // DELETE APIS
        AllApiGateWays_1.DeletePostcodesApiGateway(api, DeletePostcodesLambdaApi, 'DELETE', auth);
        AllApiGateWays_1.DeleteWorkmanScheduleApiGateway(api, DeleteWorkmanScheduleLambdaApi, 'DELETE', auth);
        // UPDATE APIS
        AllApiGateWays_1.UpdateWorksmanDetailsApiGateway(api, UpdateWorksmanDetailLambda, 'PUT', auth);
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLDREQWFzQztBQUd0QyxzREFBcUQ7QUFDckQsd0VBQTBFO0FBQzFFLDBFQWErQztBQUcvQyxnREFBZ0Q7QUFFaEQsTUFBYSxlQUFnQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBRTVDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFeEIsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGtCQUFrQixFQUFFLGtDQUFzQixFQUFFLENBQUMsQ0FBQTtRQUNoRyxNQUFNLHlCQUF5QixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsMkJBQTJCLEVBQUUsMkNBQStCLEVBQUUsQ0FBQyxDQUFBO1FBQzNILE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxvQ0FBd0IsRUFBRSxDQUFDLENBQUE7UUFDdEcsTUFBTSxvQ0FBb0MsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHNDQUFzQyxFQUFFLHNEQUEwQyxFQUFFLENBQUMsQ0FBQTtRQUM1SixNQUFNLFdBQVcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSw2QkFBaUIsRUFBRSxDQUFDLENBQUE7UUFDakYsTUFBTSxZQUFZLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUUsOEJBQWtCLEVBQUUsQ0FBQyxDQUFBO1FBQ3BGLE1BQU0sdUJBQXVCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxvQ0FBd0IsRUFBRSxDQUFDLENBQUE7UUFDM0csTUFBTSxzQkFBc0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLG1CQUFtQixFQUFFLG1DQUF1QixFQUFFLENBQUMsQ0FBQTtRQUN4RyxNQUFNLDBCQUEwQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsc0JBQXNCLEVBQUUsdUNBQTJCLEVBQUUsQ0FBQyxDQUFBO1FBQ25ILE1BQU0scUJBQXFCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxlQUFlLEVBQUUsK0JBQW1CLEVBQUUsQ0FBQyxDQUFBO1FBQy9GLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxpQkFBaUIsRUFBRSxpQ0FBcUIsRUFBRSxDQUFDLENBQUE7UUFDdEcsTUFBTSx3QkFBd0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLGlCQUFpQixFQUFFLGlDQUFxQixFQUFFLENBQUMsQ0FBQTtRQUN0RyxNQUFNLHlCQUF5QixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCLEVBQUUsa0NBQXNCLEVBQUUsQ0FBQyxDQUFBO1FBQy9HLE1BQU0sOEJBQThCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSx1QkFBdUIsRUFBRSx1Q0FBMkIsRUFBRSxDQUFDLENBQUE7UUFDeEgsTUFBTSw0QkFBNEIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFLHNDQUEwQixFQUFFLENBQUMsQ0FBQTtRQUNuSCxNQUFNLHdCQUF3QixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUUsaUNBQXFCLEVBQUUsQ0FBQyxDQUFBO1FBQ3RHLE1BQU0sMkJBQTJCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSxvQ0FBd0IsRUFBRSxDQUFDLENBQUE7UUFFL0csTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRSw0Q0FBdUIsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBRXBHLE1BQU0sUUFBUSxHQUFHLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBQ3RELFlBQVksRUFBRSxpQkFBaUI7WUFDL0IsYUFBYSxFQUFFLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTztZQUN4QyxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLGFBQWEsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRTtZQUMzQyxVQUFVLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO1lBQzNCLGNBQWMsRUFBRTtnQkFDZCxTQUFTLEVBQUUsQ0FBQztnQkFDWixnQkFBZ0IsRUFBRSxJQUFJO2dCQUN0QixhQUFhLEVBQUUsSUFBSTtnQkFDbkIsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsY0FBYyxFQUFFLElBQUk7YUFDckI7WUFDRixrQkFBa0IsRUFBQztnQkFDbEIsU0FBUyxFQUFFO29CQUNULFFBQVEsRUFBQyxJQUFJO29CQUNiLE9BQU8sRUFBQyxJQUFJO2lCQUNiO2dCQUNELFVBQVUsRUFBRTtvQkFDVixRQUFRLEVBQUMsSUFBSTtvQkFDYixPQUFPLEVBQUMsSUFBSTtpQkFDYjtnQkFDRCxLQUFLLEVBQUU7b0JBQ0wsUUFBUSxFQUFDLElBQUk7b0JBQ2IsT0FBTyxFQUFDLElBQUk7aUJBQ2I7Z0JBQ0QsT0FBTyxFQUFFO29CQUNQLFFBQVEsRUFBQyxJQUFJO29CQUNiLE9BQU8sRUFBQyxJQUFJO2lCQUNiO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxRQUFRLEVBQUMsSUFBSTtvQkFDYixPQUFPLEVBQUMsSUFBSTtpQkFDYjtnQkFDRCxNQUFNLEVBQUU7b0JBQ04sUUFBUSxFQUFDLElBQUk7b0JBQ2IsT0FBTyxFQUFDLElBQUk7aUJBQ2I7Z0JBQ0QsTUFBTSxFQUFFO29CQUNOLFFBQVEsRUFBQyxJQUFJO29CQUNiLE9BQU8sRUFBQyxJQUFJO2lCQUNiO2dCQUNELFdBQVcsRUFBRTtvQkFDWCxRQUFRLEVBQUMsSUFBSTtvQkFDYixPQUFPLEVBQUMsSUFBSTtpQkFDYjthQUNEO1lBQ0EsZUFBZSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsVUFBVTtTQUNwRCxDQUFDLENBQUM7UUFHSCxNQUFNLHlCQUF5QixHQUFHO1lBQ2hDLFNBQVMsRUFBRSxJQUFJO1lBQ2YsVUFBVSxFQUFFLElBQUk7WUFDaEIsS0FBSyxFQUFFLElBQUk7WUFDWCxPQUFPLEVBQUUsSUFBSTtZQUNiLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLElBQUk7WUFDWixNQUFNLEVBQUUsSUFBSTtZQUNaLFdBQVcsRUFBRSxJQUFJO1NBQ2xCLENBQUM7UUFFRixNQUFNLG9CQUFvQixHQUFHLElBQUksT0FBTyxDQUFDLGdCQUFnQixFQUFFO2FBQ3hELHNCQUFzQixDQUFDLHlCQUF5QixDQUFDLENBQUE7UUFFcEQsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTthQUN6RCxzQkFBc0IsQ0FBQztZQUN0QixHQUFHLHlCQUF5QjtZQUM1QixhQUFhLEVBQUUsS0FBSztZQUNwQixtQkFBbUIsRUFBRSxLQUFLO1NBQzNCLENBQUMsQ0FBQTtRQUlGLE1BQU0sY0FBYyxHQUFHLElBQUksT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsaUJBQWlCLEVBQUU7WUFDekUsUUFBUTtZQUNSLFNBQVMsRUFBRTtnQkFDVCxpQkFBaUIsRUFBRSxJQUFJO2dCQUN2QixNQUFNLEVBQUUsSUFBSTtnQkFDWixPQUFPLEVBQUUsSUFBSTtnQkFDYixZQUFZLEVBQUMsSUFBSTthQUNsQjtZQUNELDBCQUEwQixFQUFFO2dCQUMxQixPQUFPLENBQUMsOEJBQThCLENBQUMsT0FBTzthQUMvQztZQUNELGNBQWMsRUFBRSxvQkFBb0I7WUFDcEMsZUFBZSxFQUFFLHFCQUFxQjtTQUN2QyxDQUFDLENBQUM7UUFJTCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3hFLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQUUsS0FBSyxFQUFFLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1FBQ3RFLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUU7WUFDMUMsS0FBSyxFQUFFLGNBQWMsQ0FBQyxnQkFBZ0I7U0FDdkMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFJdEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxVQUFVLENBQUMsMEJBQTBCLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRTtZQUN6RSxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQztTQUM3QixDQUFDLENBQUM7UUFJSCxZQUFZO1FBQ1oscURBQW9DLENBQUMsR0FBRyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNsRiw2Q0FBNEIsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ25FLG1DQUFrQixDQUFDLEdBQUcsRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQ25ELHdDQUF1QixDQUFDLEdBQUcsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDakUsMkNBQTBCLENBQUMsR0FBRyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUN4RSwrRUFBK0U7UUFFL0UsV0FBVztRQUNYLCtEQUE4QyxDQUFDLEdBQUcsRUFBRSxvQ0FBb0MsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDdEcsc0NBQXFCLENBQUMsR0FBRyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDcEQsOENBQTZCLENBQUMsR0FBRyxFQUFFLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQ2xFLDRDQUEyQixDQUFDLEdBQUcsRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDckUsMENBQXlCLENBQUMsR0FBRyxFQUFFLHdCQUF3QixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUNyRSw4Q0FBNkIsQ0FBQyxHQUFHLEVBQUUsNEJBQTRCLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFBO1FBQzdFLDBDQUF5QixDQUFDLEdBQUcsRUFBRSx3QkFBd0IsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFckUsY0FBYztRQUNkLDBDQUF5QixDQUFDLEdBQUcsRUFBRSx3QkFBd0IsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFDeEUsZ0RBQStCLENBQUMsR0FBRyxFQUFFLDhCQUE4QixFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtRQUVwRixjQUFjO1FBQ2QsZ0RBQStCLENBQUMsR0FBRyxFQUFFLDBCQUEwQixFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQTtJQUUvRSxDQUFDO0NBQ0Y7QUE3SkQsMENBNkpDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XHJcbmltcG9ydCB7XHJcbiAgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSwgV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbkxhbWJkYSwgV29ya3NNYW5FeHBlcmllbmNlTGFtYmRhLFxyXG4gIEdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1c0xhbWJkYSwgR2V0VGVzdFVzZXJMYW1iZGEsIFBvc3RUZXN0VXNlckxhbWJkYSwgZ2V0QWxsTW9iaWxlTnVtYmVyTGFtYmRhLFxyXG4gIEdldFdvcmttYW5EZXRhaWxzTGFtYmRhLFxyXG4gIFVwZGF0ZVdvcmtzbWFuRGV0YWlsc0xhbWJkYSxcclxuICBVc2VyUG9zdENvZGVzTGFtYmRhLFxyXG4gIEdldEFsbFBvc3Rjb2Rlc0xhbWJkYSxcclxuICBEZWxldGVQb3N0Y29kZXNMYW1iZGEsXHJcbiAgV29ya3NtbmFTY2hlZHVsZUxhbWJkYSxcclxuICBEZWxldGVXb3JrbWFuU2NoZWR1bGVMYW1iZGEsXHJcbiAgR2V0V29ya3NtYW5TY2hlZHVsZXNMYW1iZGEsXHJcbiAgR2V0V29ya3NtYW5qb2JzTGFtYmRhLFxyXG4gIFdvcmtzbWFuam9ic0NyZWF0ZUxhbWJkYVxyXG59IGZyb20gJy4vcmVzb3VyY2VzL2xhbWJkYS9hbGxMYW1iZGEnO1xyXG5pbXBvcnQgKiBhcyBzZm4gZnJvbSBcIkBhd3MtY2RrL2F3cy1zdGVwZnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9ucy10YXNrc1wiO1xyXG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gXCJAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheVwiXHJcbmltcG9ydCB7IEFwaWdhdGV3YXlEYXRhQ29uc3RhbnRzIH0gZnJvbSAnLi4vY29uc3RhbnRzL0FwaUdhdGV3YXlDb25zdGFudCc7XHJcbmltcG9ydCB7XHJcbiAgV29ya3NtYW5UZXJtc0FuZENvbmRpdGlvbnNBcGlHYXRld2F5LCBQb3N0VXNlckFwaUdhdGV3YXksIGdldEFsbE1vYmlsZU51bWJlcnNBcGlHYXRld2F5LFxyXG4gIHdvcmtzbWFuRXhwZXJpZW5jZUFwaUdhdGV3YXksIEdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1c0FwaUdhdGV3YXksIEdldFRlc3RVc2VyQXBpR2F0ZXdheSxcclxuICBHZXRXb3JrbWFuRGV0YWlsc0FwaUdhdGV3YXksXHJcbiAgVXBkYXRlV29ya3NtYW5EZXRhaWxzQXBpR2F0ZXdheSxcclxuICBVc2VyUG9zdENvZGVzQXBpR2F0ZXdheSxcclxuICBHZXRBbGxQb3N0Y29kZXNBcGlHYXRld2F5LFxyXG4gIERlbGV0ZVBvc3Rjb2Rlc0FwaUdhdGV3YXksXHJcbiAgV29ya3NtbmFTY2hlZHVsZUFwaUdhdGV3YXksXHJcbiAgRGVsZXRlV29ya21hblNjaGVkdWxlQXBpR2F0ZXdheSxcclxuICBHZXRXb3Jrc21hblNjaGVkdWxlQXBpR2F0ZXdheSxcclxuICBHZXRXb3Jrc21hbmpvYnNBcGlHYXRld2F5LFxyXG4gIFdvcmtzbWFuam9ic0NyZWF0ZUFwaUdhdGV3YXlcclxufSBmcm9tIFwiLi9yZXNvdXJjZXMvQXBpR2F0ZXdheS9BbGxBcGlHYXRlV2F5c1wiO1xyXG5pbXBvcnQgKiBhcyBhcGlHYXRld2F5QXV0aG9yaXplcnMgZnJvbSAnQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXl2Mi1hdXRob3JpemVycyc7XHJcbmltcG9ydCAqIGFzIGFwaUdhdGV3YXlJbnRlZ3JhdGlvbnMgZnJvbSAnQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXl2Mi1pbnRlZ3JhdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyBjb2duaXRvIGZyb20gJ0Bhd3MtY2RrL2F3cy1jb2duaXRvJztcclxuXHJcbmV4cG9ydCBjbGFzcyBDZGtFeGFtcGxlU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xyXG4gIHB1YmxpYyBNYWNoaW5lOiBzZm4uU3RhdGVNYWNoaW5lO1xyXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuXHJcbiAgICBjb25zdCB1c2VyUmVnaXN0cmF0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnVXNlclJlZ2lzdHJhdGlvbicsIFVzZXJSZWdpc3RyYXRpb25MYW1iZGEoKSlcclxuICAgIGNvbnN0IFdvcmtzTWFuVGVybXNBbmRDb25kaXRpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uJywgV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbkxhbWJkYSgpKVxyXG4gICAgY29uc3QgV29ya3NNYW5FeHBlcmllbmNlID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnV29ya3NNYW5FeHBlcmllbmNlJywgV29ya3NNYW5FeHBlcmllbmNlTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXMgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiR2V0V29ya3NtYW5BY2NvdW50UmVnaXN0YXJ0aW9uU3RhdHVzXCIsIEdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1c0xhbWJkYSgpKVxyXG4gICAgY29uc3QgR2V0VGVzdFVzZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiR2V0VGVzdFVzZXJcIiwgR2V0VGVzdFVzZXJMYW1iZGEoKSlcclxuICAgIGNvbnN0IFBvc3RUZXN0VXNlciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJQb3N0VGVzdFVzZXJcIiwgUG9zdFRlc3RVc2VyTGFtYmRhKCkpXHJcbiAgICBjb25zdCBnZXRBbGxNb2JpbGVOdW1iZXJzRGVtbyA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJnZXRBbGxNb2JpbGVOdW1iZXJcIiwgZ2V0QWxsTW9iaWxlTnVtYmVyTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXRXb3JrbWFuRGV0YWlsTGFtYmRhID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkdldFdvcmttYW5EZXRhaWxzXCIsIEdldFdvcmttYW5EZXRhaWxzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBVcGRhdGVXb3Jrc21hbkRldGFpbExhbWJkYSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJVcGRhdGVXb3Jrc21hbkRldGFpbFwiLCBVcGRhdGVXb3Jrc21hbkRldGFpbHNMYW1iZGEoKSlcclxuICAgIGNvbnN0IFVzZXJQb3N0Q29kZUxhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJVc2VyUG9zdENvZGVzXCIsIFVzZXJQb3N0Q29kZXNMYW1iZGEoKSlcclxuICAgIGNvbnN0IEdldEFsbFBvc3Rjb2Rlc0xhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHZXRBbGxQb3N0Y29kZXNcIiwgR2V0QWxsUG9zdGNvZGVzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBEZWxldGVQb3N0Y29kZXNMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiRGVsZXRlUG9zdGNvZGVzXCIsIERlbGV0ZVBvc3Rjb2Rlc0xhbWJkYSgpKVxyXG4gICAgY29uc3QgV29ya3NtbmFTY2hlZHVsZUxhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJXb3Jrc21uYVNjaGVkdWxldGNvZGVzXCIsIFdvcmtzbW5hU2NoZWR1bGVMYW1iZGEoKSlcclxuICAgIGNvbnN0IERlbGV0ZVdvcmttYW5TY2hlZHVsZUxhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJEZWxldGVXb3JrbWFuU2NoZWR1bGVcIiwgRGVsZXRlV29ya21hblNjaGVkdWxlTGFtYmRhKCkpXHJcbiAgICBjb25zdCBHZXRXb3Jrc21hblNjaGVkdWxlTGFtYmRhQXBpID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCBcIkdldFdvcmtzbWFuU2NoZWR1bGVcIiwgR2V0V29ya3NtYW5TY2hlZHVsZXNMYW1iZGEoKSlcclxuICAgIGNvbnN0IEdldFdvcmtzbWFuam9ic0xhbWJkYUFwaSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgXCJHZXRXb3Jrc21hbmpvYnNcIiwgR2V0V29ya3NtYW5qb2JzTGFtYmRhKCkpXHJcbiAgICBjb25zdCBXb3Jrc21hbmpvYnNDcmVhdGVMYW1iZGFBcGkgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsIFwiV29ya3NtYW5qb2JzQ3JlYXRlXCIsIFdvcmtzbWFuam9ic0NyZWF0ZUxhbWJkYSgpKVxyXG5cclxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ1dvcmtzTWFuQXBpRGVmYXVsdCcsIEFwaWdhdGV3YXlEYXRhQ29uc3RhbnRzKGFwaWdhdGV3YXkpKTtcclxuXHJcbiAgICBjb25zdCB1c2VyUG9vbCA9IG5ldyBjb2duaXRvLlVzZXJQb29sKHRoaXMsICd1c2VycG9vbCcsIHtcclxuICAgICAgdXNlclBvb2xOYW1lOiBgdmstY2xlYW4tcG9ydGFsYCxcclxuICAgICAgcmVtb3ZhbFBvbGljeTogY2RrLlJlbW92YWxQb2xpY3kuREVTVFJPWSxcclxuICAgICAgc2VsZlNpZ25VcEVuYWJsZWQ6IHRydWUsXHJcbiAgICAgIHNpZ25JbkFsaWFzZXM6IHsgZW1haWw6IHRydWUsIHBob25lOiB0cnVlIH0sXHJcbiAgICAgIGF1dG9WZXJpZnk6IHsgZW1haWw6IHRydWUgfSxcclxuICAgICAgcGFzc3dvcmRQb2xpY3k6IHtcclxuICAgICAgICBtaW5MZW5ndGg6IDYsXHJcbiAgICAgICAgcmVxdWlyZUxvd2VyY2FzZTogdHJ1ZSxcclxuICAgICAgICByZXF1aXJlRGlnaXRzOiB0cnVlLFxyXG4gICAgICAgIHJlcXVpcmVVcHBlcmNhc2U6IHRydWUsXHJcbiAgICAgICAgcmVxdWlyZVN5bWJvbHM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgc3RhbmRhcmRBdHRyaWJ1dGVzOntcclxuICAgICAgZ2l2ZW5OYW1lOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBtdXRhYmxlOnRydWVcclxuICAgICAgfSxcclxuICAgICAgZmFtaWx5TmFtZToge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGVtYWlsOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBtdXRhYmxlOnRydWVcclxuICAgICAgfSxcclxuICAgICAgYWRkcmVzczoge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGJpcnRoZGF0ZToge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdlbmRlcjoge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGxvY2FsZToge1xyXG4gICAgICAgIHJlcXVpcmVkOnRydWUsXHJcbiAgICAgICAgbXV0YWJsZTp0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIHBob25lTnVtYmVyOiB7XHJcbiAgICAgICAgcmVxdWlyZWQ6dHJ1ZSxcclxuICAgICAgICBtdXRhYmxlOnRydWVcclxuICAgICAgfSxcclxuICAgICB9LFxyXG4gICAgICBhY2NvdW50UmVjb3Zlcnk6IGNvZ25pdG8uQWNjb3VudFJlY292ZXJ5LkVNQUlMX09OTFksXHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgY29uc3Qgc3RhbmRhcmRDb2duaXRvQXR0cmlidXRlcyA9IHtcclxuICAgICAgZ2l2ZW5OYW1lOiB0cnVlLFxyXG4gICAgICBmYW1pbHlOYW1lOiB0cnVlLFxyXG4gICAgICBlbWFpbDogdHJ1ZSxcclxuICAgICAgYWRkcmVzczogdHJ1ZSxcclxuICAgICAgYmlydGhkYXRlOiB0cnVlLFxyXG4gICAgICBnZW5kZXI6IHRydWUsXHJcbiAgICAgIGxvY2FsZTogdHJ1ZSxcclxuICAgICAgcGhvbmVOdW1iZXI6IHRydWUsXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjb25zdCBjbGllbnRSZWFkQXR0cmlidXRlcyA9IG5ldyBjb2duaXRvLkNsaWVudEF0dHJpYnV0ZXMoKVxyXG4gICAgICAud2l0aFN0YW5kYXJkQXR0cmlidXRlcyhzdGFuZGFyZENvZ25pdG9BdHRyaWJ1dGVzKVxyXG4gICAgXHJcbiAgICBjb25zdCBjbGllbnRXcml0ZUF0dHJpYnV0ZXMgPSBuZXcgY29nbml0by5DbGllbnRBdHRyaWJ1dGVzKClcclxuICAgICAgLndpdGhTdGFuZGFyZEF0dHJpYnV0ZXMoe1xyXG4gICAgICAgIC4uLnN0YW5kYXJkQ29nbml0b0F0dHJpYnV0ZXMsXHJcbiAgICAgICAgZW1haWxWZXJpZmllZDogZmFsc2UsXHJcbiAgICAgICAgcGhvbmVOdW1iZXJWZXJpZmllZDogZmFsc2UsXHJcbiAgICAgIH0pXHJcblxyXG5cclxuXHJcbiAgICAgIGNvbnN0IHVzZXJQb29sQ2xpZW50ID0gbmV3IGNvZ25pdG8uVXNlclBvb2xDbGllbnQodGhpcywgJ3VzZXJwb29sLWNsaWVudCcsIHtcclxuICAgICAgICB1c2VyUG9vbCxcclxuICAgICAgICBhdXRoRmxvd3M6IHsgIFxyXG4gICAgICAgICAgYWRtaW5Vc2VyUGFzc3dvcmQ6IHRydWUsXHJcbiAgICAgICAgICBjdXN0b206IHRydWUsXHJcbiAgICAgICAgICB1c2VyU3JwOiB0cnVlLFxyXG4gICAgICAgICAgdXNlclBhc3N3b3JkOnRydWVcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN1cHBvcnRlZElkZW50aXR5UHJvdmlkZXJzOiBbXHJcbiAgICAgICAgICBjb2duaXRvLlVzZXJQb29sQ2xpZW50SWRlbnRpdHlQcm92aWRlci5DT0dOSVRPLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcmVhZEF0dHJpYnV0ZXM6IGNsaWVudFJlYWRBdHRyaWJ1dGVzLFxyXG4gICAgICAgIHdyaXRlQXR0cmlidXRlczogY2xpZW50V3JpdGVBdHRyaWJ1dGVzLFxyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdyZWdpb24nLCB7IHZhbHVlOiBjZGsuU3RhY2sub2YodGhpcykucmVnaW9uIH0pO1xyXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ3VzZXJQb29sSWQnLCB7IHZhbHVlOiB1c2VyUG9vbC51c2VyUG9vbElkIH0pO1xyXG4gICAgbmV3IGNkay5DZm5PdXRwdXQodGhpcywgJ3VzZXJQb29sQ2xpZW50SWQnLCB7XHJcbiAgICAgIHZhbHVlOiB1c2VyUG9vbENsaWVudC51c2VyUG9vbENsaWVudElkLFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdhcGlVcmwnLCB7IHZhbHVlOiBhcGkudXJsIH0pO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgYXV0aCA9IG5ldyBhcGlnYXRld2F5LkNvZ25pdG9Vc2VyUG9vbHNBdXRob3JpemVyKHRoaXMsICdBdXRob3JpemVyJywge1xyXG4gICAgICBjb2duaXRvVXNlclBvb2xzOiBbdXNlclBvb2xdXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICAgIC8vIFBPU1QgQVBJU1xyXG4gICAgV29ya3NtYW5UZXJtc0FuZENvbmRpdGlvbnNBcGlHYXRld2F5KGFwaSwgV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbiwgJ1BPU1QnLCBhdXRoKVxyXG4gICAgd29ya3NtYW5FeHBlcmllbmNlQXBpR2F0ZXdheShhcGksIFdvcmtzTWFuRXhwZXJpZW5jZSwgJ1BPU1QnLCBhdXRoKVxyXG4gICAgUG9zdFVzZXJBcGlHYXRld2F5KGFwaSwgUG9zdFRlc3RVc2VyLCAnUE9TVCcsIGF1dGgpXHJcbiAgICBVc2VyUG9zdENvZGVzQXBpR2F0ZXdheShhcGksIFVzZXJQb3N0Q29kZUxhbWJkYUFwaSwgJ1BPU1QnLCBhdXRoKVxyXG4gICAgV29ya3NtbmFTY2hlZHVsZUFwaUdhdGV3YXkoYXBpLCBXb3Jrc21uYVNjaGVkdWxlTGFtYmRhQXBpLCAnUE9TVCcsIGF1dGgpXHJcbiAgICAvLyBXb3Jrc21hbmpvYnNDcmVhdGVBcGlHYXRld2F5KGFwaSwgV29ya3NtYW5qb2JzQ3JlYXRlTGFtYmRhQXBpLCAnUE9TVCcsIGF1dGgpXHJcblxyXG4gICAgLy8gR0VUIEFQSVNcclxuICAgIEdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1c0FwaUdhdGV3YXkoYXBpLCBHZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXMsICdHRVQnLCBhdXRoKVxyXG4gICAgR2V0VGVzdFVzZXJBcGlHYXRld2F5KGFwaSwgR2V0VGVzdFVzZXIsICdHRVQnLCBhdXRoKVxyXG4gICAgZ2V0QWxsTW9iaWxlTnVtYmVyc0FwaUdhdGV3YXkoYXBpLCBnZXRBbGxNb2JpbGVOdW1iZXJzRGVtbywgJ0dFVCcpXHJcbiAgICBHZXRXb3JrbWFuRGV0YWlsc0FwaUdhdGV3YXkoYXBpLCBHZXRXb3JrbWFuRGV0YWlsTGFtYmRhLCAnR0VUJywgYXV0aClcclxuICAgIEdldEFsbFBvc3Rjb2Rlc0FwaUdhdGV3YXkoYXBpLCBHZXRBbGxQb3N0Y29kZXNMYW1iZGFBcGksICdHRVQnLCBhdXRoKVxyXG4gICAgR2V0V29ya3NtYW5TY2hlZHVsZUFwaUdhdGV3YXkoYXBpLCBHZXRXb3Jrc21hblNjaGVkdWxlTGFtYmRhQXBpLCAnR0VUJywgYXV0aClcclxuICAgIEdldFdvcmtzbWFuam9ic0FwaUdhdGV3YXkoYXBpLCBHZXRXb3Jrc21hbmpvYnNMYW1iZGFBcGksICdHRVQnLCBhdXRoKVxyXG5cclxuICAgIC8vIERFTEVURSBBUElTXHJcbiAgICBEZWxldGVQb3N0Y29kZXNBcGlHYXRld2F5KGFwaSwgRGVsZXRlUG9zdGNvZGVzTGFtYmRhQXBpLCAnREVMRVRFJywgYXV0aClcclxuICAgIERlbGV0ZVdvcmttYW5TY2hlZHVsZUFwaUdhdGV3YXkoYXBpLCBEZWxldGVXb3JrbWFuU2NoZWR1bGVMYW1iZGFBcGksICdERUxFVEUnLCBhdXRoKVxyXG5cclxuICAgIC8vIFVQREFURSBBUElTXHJcbiAgICBVcGRhdGVXb3Jrc21hbkRldGFpbHNBcGlHYXRld2F5KGFwaSwgVXBkYXRlV29ya3NtYW5EZXRhaWxMYW1iZGEsICdQVVQnLCBhdXRoKVxyXG5cclxuICB9XHJcbn0iXX0=