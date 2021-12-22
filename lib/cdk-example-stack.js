"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkExampleStack = void 0;
const cdk = require("@aws-cdk/core");
// import * as ec2 from '@aws-cdk/aws-ec2';
// import * as rds from '@aws-cdk/aws-rds';
const lambda = require("@aws-cdk/aws-lambda");
const allLambda_1 = require("./resources/lambda/allLambda");
const tasks = require("@aws-cdk/aws-stepfunctions-tasks");
class CdkExampleStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const userRegistration = new lambda.Function(this, 'UserRegistration', allLambda_1.UserRegistrationLambda());
        // const UserEmailConfirm = new lambda.Function(this,'UserEmailConfirm',UserEmailConfirmLambda())
        const definition = new tasks.LambdaInvoke(this, 'User Registration', {
            lambdaFunction: userRegistration,
            outputPath: "$.Payload"
        });
        // .next(
        //   new tasks.LambdaInvoke(this, "User Email Confirm", {
        //     lambdaFunction: UserEmailConfirm,
        //     outputPath: "$.Payload",
        //   })
        // );
        // this.Machine = new sfn.StateMachine(this, "StateMachine", {
        //   definition,
        // });
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQXNFO0FBRXRFLDBEQUEwRDtBQUcxRCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFNUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsa0NBQXNCLEVBQUUsQ0FBQyxDQUFBO1FBQzlGLGlHQUFpRztRQUVqRyxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFHO1lBQ25FLGNBQWMsRUFBQyxnQkFBZ0I7WUFDL0IsVUFBVSxFQUFDLFdBQVc7U0FDdkIsQ0FBQyxDQUFBO1FBQ0EsU0FBUztRQUNULHlEQUF5RDtRQUN6RCx3Q0FBd0M7UUFDeEMsK0JBQStCO1FBQy9CLE9BQU87UUFDUCxLQUFLO1FBRVAsOERBQThEO1FBQzlELGdCQUFnQjtRQUVoQixNQUFNO0lBR1IsQ0FBQztDQUNGO0FBMUJELDBDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcclxuLy8gaW1wb3J0ICogYXMgZWMyIGZyb20gJ0Bhd3MtY2RrL2F3cy1lYzInO1xyXG4vLyBpbXBvcnQgKiBhcyByZHMgZnJvbSAnQGF3cy1jZGsvYXdzLXJkcyc7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcclxuaW1wb3J0IHsgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSB9IGZyb20gJy4vcmVzb3VyY2VzL2xhbWJkYS9hbGxMYW1iZGEnO1xyXG5pbXBvcnQgKiBhcyBzZm4gZnJvbSBcIkBhd3MtY2RrL2F3cy1zdGVwZnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9ucy10YXNrc1wiO1xyXG5pbXBvcnQgKiBhcyBhcGlnYXRld2F5IGZyb20gXCJAYXdzLWNkay9hd3MtYXBpZ2F0ZXdheVwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ2RrRXhhbXBsZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcclxuICBwdWJsaWMgTWFjaGluZTogc2ZuLlN0YXRlTWFjaGluZTtcclxuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xyXG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XHJcbiAgICBcclxuICAgIGNvbnN0IHVzZXJSZWdpc3RyYXRpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsJ1VzZXJSZWdpc3RyYXRpb24nLFVzZXJSZWdpc3RyYXRpb25MYW1iZGEoKSlcclxuICAgIC8vIGNvbnN0IFVzZXJFbWFpbENvbmZpcm0gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsJ1VzZXJFbWFpbENvbmZpcm0nLFVzZXJFbWFpbENvbmZpcm1MYW1iZGEoKSlcclxuXHJcbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IHRhc2tzLkxhbWJkYUludm9rZSh0aGlzLCdVc2VyIFJlZ2lzdHJhdGlvbicgLCB7XHJcbiAgICAgIGxhbWJkYUZ1bmN0aW9uOnVzZXJSZWdpc3RyYXRpb24sXHJcbiAgICAgIG91dHB1dFBhdGg6XCIkLlBheWxvYWRcIlxyXG4gICAgfSlcclxuICAgICAgLy8gLm5leHQoXHJcbiAgICAgIC8vICAgbmV3IHRhc2tzLkxhbWJkYUludm9rZSh0aGlzLCBcIlVzZXIgRW1haWwgQ29uZmlybVwiLCB7XHJcbiAgICAgIC8vICAgICBsYW1iZGFGdW5jdGlvbjogVXNlckVtYWlsQ29uZmlybSxcclxuICAgICAgLy8gICAgIG91dHB1dFBhdGg6IFwiJC5QYXlsb2FkXCIsXHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gKTtcclxuXHJcbiAgICAvLyB0aGlzLk1hY2hpbmUgPSBuZXcgc2ZuLlN0YXRlTWFjaGluZSh0aGlzLCBcIlN0YXRlTWFjaGluZVwiLCB7XHJcbiAgICAvLyAgIGRlZmluaXRpb24sXHJcblxyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICB9XHJcbn0iXX0=