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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQXNFO0FBRXRFLDBEQUEwRDtBQUcxRCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFNUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUV4QixNQUFNLGdCQUFnQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsa0NBQXNCLEVBQUUsQ0FBQyxDQUFBO1FBQzlGLGlHQUFpRztRQUVqRyxNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFHO1lBQ25FLGNBQWMsRUFBQyxnQkFBZ0I7WUFDL0IsVUFBVSxFQUFDLFdBQVc7U0FDdkIsQ0FBQyxDQUFBO1FBQ0EsU0FBUztRQUNULHlEQUF5RDtRQUN6RCx3Q0FBd0M7UUFDeEMsK0JBQStCO1FBQy9CLE9BQU87UUFDUCxLQUFLO1FBRVAsOERBQThEO1FBQzlELGdCQUFnQjtRQUVoQixNQUFNO0lBR1IsQ0FBQztDQUNGO0FBMUJELDBDQTBCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbi8vIGltcG9ydCAqIGFzIGVjMiBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcbi8vIGltcG9ydCAqIGFzIHJkcyBmcm9tICdAYXdzLWNkay9hd3MtcmRzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbmltcG9ydCB7IFVzZXJSZWdpc3RyYXRpb25MYW1iZGEgfSBmcm9tICcuL3Jlc291cmNlcy9sYW1iZGEvYWxsTGFtYmRhJztcbmltcG9ydCAqIGFzIHNmbiBmcm9tIFwiQGF3cy1jZGsvYXdzLXN0ZXBmdW5jdGlvbnNcIjtcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9ucy10YXNrc1wiO1xuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIlxuXG5leHBvcnQgY2xhc3MgQ2RrRXhhbXBsZVN0YWNrIGV4dGVuZHMgY2RrLlN0YWNrIHtcbiAgcHVibGljIE1hY2hpbmU6IHNmbi5TdGF0ZU1hY2hpbmU7XG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkLCBwcm9wcyk7XG4gICAgXG4gICAgY29uc3QgdXNlclJlZ2lzdHJhdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywnVXNlclJlZ2lzdHJhdGlvbicsVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSgpKVxuICAgIC8vIGNvbnN0IFVzZXJFbWFpbENvbmZpcm0gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsJ1VzZXJFbWFpbENvbmZpcm0nLFVzZXJFbWFpbENvbmZpcm1MYW1iZGEoKSlcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsJ1VzZXIgUmVnaXN0cmF0aW9uJyAsIHtcbiAgICAgIGxhbWJkYUZ1bmN0aW9uOnVzZXJSZWdpc3RyYXRpb24sXG4gICAgICBvdXRwdXRQYXRoOlwiJC5QYXlsb2FkXCJcbiAgICB9KVxuICAgICAgLy8gLm5leHQoXG4gICAgICAvLyAgIG5ldyB0YXNrcy5MYW1iZGFJbnZva2UodGhpcywgXCJVc2VyIEVtYWlsIENvbmZpcm1cIiwge1xuICAgICAgLy8gICAgIGxhbWJkYUZ1bmN0aW9uOiBVc2VyRW1haWxDb25maXJtLFxuICAgICAgLy8gICAgIG91dHB1dFBhdGg6IFwiJC5QYXlsb2FkXCIsXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyApO1xuXG4gICAgLy8gdGhpcy5NYWNoaW5lID0gbmV3IHNmbi5TdGF0ZU1hY2hpbmUodGhpcywgXCJTdGF0ZU1hY2hpbmVcIiwge1xuICAgIC8vICAgZGVmaW5pdGlvbixcblxuICAgIC8vIH0pO1xuXG5cbiAgfVxufSJdfQ==