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
        getcustomer.addMethod('GET', new apigateway.LambdaIntegration(UserEmailConfirm, {
            integrationResponses: [
                {
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Origin': "'*'",
                    },
                    responseTemplates: {
                        'application/json': JSON.stringify({
                            message: '$util.parseJson($input.body)',
                            state: 'ok',
                        }),
                    },
                    statusCode: '200',
                },
            ],
            proxy: false,
            requestTemplates: {
                'application/json': JSON.stringify({
                    input: 'this is the input',
                }),
            },
        }), { methodResponses: [
                {
                    statusCode: '200',
                    responseParameters: {
                        'method.response.header.Access-Control-Allow-Origin': true,
                    },
                },
            ], });
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQXdGO0FBQ3hGLGtEQUFrRDtBQUNsRCwwREFBMEQ7QUFDMUQsc0RBQXFEO0FBQ3JELHdFQUEwRTtBQUUxRSxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFNUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsa0NBQXNCLEVBQUUsQ0FBQyxDQUFBO1FBQzlGLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBQyw0QkFBZ0IsRUFBRSxDQUFDLENBQUE7UUFFeEYsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBRztZQUNuRSxjQUFjLEVBQUMsZ0JBQWdCO1lBQy9CLFVBQVUsRUFBQyxXQUFXO1NBQ3ZCLENBQUM7YUFDQyxJQUFJLENBQ0gsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxvQkFBb0IsRUFBRTtZQUNqRCxjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLFVBQVUsRUFBRSxXQUFXO1NBQ3hCLENBQUMsQ0FDSCxDQUFDO1FBRUosSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGNBQWMsRUFBRTtZQUN4RCxVQUFVO1NBQ1gsQ0FBQyxDQUFDO1FBR0gsTUFBTSxHQUFHLEdBQUcsSUFBSSxVQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxxQkFBcUIsRUFBRSw0Q0FBdUIsRUFBRSxDQUFDLENBQUM7UUFFM0YsSUFBSSxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7UUFFcEQsMkJBQTJCO1FBQzNCLE1BQU0sV0FBVyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRXhELDhDQUE4QztRQUM5QyxXQUFXLENBQUMsU0FBUyxDQUNuQixLQUFLLEVBQ0wsSUFBSSxVQUFVLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLEVBQy9DO1lBQ0Usb0JBQW9CLEVBQUU7Z0JBQ3BCO29CQUNFLGtCQUFrQixFQUFFO3dCQUNsQixvREFBb0QsRUFBRSxLQUFLO3FCQUM1RDtvQkFDRCxpQkFBaUIsRUFBRTt3QkFDakIsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQzs0QkFDakMsT0FBTyxFQUFFLDhCQUE4Qjs0QkFDdkMsS0FBSyxFQUFFLElBQUk7eUJBQ1osQ0FBQztxQkFDSDtvQkFDRCxVQUFVLEVBQUUsS0FBSztpQkFDbEI7YUFDRjtZQUNELEtBQUssRUFBRSxLQUFLO1lBQ1osZ0JBQWdCLEVBQUU7Z0JBQ2hCLGtCQUFrQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUM7b0JBQ2pDLEtBQUssRUFBRSxtQkFBbUI7aUJBQzNCLENBQUM7YUFDSDtTQUNGLENBQ0EsRUFDSCxFQUFDLGVBQWUsRUFBRTtnQkFDaEI7b0JBQ0UsVUFBVSxFQUFFLEtBQUs7b0JBQ2pCLGtCQUFrQixFQUFFO3dCQUNsQixvREFBb0QsRUFBRSxJQUFJO3FCQUMzRDtpQkFDRjthQUNGLEdBQUUsQ0FDSixDQUFDO0lBRUosQ0FBQztDQUNGO0FBckVELDBDQXFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbi8vIGltcG9ydCAqIGFzIGVjMiBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcbi8vIGltcG9ydCAqIGFzIHJkcyBmcm9tICdAYXdzLWNkay9hd3MtcmRzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCB7IFVzZXJSZWdpc3RyYXRpb25MYW1iZGEsIHVzZXJFbWFpbENvbmZpcm0gfSBmcm9tICcuL3Jlc291cmNlcy9sYW1iZGEvYWxsTGFtYmRhJztcbmltcG9ydCAqIGFzIHNmbiBmcm9tIFwiQGF3cy1jZGsvYXdzLXN0ZXBmdW5jdGlvbnNcIjtcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9ucy10YXNrc1wiO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIlxuaW1wb3J0IHsgQXBpZ2F0ZXdheURhdGFDb25zdGFudHMgfSBmcm9tICcuLi9jb25zdGFudHMvQXBpR2F0ZXdheUNvbnN0YW50JztcblxuZXhwb3J0IGNsYXNzIENka0V4YW1wbGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIHB1YmxpYyBNYWNoaW5lOiBzZm4uU3RhdGVNYWNoaW5lO1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgIFxuICAgIGNvbnN0IHVzZXJSZWdpc3RyYXRpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsJ1VzZXJSZWdpc3RyYXRpb24nLFVzZXJSZWdpc3RyYXRpb25MYW1iZGEoKSlcbiAgICBjb25zdCBVc2VyRW1haWxDb25maXJtID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCdVc2VyRW1haWxDb25maXJtJyx1c2VyRW1haWxDb25maXJtKCkpXG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IHRhc2tzLkxhbWJkYUludm9rZSh0aGlzLCdVc2VyIFJlZ2lzdHJhdGlvbicgLCB7XG4gICAgICBsYW1iZGFGdW5jdGlvbjp1c2VyUmVnaXN0cmF0aW9uLFxuICAgICAgb3V0cHV0UGF0aDpcIiQuUGF5bG9hZFwiXG4gICAgfSlcbiAgICAgIC5uZXh0KFxuICAgICAgICBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsIFwiVXNlciBFbWFpbCBDb25maXJtXCIsIHtcbiAgICAgICAgICBsYW1iZGFGdW5jdGlvbjogVXNlckVtYWlsQ29uZmlybSxcbiAgICAgICAgICBvdXRwdXRQYXRoOiBcIiQuUGF5bG9hZFwiLFxuICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIHRoaXMuTWFjaGluZSA9IG5ldyBzZm4uU3RhdGVNYWNoaW5lKHRoaXMsIFwiU3RhdGVNYWNoaW5lXCIsIHtcbiAgICAgIGRlZmluaXRpb24sXG4gICAgfSk7XG5cblxuICAgIGNvbnN0IGFwaSA9IG5ldyBhcGlnYXRld2F5LlJlc3RBcGkodGhpcywgJ1VzZXJSZWdpc3RyYXRpb25BcGknLCBBcGlnYXRld2F5RGF0YUNvbnN0YW50cygpKTtcblxuICAgIG5ldyBjZGsuQ2ZuT3V0cHV0KHRoaXMsICdhcGlVcmwnLCB7dmFsdWU6IGFwaS51cmx9KTtcblxuICAgIC8vIPCfkYcgYWRkIGEgL3RvZG9zIHJlc291cmNlXG4gICAgY29uc3QgZ2V0Y3VzdG9tZXIgPSBhcGkucm9vdC5hZGRSZXNvdXJjZSgnZ2V0Y3VzdG9tZXInKTtcblxuICAgIC8vIPCfkYcgaW50ZWdyYXRlIEdFVCAvdG9kb3Mgd2l0aCBnZXRUb2Rvc0xhbWJkYVxuICAgIGdldGN1c3RvbWVyLmFkZE1ldGhvZChcbiAgICAgICdHRVQnLFxuICAgICAgbmV3IGFwaWdhdGV3YXkuTGFtYmRhSW50ZWdyYXRpb24oVXNlckVtYWlsQ29uZmlybSwgXG4gICAgICAgIHtcbiAgICAgICAgICBpbnRlZ3JhdGlvblJlc3BvbnNlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICAgICAnbWV0aG9kLnJlc3BvbnNlLmhlYWRlci5BY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nOiBcIicqJ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICByZXNwb25zZVRlbXBsYXRlczoge1xuICAgICAgICAgICAgICAgICdhcHBsaWNhdGlvbi9qc29uJzogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJyR1dGlsLnBhcnNlSnNvbigkaW5wdXQuYm9keSknLFxuICAgICAgICAgICAgICAgICAgc3RhdGU6ICdvaycsXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHN0YXR1c0NvZGU6ICcyMDAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHByb3h5OiBmYWxzZSxcbiAgICAgICAgICByZXF1ZXN0VGVtcGxhdGVzOiB7XG4gICAgICAgICAgICAnYXBwbGljYXRpb24vanNvbic6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgaW5wdXQ6ICd0aGlzIGlzIHRoZSBpbnB1dCcsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICAgICksXG4gICAgICB7bWV0aG9kUmVzcG9uc2VzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0dXNDb2RlOiAnMjAwJyxcbiAgICAgICAgICByZXNwb25zZVBhcmFtZXRlcnM6IHtcbiAgICAgICAgICAgICdtZXRob2QucmVzcG9uc2UuaGVhZGVyLkFjY2Vzcy1Db250cm9sLUFsbG93LU9yaWdpbic6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sfVxuICAgICk7XG5cbiAgfVxufSJdfQ==