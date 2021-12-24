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
        const api = new apigateway.RestApi(this, 'api', {
            description: 'example api gateway',
            deployOptions: {
                stageName: 'dev',
            },
            // 👇 enable CORS
            defaultCorsPreflightOptions: {
                allowHeaders: [
                    'Content-Type',
                    'X-Amz-Date',
                    'Authorization',
                    'X-Api-Key',
                ],
                allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
                allowCredentials: true,
                allowOrigins: ['http://localhost:3000'],
            },
        });
        new cdk.CfnOutput(this, 'apiUrl', { value: api.url });
        // 👇 add a /todos resource
        const customer = api.root.addResource('customer');
        // 👇 integrate GET /todos with getTodosLambda
        customer.addMethod('GET', new apigateway.LambdaIntegration(UserEmailConfirm, { proxy: true }));
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQXdGO0FBQ3hGLGtEQUFrRDtBQUNsRCwwREFBMEQ7QUFDMUQsc0RBQXFEO0FBRXJELE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUU1QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBQyxrQ0FBc0IsRUFBRSxDQUFDLENBQUE7UUFDOUYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLDRCQUFnQixFQUFFLENBQUMsQ0FBQTtRQUV4RixNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFHO1lBQ25FLGNBQWMsRUFBQyxnQkFBZ0I7WUFDL0IsVUFBVSxFQUFDLFdBQVc7U0FDdkIsQ0FBQzthQUNDLElBQUksQ0FDSCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ2pELGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsVUFBVSxFQUFFLFdBQVc7U0FDeEIsQ0FBQyxDQUNILENBQUM7UUFFSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3hELFVBQVU7U0FDWCxDQUFDLENBQUM7UUFHSCxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRTtZQUM5QyxXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLGFBQWEsRUFBRTtnQkFDYixTQUFTLEVBQUUsS0FBSzthQUNqQjtZQUNELGlCQUFpQjtZQUNqQiwyQkFBMkIsRUFBRTtnQkFDM0IsWUFBWSxFQUFFO29CQUNaLGNBQWM7b0JBQ2QsWUFBWTtvQkFDWixlQUFlO29CQUNmLFdBQVc7aUJBQ1o7Z0JBQ0QsWUFBWSxFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUM7Z0JBQ2xFLGdCQUFnQixFQUFFLElBQUk7Z0JBQ3RCLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO2FBQ3hDO1NBQ0YsQ0FBQyxDQUFDO1FBRUgsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFFcEQsMkJBQTJCO1FBQzNCLE1BQU0sUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRWxELDhDQUE4QztRQUM5QyxRQUFRLENBQUMsU0FBUyxDQUNoQixLQUFLLEVBQ0wsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQUUsRUFBQyxLQUFLLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FDbEUsQ0FBQztJQUVKLENBQUM7Q0FDRjtBQXZERCwwQ0F1REMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG4vLyBpbXBvcnQgKiBhcyBlYzIgZnJvbSAnQGF3cy1jZGsvYXdzLWVjMic7XG4vLyBpbXBvcnQgKiBhcyByZHMgZnJvbSAnQGF3cy1jZGsvYXdzLXJkcyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBVc2VyUmVnaXN0cmF0aW9uTGFtYmRhLCB1c2VyRW1haWxDb25maXJtIH0gZnJvbSAnLi9yZXNvdXJjZXMvbGFtYmRhL2FsbExhbWJkYSc7XG5pbXBvcnQgKiBhcyBzZm4gZnJvbSBcIkBhd3MtY2RrL2F3cy1zdGVwZnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyB0YXNrcyBmcm9tIFwiQGF3cy1jZGsvYXdzLXN0ZXBmdW5jdGlvbnMtdGFza3NcIjtcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSBcIkBhd3MtY2RrL2F3cy1hcGlnYXRld2F5XCJcblxuZXhwb3J0IGNsYXNzIENka0V4YW1wbGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIHB1YmxpYyBNYWNoaW5lOiBzZm4uU3RhdGVNYWNoaW5lO1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgIFxuICAgIGNvbnN0IHVzZXJSZWdpc3RyYXRpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsJ1VzZXJSZWdpc3RyYXRpb24nLFVzZXJSZWdpc3RyYXRpb25MYW1iZGEoKSlcbiAgICBjb25zdCBVc2VyRW1haWxDb25maXJtID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCdVc2VyRW1haWxDb25maXJtJyx1c2VyRW1haWxDb25maXJtKCkpXG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IHRhc2tzLkxhbWJkYUludm9rZSh0aGlzLCdVc2VyIFJlZ2lzdHJhdGlvbicgLCB7XG4gICAgICBsYW1iZGFGdW5jdGlvbjp1c2VyUmVnaXN0cmF0aW9uLFxuICAgICAgb3V0cHV0UGF0aDpcIiQuUGF5bG9hZFwiXG4gICAgfSlcbiAgICAgIC5uZXh0KFxuICAgICAgICBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsIFwiVXNlciBFbWFpbCBDb25maXJtXCIsIHtcbiAgICAgICAgICBsYW1iZGFGdW5jdGlvbjogVXNlckVtYWlsQ29uZmlybSxcbiAgICAgICAgICBvdXRwdXRQYXRoOiBcIiQuUGF5bG9hZFwiLFxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIHRoaXMuTWFjaGluZSA9IG5ldyBzZm4uU3RhdGVNYWNoaW5lKHRoaXMsIFwiU3RhdGVNYWNoaW5lXCIsIHtcbiAgICAgIGRlZmluaXRpb24sXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ2FwaScsIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnZXhhbXBsZSBhcGkgZ2F0ZXdheScsXG4gICAgICBkZXBsb3lPcHRpb25zOiB7XG4gICAgICAgIHN0YWdlTmFtZTogJ2RldicsXG4gICAgICB9LFxuICAgICAgLy8g8J+RhyBlbmFibGUgQ09SU1xuICAgICAgZGVmYXVsdENvcnNQcmVmbGlnaHRPcHRpb25zOiB7XG4gICAgICAgIGFsbG93SGVhZGVyczogW1xuICAgICAgICAgICdDb250ZW50LVR5cGUnLFxuICAgICAgICAgICdYLUFtei1EYXRlJyxcbiAgICAgICAgICAnQXV0aG9yaXphdGlvbicsXG4gICAgICAgICAgJ1gtQXBpLUtleScsXG4gICAgICAgIF0sXG4gICAgICAgIGFsbG93TWV0aG9kczogWydPUFRJT05TJywgJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdQQVRDSCcsICdERUxFVEUnXSxcbiAgICAgICAgYWxsb3dDcmVkZW50aWFsczogdHJ1ZSxcbiAgICAgICAgYWxsb3dPcmlnaW5zOiBbJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMCddLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdhcGlVcmwnLCB7dmFsdWU6IGFwaS51cmx9KTtcblxuICAgIC8vIPCfkYcgYWRkIGEgL3RvZG9zIHJlc291cmNlXG4gICAgY29uc3QgY3VzdG9tZXIgPSBhcGkucm9vdC5hZGRSZXNvdXJjZSgnY3VzdG9tZXInKTtcblxuICAgIC8vIPCfkYcgaW50ZWdyYXRlIEdFVCAvdG9kb3Mgd2l0aCBnZXRUb2Rvc0xhbWJkYVxuICAgIGN1c3RvbWVyLmFkZE1ldGhvZChcbiAgICAgICdHRVQnLFxuICAgICAgbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oVXNlckVtYWlsQ29uZmlybSwge3Byb3h5OiB0cnVlfSksXG4gICAgKTtcblxuICB9XG59Il19