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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQXNFO0FBRXRFLDBEQUEwRDtBQUcxRCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFNUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixtQkFBbUI7UUFDbkIseURBQXlEO1FBQ3pELGlEQUFpRDtRQUNqRCxNQUFNO1FBRU4scUZBQXFGO1FBQ3JGLHdGQUF3RjtRQUV4RixvRUFBb0U7UUFDcEUsaUNBQWlDO1FBQ2pDLDZCQUE2QjtRQUM3QixLQUFLO1FBRUwsV0FBVztRQUNYLHNEQUFzRDtRQUN0RCxzQ0FBc0M7UUFDdEMsaUNBQWlDO1FBQ2pDLFNBQVM7UUFDVCxPQUFPO1FBRVAsOERBQThEO1FBQzlELGdCQUFnQjtRQUVoQixNQUFNO1FBR04sTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLGtDQUFzQixFQUFFLENBQUMsQ0FBQTtRQUM5RixpR0FBaUc7UUFFakcsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBRztZQUNuRSxjQUFjLEVBQUMsZ0JBQWdCO1lBQy9CLFVBQVUsRUFBQyxXQUFXO1NBQ3ZCLENBQUMsQ0FBQTtRQUNBLFNBQVM7UUFDVCx5REFBeUQ7UUFDekQsd0NBQXdDO1FBQ3hDLCtCQUErQjtRQUMvQixPQUFPO1FBQ1AsS0FBSztRQUVQLDhEQUE4RDtRQUM5RCxnQkFBZ0I7UUFFaEIsTUFBTTtJQUdSLENBQUM7Q0FDRjtBQW5ERCwwQ0FtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG4vLyBpbXBvcnQgKiBhcyBlYzIgZnJvbSAnQGF3cy1jZGsvYXdzLWVjMic7XG4vLyBpbXBvcnQgKiBhcyByZHMgZnJvbSAnQGF3cy1jZGsvYXdzLXJkcyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XG5pbXBvcnQgeyBVc2VyUmVnaXN0cmF0aW9uTGFtYmRhIH0gZnJvbSAnLi9yZXNvdXJjZXMvbGFtYmRhL2FsbExhbWJkYSc7XG5pbXBvcnQgKiBhcyBzZm4gZnJvbSBcIkBhd3MtY2RrL2F3cy1zdGVwZnVuY3Rpb25zXCI7XG5pbXBvcnQgKiBhcyB0YXNrcyBmcm9tIFwiQGF3cy1jZGsvYXdzLXN0ZXBmdW5jdGlvbnMtdGFza3NcIjtcbmltcG9ydCAqIGFzIGFwaWdhdGV3YXkgZnJvbSBcIkBhd3MtY2RrL2F3cy1hcGlnYXRld2F5XCJcblxuZXhwb3J0IGNsYXNzIENka0V4YW1wbGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XG4gIHB1YmxpYyBNYWNoaW5lOiBzZm4uU3RhdGVNYWNoaW5lO1xuICBjb25zdHJ1Y3RvcihzY29wZTogY2RrLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM/OiBjZGsuU3RhY2tQcm9wcykge1xuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xuICAgIC8vIGV4YW1wbGUgcmVzb3VyY2VcbiAgICAvLyBjb25zdCBxdWV1ZSA9IG5ldyBzcXMuUXVldWUodGhpcywgJ0Nka0V4YW1wbGVRdWV1ZScsIHtcbiAgICAvLyAgIHZpc2liaWxpdHlUaW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMDApXG4gICAgLy8gfSk7XG5cbiAgICAvLyBjb25zdCBnZXRDdXN0b21lciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ2dldGN1c3RvbWVyJywgZ2V0Q3VzdG9tZXJMYW1iZGEoKSk7XG4gICAgLy8gY29uc3QgcG9zdEN1c3RvbWVyID0gbmV3IGxhbWJkYS5GdW5jdGlvbih0aGlzLCAncG9zdGN1c3RvbWVyJywgcG9zdEN1c3RvbWVyTGFtYmRhKCkpO1xuICAgIFxuICAgIC8vIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsIFwiR2V0IEN1c3RvbWVyXCIsIHtcbiAgICAvLyAgIGxhbWJkYUZ1bmN0aW9uOiBnZXRDdXN0b21lcixcbiAgICAvLyAgIG91dHB1dFBhdGg6IFwiJC5QYXlsb2FkXCIsXG4gICAgLy8gfSlcblxuICAgIC8vICAgLm5leHQoXG4gICAgLy8gICAgIG5ldyB0YXNrcy5MYW1iZGFJbnZva2UodGhpcywgXCJQb3N0IEN1c3RvbWVyXCIsIHtcbiAgICAvLyAgICAgICBsYW1iZGFGdW5jdGlvbjogcG9zdEN1c3RvbWVyLFxuICAgIC8vICAgICAgIG91dHB1dFBhdGg6IFwiJC5QYXlsb2FkXCIsXG4gICAgLy8gICAgIH0pXG4gICAgLy8gICApO1xuXG4gICAgLy8gdGhpcy5NYWNoaW5lID0gbmV3IHNmbi5TdGF0ZU1hY2hpbmUodGhpcywgXCJTdGF0ZU1hY2hpbmVcIiwge1xuICAgIC8vICAgZGVmaW5pdGlvbixcblxuICAgIC8vIH0pO1xuXG4gICAgXG4gICAgY29uc3QgdXNlclJlZ2lzdHJhdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywnVXNlclJlZ2lzdHJhdGlvbicsVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSgpKVxuICAgIC8vIGNvbnN0IFVzZXJFbWFpbENvbmZpcm0gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsJ1VzZXJFbWFpbENvbmZpcm0nLFVzZXJFbWFpbENvbmZpcm1MYW1iZGEoKSlcblxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsJ1VzZXIgUmVnaXN0cmF0aW9uJyAsIHtcbiAgICAgIGxhbWJkYUZ1bmN0aW9uOnVzZXJSZWdpc3RyYXRpb24sXG4gICAgICBvdXRwdXRQYXRoOlwiJC5QYXlsb2FkXCJcbiAgICB9KVxuICAgICAgLy8gLm5leHQoXG4gICAgICAvLyAgIG5ldyB0YXNrcy5MYW1iZGFJbnZva2UodGhpcywgXCJVc2VyIEVtYWlsIENvbmZpcm1cIiwge1xuICAgICAgLy8gICAgIGxhbWJkYUZ1bmN0aW9uOiBVc2VyRW1haWxDb25maXJtLFxuICAgICAgLy8gICAgIG91dHB1dFBhdGg6IFwiJC5QYXlsb2FkXCIsXG4gICAgICAvLyAgIH0pXG4gICAgICAvLyApO1xuXG4gICAgLy8gdGhpcy5NYWNoaW5lID0gbmV3IHNmbi5TdGF0ZU1hY2hpbmUodGhpcywgXCJTdGF0ZU1hY2hpbmVcIiwge1xuICAgIC8vICAgZGVmaW5pdGlvbixcblxuICAgIC8vIH0pO1xuXG5cbiAgfVxufSJdfQ==