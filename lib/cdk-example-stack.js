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
        const UserEmailConfirm = new lambda.Function(this, 'UserEmailConfirm', allLambda_1.UserEmailConfirmLambda());
        const definition = new tasks.LambdaInvoke(this, 'User Registration', {
            lambdaFunction: UserRegistration,
            outputPath: "$.Payload"
        })
            .next(new tasks.LambdaInvoke(this, "User Email Confirm", {
            lambdaFunction: UserEmailConfirm,
            outputPath: "$.Payload",
        }));
        this.Machine = new sfn.StateMachine(this, "StateMachine", {
            definition,
        });
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQThGO0FBQzlGLGtEQUFrRDtBQUNsRCwwREFBMEQ7QUFHMUQsTUFBYSxlQUFnQixTQUFRLEdBQUcsQ0FBQyxLQUFLO0lBRTVDLFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBc0I7UUFDbEUsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEIsbUJBQW1CO1FBQ25CLHlEQUF5RDtRQUN6RCxpREFBaUQ7UUFDakQsTUFBTTtRQUVOLHFGQUFxRjtRQUNyRix3RkFBd0Y7UUFFeEYsb0VBQW9FO1FBQ3BFLGlDQUFpQztRQUNqQyw2QkFBNkI7UUFDN0IsS0FBSztRQUVMLFdBQVc7UUFDWCxzREFBc0Q7UUFDdEQsc0NBQXNDO1FBQ3RDLGlDQUFpQztRQUNqQyxTQUFTO1FBQ1QsT0FBTztRQUVQLDhEQUE4RDtRQUM5RCxnQkFBZ0I7UUFFaEIsTUFBTTtRQUdOLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBQyxrQkFBa0IsRUFBQyxrQ0FBc0IsRUFBRSxDQUFDLENBQUE7UUFDOUYsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLGtDQUFzQixFQUFFLENBQUMsQ0FBQTtRQUU5RixNQUFNLFVBQVUsR0FBRyxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFHO1lBQ25FLGNBQWMsRUFBQyxnQkFBZ0I7WUFDL0IsVUFBVSxFQUFDLFdBQVc7U0FDdkIsQ0FBQzthQUNDLElBQUksQ0FDSCxJQUFJLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLG9CQUFvQixFQUFFO1lBQ2pELGNBQWMsRUFBRSxnQkFBZ0I7WUFDaEMsVUFBVSxFQUFFLFdBQVc7U0FDeEIsQ0FBQyxDQUNILENBQUM7UUFFSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsY0FBYyxFQUFFO1lBQ3hELFVBQVU7U0FFWCxDQUFDLENBQUM7SUFJTCxDQUFDO0NBQ0Y7QUFwREQsMENBb0RDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xyXG4vLyBpbXBvcnQgKiBhcyBlYzIgZnJvbSAnQGF3cy1jZGsvYXdzLWVjMic7XHJcbi8vIGltcG9ydCAqIGFzIHJkcyBmcm9tICdAYXdzLWNkay9hd3MtcmRzJztcclxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xyXG5pbXBvcnQgeyBVc2VyRW1haWxDb25maXJtTGFtYmRhLCBVc2VyUmVnaXN0cmF0aW9uTGFtYmRhIH0gZnJvbSAnLi9yZXNvdXJjZXMvbGFtYmRhL2FsbExhbWJkYSc7XHJcbmltcG9ydCAqIGFzIHNmbiBmcm9tIFwiQGF3cy1jZGsvYXdzLXN0ZXBmdW5jdGlvbnNcIjtcclxuaW1wb3J0ICogYXMgdGFza3MgZnJvbSBcIkBhd3MtY2RrL2F3cy1zdGVwZnVuY3Rpb25zLXRhc2tzXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENka0V4YW1wbGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgcHVibGljIE1hY2hpbmU6IHNmbi5TdGF0ZU1hY2hpbmU7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG4gICAgLy8gZXhhbXBsZSByZXNvdXJjZVxyXG4gICAgLy8gY29uc3QgcXVldWUgPSBuZXcgc3FzLlF1ZXVlKHRoaXMsICdDZGtFeGFtcGxlUXVldWUnLCB7XHJcbiAgICAvLyAgIHZpc2liaWxpdHlUaW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMDApXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBjb25zdCBnZXRDdXN0b21lciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ2dldGN1c3RvbWVyJywgZ2V0Q3VzdG9tZXJMYW1iZGEoKSk7XHJcbiAgICAvLyBjb25zdCBwb3N0Q3VzdG9tZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdwb3N0Y3VzdG9tZXInLCBwb3N0Q3VzdG9tZXJMYW1iZGEoKSk7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsIFwiR2V0IEN1c3RvbWVyXCIsIHtcclxuICAgIC8vICAgbGFtYmRhRnVuY3Rpb246IGdldEN1c3RvbWVyLFxyXG4gICAgLy8gICBvdXRwdXRQYXRoOiBcIiQuUGF5bG9hZFwiLFxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLyAgIC5uZXh0KFxyXG4gICAgLy8gICAgIG5ldyB0YXNrcy5MYW1iZGFJbnZva2UodGhpcywgXCJQb3N0IEN1c3RvbWVyXCIsIHtcclxuICAgIC8vICAgICAgIGxhbWJkYUZ1bmN0aW9uOiBwb3N0Q3VzdG9tZXIsXHJcbiAgICAvLyAgICAgICBvdXRwdXRQYXRoOiBcIiQuUGF5bG9hZFwiLFxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICk7XHJcblxyXG4gICAgLy8gdGhpcy5NYWNoaW5lID0gbmV3IHNmbi5TdGF0ZU1hY2hpbmUodGhpcywgXCJTdGF0ZU1hY2hpbmVcIiwge1xyXG4gICAgLy8gICBkZWZpbml0aW9uLFxyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgVXNlclJlZ2lzdHJhdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywnVXNlclJlZ2lzdHJhdGlvbicsVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSgpKVxyXG4gICAgY29uc3QgVXNlckVtYWlsQ29uZmlybSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywnVXNlckVtYWlsQ29uZmlybScsVXNlckVtYWlsQ29uZmlybUxhbWJkYSgpKVxyXG5cclxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsJ1VzZXIgUmVnaXN0cmF0aW9uJyAsIHtcclxuICAgICAgbGFtYmRhRnVuY3Rpb246VXNlclJlZ2lzdHJhdGlvbixcclxuICAgICAgb3V0cHV0UGF0aDpcIiQuUGF5bG9hZFwiXHJcbiAgICB9KVxyXG4gICAgICAubmV4dChcclxuICAgICAgICBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsIFwiVXNlciBFbWFpbCBDb25maXJtXCIsIHtcclxuICAgICAgICAgIGxhbWJkYUZ1bmN0aW9uOiBVc2VyRW1haWxDb25maXJtLFxyXG4gICAgICAgICAgb3V0cHV0UGF0aDogXCIkLlBheWxvYWRcIixcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG5cclxuICAgIHRoaXMuTWFjaGluZSA9IG5ldyBzZm4uU3RhdGVNYWNoaW5lKHRoaXMsIFwiU3RhdGVNYWNoaW5lXCIsIHtcclxuICAgICAgZGVmaW5pdGlvbixcclxuXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuICB9XHJcbn0iXX0=