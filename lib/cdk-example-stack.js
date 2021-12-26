"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkExampleStack = void 0;
const cdk = require("@aws-cdk/core");
// import * as ec2 from '@aws-cdk/aws-ec2';
// import * as rds from '@aws-cdk/aws-rds';
const lambda = require("@aws-cdk/aws-lambda");
const allLambda_1 = require("./resources/lambda/allLambda");
const sfn = require("@aws-cdk/aws-stepfunctions");
const tasks = require("@aws-cdk/aws-stepfunctions-tasks");
const apigateway = require("@aws-cdk/aws-apigateway");
const ApiGatewayConstant_1 = require("../constants/ApiGatewayConstant");
class CdkExampleStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const userRegistration = new lambda.Function(this, 'UserRegistration', allLambda_1.UserRegistrationLambda());
        const UserEmailConfirm = new lambda.Function(this, 'UserEmailConfirm', allLambda_1.userEmailConfirm());
        const definition = new tasks.LambdaInvoke(this, 'User Registration', {
            lambdaFunction: userRegistration,
            outputPath: "$.Payload"
        })
            .next(new tasks.LambdaInvoke(this, "User Email Confirm", {
            lambdaFunction: UserEmailConfirm,
            outputPath: "$.Payload",
        }));
        this.Machine = new sfn.StateMachine(this, "StateMachine", {
            definition,
        });
        const api = new apigateway.RestApi(this, 'UserRegistrationApi', ApiGatewayConstant_1.ApigatewayDataConstants());
        new cdk.CfnOutput(this, 'apiUrl', { value: api.url });
        // 👇 add a /todos resource
        const getcustomer = api.root.addResource('getcustomer');
        // 👇 integrate GET /todos with getTodosLambda
        getcustomer.addMethod('GET', new apigateway.LambdaIntegration(UserEmailConfirm, ApiGatewayConstant_1.ApiGateWayResponseMethod()), {
            methodResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Origin': true,
                    },
                },
            ],
        });
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQXdGO0FBQ3hGLGtEQUFrRDtBQUNsRCwwREFBMEQ7QUFDMUQsc0RBQXFEO0FBQ3JELHdFQUFvRztBQUVwRyxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFNUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsa0JBQWtCLEVBQUUsa0NBQXNCLEVBQUUsQ0FBQyxDQUFBO1FBQ2hHLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSw0QkFBZ0IsRUFBRSxDQUFDLENBQUE7UUFFMUYsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUNuRSxjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLFVBQVUsRUFBRSxXQUFXO1NBQ3hCLENBQUM7YUFDQyxJQUFJLENBQ0gsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRTtZQUNqRCxjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLFVBQVUsRUFBRSxXQUFXO1NBQ3hCLENBQUMsQ0FDSCxDQUFDO1FBRUosSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4RCxVQUFVO1NBQ1gsQ0FBQyxDQUFDO1FBR0gsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSw0Q0FBdUIsRUFBRSxDQUFDLENBQUM7UUFFM0YsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7UUFFdEQsMkJBQTJCO1FBQzNCLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXhELDhDQUE4QztRQUM5QyxXQUFXLENBQUMsU0FBUyxDQUNuQixLQUFLLEVBQ0wsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQy9DLDZDQUF3QixFQUFFLENBQzNCLEVBQ0Q7WUFDRSxlQUFlLEVBQUU7Z0JBQ2Y7b0JBQ0UsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGtCQUFrQixFQUFFO3dCQUNsQixvREFBb0QsRUFBRSxJQUFJO3FCQUMzRDtpQkFDRjthQUNGO1NBQ0YsQ0FDRixDQUFDO0lBRUosQ0FBQztDQUNGO0FBbERELDBDQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbi8vIGltcG9ydCAqIGFzIGVjMiBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcbi8vIGltcG9ydCAqIGFzIHJkcyBmcm9tICdAYXdzLWNkay9hd3MtcmRzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCB7IFVzZXJSZWdpc3RyYXRpb25MYW1iZGEsIHVzZXJFbWFpbENvbmZpcm0gfSBmcm9tICcuL3Jlc291cmNlcy9sYW1iZGEvYWxsTGFtYmRhJztcbmltcG9ydCAqIGFzIHNmbiBmcm9tIFwiQGF3cy1jZGsvYXdzLXN0ZXBmdW5jdGlvbnNcIjtcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9ucy10YXNrc1wiO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIlxuaW1wb3J0IHsgQXBpZ2F0ZXdheURhdGFDb25zdGFudHMsIEFwaUdhdGVXYXlSZXNwb25zZU1ldGhvZCB9IGZyb20gJy4uL2NvbnN0YW50cy9BcGlHYXRld2F5Q29uc3RhbnQnO1xuXG5leHBvcnQgY2xhc3MgQ2RrRXhhbXBsZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgcHVibGljIE1hY2hpbmU6IHNmbi5TdGF0ZU1hY2hpbmU7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG5cbiAgICBjb25zdCB1c2VyUmVnaXN0cmF0aW9uID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnVXNlclJlZ2lzdHJhdGlvbicsIFVzZXJSZWdpc3RyYXRpb25MYW1iZGEoKSlcbiAgICBjb25zdCBVc2VyRW1haWxDb25maXJtID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAnVXNlckVtYWlsQ29uZmlybScsIHVzZXJFbWFpbENvbmZpcm0oKSlcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsICdVc2VyIFJlZ2lzdHJhdGlvbicsIHtcbiAgICAgIGxhbWJkYUZ1bmN0aW9uOiB1c2VyUmVnaXN0cmF0aW9uLFxuICAgICAgb3V0cHV0UGF0aDogXCIkLlBheWxvYWRcIlxuICAgIH0pXG4gICAgICAubmV4dChcbiAgICAgICAgbmV3IHRhc2tzLkxhbWJkYUludm9rZSh0aGlzLCBcIlVzZXIgRW1haWwgQ29uZmlybVwiLCB7XG4gICAgICAgICAgbGFtYmRhRnVuY3Rpb246IFVzZXJFbWFpbENvbmZpcm0sXG4gICAgICAgICAgb3V0cHV0UGF0aDogXCIkLlBheWxvYWRcIixcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICB0aGlzLk1hY2hpbmUgPSBuZXcgc2ZuLlN0YXRlTWFjaGluZSh0aGlzLCBcIlN0YXRlTWFjaGluZVwiLCB7XG4gICAgICBkZWZpbml0aW9uLFxuICAgIH0pO1xuXG5cbiAgICBjb25zdCBhcGkgPSBuZXcgYXBpZ2F0ZXdheS5SZXN0QXBpKHRoaXMsICdVc2VyUmVnaXN0cmF0aW9uQXBpJywgQXBpZ2F0ZXdheURhdGFDb25zdGFudHMoKSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnYXBpVXJsJywgeyB2YWx1ZTogYXBpLnVybCB9KTtcblxuICAgIC8vIPCfkYcgYWRkIGEgL3RvZG9zIHJlc291cmNlXG4gICAgY29uc3QgZ2V0Y3VzdG9tZXIgPSBhcGkucm9vdC5hZGRSZXNvdXJjZSgnZ2V0Y3VzdG9tZXInKTtcblxuICAgIC8vIPCfkYcgaW50ZWdyYXRlIEdFVCAvdG9kb3Mgd2l0aCBnZXRUb2Rvc0xhbWJkYVxuICAgIGdldGN1c3RvbWVyLmFkZE1ldGhvZChcbiAgICAgICdHRVQnLFxuICAgICAgbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oVXNlckVtYWlsQ29uZmlybSxcbiAgICAgICAgQXBpR2F0ZVdheVJlc3BvbnNlTWV0aG9kKClcbiAgICAgICksXG4gICAgICB7XG4gICAgICAgIG1ldGhvZFJlc3BvbnNlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXR1c0NvZGU6ICcyMDAnLFxuICAgICAgICAgICAgcmVzcG9uc2VQYXJhbWV0ZXJzOiB7XG4gICAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9XG4gICAgKTtcblxuICB9XG59Il19