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
        // example resource
        // const queue = new sqs.Queue(this, 'CdkExampleQueue', {
        //   visibilityTimeout: cdk.Duration.seconds(300)
        // });
        // const getCustomer = new lambda.Function(this, 'getcustomer', getCustomerLambda());
        // const postCustomer = new lambda.Function(this, 'postcustomer', postCustomerLambda());
        // const definition = new tasks.LambdaInvoke(this, "Get Customer", {
        //   lambdaFunction: getCustomer,
        //   outputPath: "$.Payload",
        // })
        //   .next(
        //     new tasks.LambdaInvoke(this, "Post Customer", {
        //       lambdaFunction: postCustomer,
        //       outputPath: "$.Payload",
        //     })
        //   );
        // this.Machine = new sfn.StateMachine(this, "StateMachine", {
        //   definition,
        // });
        const UserRegistration = new lambda.Function(this, 'UserRegistration', allLambda_1.UserRegistrationLambda());
        const definition = new tasks.LambdaInvoke(this, 'User Registration', {
            lambdaFunction: UserRegistration,
            outputPath: "$.Scuccess"
        });
        // .next(
        //   new tasks.LambdaInvoke(this, "Post Customer", {
        //     lambdaFunction: postCustomer,
        //     outputPath: "$.Payload",
        //   })
        // );
        // this.Machine = new sfn.StateMachine(this, "StateMachine", {
        //   definition,
        // });
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQXNFO0FBRXRFLDBEQUEwRDtBQUcxRCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFNUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixtQkFBbUI7UUFDbkIseURBQXlEO1FBQ3pELGlEQUFpRDtRQUNqRCxNQUFNO1FBRU4scUZBQXFGO1FBQ3JGLHdGQUF3RjtRQUV4RixvRUFBb0U7UUFDcEUsaUNBQWlDO1FBQ2pDLDZCQUE2QjtRQUM3QixLQUFLO1FBRUwsV0FBVztRQUNYLHNEQUFzRDtRQUN0RCxzQ0FBc0M7UUFDdEMsaUNBQWlDO1FBQ2pDLFNBQVM7UUFDVCxPQUFPO1FBRVAsOERBQThEO1FBQzlELGdCQUFnQjtRQUVoQixNQUFNO1FBR04sTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLGtDQUFzQixFQUFFLENBQUMsQ0FBQTtRQUU5RixNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFHO1lBQ25FLGNBQWMsRUFBQyxnQkFBZ0I7WUFDL0IsVUFBVSxFQUFDLFlBQVk7U0FDeEIsQ0FBQyxDQUFBO1FBQ0EsU0FBUztRQUNULG9EQUFvRDtRQUNwRCxvQ0FBb0M7UUFDcEMsK0JBQStCO1FBQy9CLE9BQU87UUFDUCxLQUFLO1FBRVAsOERBQThEO1FBQzlELGdCQUFnQjtRQUVoQixNQUFNO0lBR1IsQ0FBQztDQUNGO0FBbERELDBDQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcclxuLy8gaW1wb3J0ICogYXMgZWMyIGZyb20gJ0Bhd3MtY2RrL2F3cy1lYzInO1xyXG4vLyBpbXBvcnQgKiBhcyByZHMgZnJvbSAnQGF3cy1jZGsvYXdzLXJkcyc7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcclxuaW1wb3J0IHsgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSB9IGZyb20gJy4vcmVzb3VyY2VzL2xhbWJkYS9hbGxMYW1iZGEnO1xyXG5pbXBvcnQgKiBhcyBzZm4gZnJvbSBcIkBhd3MtY2RrL2F3cy1zdGVwZnVuY3Rpb25zXCI7XHJcbmltcG9ydCAqIGFzIHRhc2tzIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9ucy10YXNrc1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDZGtFeGFtcGxlU3RhY2sgZXh0ZW5kcyBjZGsuU3RhY2sge1xyXG4gIHB1YmxpYyBNYWNoaW5lOiBzZm4uU3RhdGVNYWNoaW5lO1xyXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBjZGsuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wcz86IGNkay5TdGFja1Byb3BzKSB7XHJcbiAgICBzdXBlcihzY29wZSwgaWQsIHByb3BzKTtcclxuICAgIC8vIGV4YW1wbGUgcmVzb3VyY2VcclxuICAgIC8vIGNvbnN0IHF1ZXVlID0gbmV3IHNxcy5RdWV1ZSh0aGlzLCAnQ2RrRXhhbXBsZVF1ZXVlJywge1xyXG4gICAgLy8gICB2aXNpYmlsaXR5VGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwKVxyXG4gICAgLy8gfSk7XHJcblxyXG4gICAgLy8gY29uc3QgZ2V0Q3VzdG9tZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdnZXRjdXN0b21lcicsIGdldEN1c3RvbWVyTGFtYmRhKCkpO1xyXG4gICAgLy8gY29uc3QgcG9zdEN1c3RvbWVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAncG9zdGN1c3RvbWVyJywgcG9zdEN1c3RvbWVyTGFtYmRhKCkpO1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCBkZWZpbml0aW9uID0gbmV3IHRhc2tzLkxhbWJkYUludm9rZSh0aGlzLCBcIkdldCBDdXN0b21lclwiLCB7XHJcbiAgICAvLyAgIGxhbWJkYUZ1bmN0aW9uOiBnZXRDdXN0b21lcixcclxuICAgIC8vICAgb3V0cHV0UGF0aDogXCIkLlBheWxvYWRcIixcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gICAubmV4dChcclxuICAgIC8vICAgICBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsIFwiUG9zdCBDdXN0b21lclwiLCB7XHJcbiAgICAvLyAgICAgICBsYW1iZGFGdW5jdGlvbjogcG9zdEN1c3RvbWVyLFxyXG4gICAgLy8gICAgICAgb3V0cHV0UGF0aDogXCIkLlBheWxvYWRcIixcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gICApO1xyXG5cclxuICAgIC8vIHRoaXMuTWFjaGluZSA9IG5ldyBzZm4uU3RhdGVNYWNoaW5lKHRoaXMsIFwiU3RhdGVNYWNoaW5lXCIsIHtcclxuICAgIC8vICAgZGVmaW5pdGlvbixcclxuXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IFVzZXJSZWdpc3RyYXRpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsJ1VzZXJSZWdpc3RyYXRpb24nLFVzZXJSZWdpc3RyYXRpb25MYW1iZGEoKSlcclxuXHJcbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IHRhc2tzLkxhbWJkYUludm9rZSh0aGlzLCdVc2VyIFJlZ2lzdHJhdGlvbicgLCB7XHJcbiAgICAgIGxhbWJkYUZ1bmN0aW9uOlVzZXJSZWdpc3RyYXRpb24sXHJcbiAgICAgIG91dHB1dFBhdGg6XCIkLlNjdWNjZXNzXCJcclxuICAgIH0pXHJcbiAgICAgIC8vIC5uZXh0KFxyXG4gICAgICAvLyAgIG5ldyB0YXNrcy5MYW1iZGFJbnZva2UodGhpcywgXCJQb3N0IEN1c3RvbWVyXCIsIHtcclxuICAgICAgLy8gICAgIGxhbWJkYUZ1bmN0aW9uOiBwb3N0Q3VzdG9tZXIsXHJcbiAgICAgIC8vICAgICBvdXRwdXRQYXRoOiBcIiQuUGF5bG9hZFwiLFxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICk7XHJcblxyXG4gICAgLy8gdGhpcy5NYWNoaW5lID0gbmV3IHNmbi5TdGF0ZU1hY2hpbmUodGhpcywgXCJTdGF0ZU1hY2hpbmVcIiwge1xyXG4gICAgLy8gICBkZWZpbml0aW9uLFxyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgfVxyXG59Il19