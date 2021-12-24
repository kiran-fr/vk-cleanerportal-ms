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
        const api = new apigateway.RestApi(this, 'UserRegistrationApi', {
            description: 'User Registration api gateway',
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
        const customer = api.root.addResource('getcustomer');
        // 👇 integrate GET /todos with getTodosLambda
        customer.addMethod('GET', new apigateway.LambdaIntegration(UserEmailConfirm, { proxy: true }));
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQXdGO0FBQ3hGLGtEQUFrRDtBQUNsRCwwREFBMEQ7QUFDMUQsc0RBQXFEO0FBRXJELE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUU1QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBQyxrQ0FBc0IsRUFBRSxDQUFDLENBQUE7UUFDOUYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLDRCQUFnQixFQUFFLENBQUMsQ0FBQTtRQUV4RixNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFHO1lBQ25FLGNBQWMsRUFBQyxnQkFBZ0I7WUFDL0IsVUFBVSxFQUFDLFdBQVc7U0FDdkIsQ0FBQzthQUNDLElBQUksQ0FDSCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ2pELGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsVUFBVSxFQUFFLFdBQVc7U0FDeEIsQ0FBQyxDQUNILENBQUM7UUFFSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3hELFVBQVU7U0FDWCxDQUFDLENBQUM7UUFHSCxNQUFNLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLHFCQUFxQixFQUFFO1lBQzlELFdBQVcsRUFBRSwrQkFBK0I7WUFDNUMsYUFBYSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxLQUFLO2FBQ2pCO1lBQ0QsaUJBQWlCO1lBQ2pCLDJCQUEyQixFQUFFO2dCQUMzQixZQUFZLEVBQUU7b0JBQ1osY0FBYztvQkFDZCxZQUFZO29CQUNaLGVBQWU7b0JBQ2YsV0FBVztpQkFDWjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztnQkFDbEUsZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsWUFBWSxFQUFFLENBQUMsdUJBQXVCLENBQUM7YUFDeEM7U0FDRixDQUFDLENBQUM7UUFFSCxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQztRQUVwRCwyQkFBMkI7UUFDM0IsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFckQsOENBQThDO1FBQzlDLFFBQVEsQ0FBQyxTQUFTLENBQ2hCLEtBQUssRUFDTCxJQUFJLFVBQVUsQ0FBQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFDLEtBQUssRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUNsRSxDQUFDO0lBRUosQ0FBQztDQUNGO0FBdkRELDBDQXVEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbi8vIGltcG9ydCAqIGFzIGVjMiBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcbi8vIGltcG9ydCAqIGFzIHJkcyBmcm9tICdAYXdzLWNkay9hd3MtcmRzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCB7IFVzZXJSZWdpc3RyYXRpb25MYW1iZGEsIHVzZXJFbWFpbENvbmZpcm0gfSBmcm9tICcuL3Jlc291cmNlcy9sYW1iZGEvYWxsTGFtYmRhJztcbmltcG9ydCAqIGFzIHNmbiBmcm9tIFwiQGF3cy1jZGsvYXdzLXN0ZXBmdW5jdGlvbnNcIjtcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9ucy10YXNrc1wiO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIlxuXG5leHBvcnQgY2xhc3MgQ2RrRXhhbXBsZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgcHVibGljIE1hY2hpbmU6IHNmbi5TdGF0ZU1hY2hpbmU7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG4gICAgXG4gICAgY29uc3QgdXNlclJlZ2lzdHJhdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywnVXNlclJlZ2lzdHJhdGlvbicsVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSgpKVxuICAgIGNvbnN0IFVzZXJFbWFpbENvbmZpcm0gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsJ1VzZXJFbWFpbENvbmZpcm0nLHVzZXJFbWFpbENvbmZpcm0oKSlcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsJ1VzZXIgUmVnaXN0cmF0aW9uJyAsIHtcbiAgICAgIGxhbWJkYUZ1bmN0aW9uOnVzZXJSZWdpc3RyYXRpb24sXG4gICAgICBvdXRwdXRQYXRoOlwiJC5QYXlsb2FkXCJcbiAgICB9KVxuICAgICAgLm5leHQoXG4gICAgICAgIG5ldyB0YXNrcy5MYW1iZGFJbnZva2UodGhpcywgXCJVc2VyIEVtYWlsIENvbmZpcm1cIiwge1xuICAgICAgICAgIGxhbWJkYUZ1bmN0aW9uOiBVc2VyRW1haWxDb25maXJtLFxuICAgICAgICAgIG91dHB1dFBhdGg6IFwiJC5QYXlsb2FkXCIsXG4gICAgICAgIH0pXG4gICAgICApO1xuXG4gICAgdGhpcy5NYWNoaW5lID0gbmV3IHNmbi5TdGF0ZU1hY2hpbmUodGhpcywgXCJTdGF0ZU1hY2hpbmVcIiwge1xuICAgICAgZGVmaW5pdGlvbixcbiAgICB9KTtcblxuXG4gICAgY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCAnVXNlclJlZ2lzdHJhdGlvbkFwaScsIHtcbiAgICAgIGRlc2NyaXB0aW9uOiAnVXNlciBSZWdpc3RyYXRpb24gYXBpIGdhdGV3YXknLFxuICAgICAgZGVwbG95T3B0aW9uczoge1xuICAgICAgICBzdGFnZU5hbWU6ICdkZXYnLFxuICAgICAgfSxcbiAgICAgIC8vIPCfkYcgZW5hYmxlIENPUlNcbiAgICAgIGRlZmF1bHRDb3JzUHJlZmxpZ2h0T3B0aW9uczoge1xuICAgICAgICBhbGxvd0hlYWRlcnM6IFtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJyxcbiAgICAgICAgICAnWC1BbXotRGF0ZScsXG4gICAgICAgICAgJ0F1dGhvcml6YXRpb24nLFxuICAgICAgICAgICdYLUFwaS1LZXknLFxuICAgICAgICBdLFxuICAgICAgICBhbGxvd01ldGhvZHM6IFsnT1BUSU9OUycsICdHRVQnLCAnUE9TVCcsICdQVVQnLCAnUEFUQ0gnLCAnREVMRVRFJ10sXG4gICAgICAgIGFsbG93Q3JlZGVudGlhbHM6IHRydWUsXG4gICAgICAgIGFsbG93T3JpZ2luczogWydodHRwOi8vbG9jYWxob3N0OjMwMDAnXSxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnYXBpVXJsJywge3ZhbHVlOiBhcGkudXJsfSk7XG5cbiAgICAvLyDwn5GHIGFkZCBhIC90b2RvcyByZXNvdXJjZVxuICAgIGNvbnN0IGN1c3RvbWVyID0gYXBpLnJvb3QuYWRkUmVzb3VyY2UoJ2dldGN1c3RvbWVyJyk7XG5cbiAgICAvLyDwn5GHIGludGVncmF0ZSBHRVQgL3RvZG9zIHdpdGggZ2V0VG9kb3NMYW1iZGFcbiAgICBjdXN0b21lci5hZGRNZXRob2QoXG4gICAgICAnR0VUJyxcbiAgICAgIG5ldyBhcGlnYXRld2F5LkxhbWJkYUludGVncmF0aW9uKFVzZXJFbWFpbENvbmZpcm0sIHtwcm94eTogdHJ1ZX0pLFxuICAgICk7XG5cbiAgfVxufSJdfQ==