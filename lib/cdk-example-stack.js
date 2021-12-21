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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFDOUMsNERBQXNFO0FBRXRFLDBEQUEwRDtBQUcxRCxNQUFhLGVBQWdCLFNBQVEsR0FBRyxDQUFDLEtBQUs7SUFFNUMsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQjtRQUNsRSxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUN4QixtQkFBbUI7UUFDbkIseURBQXlEO1FBQ3pELGlEQUFpRDtRQUNqRCxNQUFNO1FBRU4scUZBQXFGO1FBQ3JGLHdGQUF3RjtRQUV4RixvRUFBb0U7UUFDcEUsaUNBQWlDO1FBQ2pDLDZCQUE2QjtRQUM3QixLQUFLO1FBRUwsV0FBVztRQUNYLHNEQUFzRDtRQUN0RCxzQ0FBc0M7UUFDdEMsaUNBQWlDO1FBQ2pDLFNBQVM7UUFDVCxPQUFPO1FBRVAsOERBQThEO1FBQzlELGdCQUFnQjtRQUVoQixNQUFNO1FBR04sTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFDLGtCQUFrQixFQUFDLGtDQUFzQixFQUFFLENBQUMsQ0FBQTtRQUM5RixpR0FBaUc7UUFFakcsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBQyxtQkFBbUIsRUFBRztZQUNuRSxjQUFjLEVBQUMsZ0JBQWdCO1lBQy9CLFVBQVUsRUFBQyxXQUFXO1NBQ3ZCLENBQUMsQ0FBQTtRQUNBLFNBQVM7UUFDVCx5REFBeUQ7UUFDekQsd0NBQXdDO1FBQ3hDLCtCQUErQjtRQUMvQixPQUFPO1FBQ1AsS0FBSztRQUVQLDhEQUE4RDtRQUM5RCxnQkFBZ0I7UUFFaEIsTUFBTTtJQUdSLENBQUM7Q0FDRjtBQW5ERCwwQ0FtREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XHJcbi8vIGltcG9ydCAqIGFzIGVjMiBmcm9tICdAYXdzLWNkay9hd3MtZWMyJztcclxuLy8gaW1wb3J0ICogYXMgcmRzIGZyb20gJ0Bhd3MtY2RrL2F3cy1yZHMnO1xyXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XHJcbmltcG9ydCB7IFVzZXJSZWdpc3RyYXRpb25MYW1iZGEgfSBmcm9tICcuL3Jlc291cmNlcy9sYW1iZGEvYWxsTGFtYmRhJztcclxuaW1wb3J0ICogYXMgc2ZuIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyB0YXNrcyBmcm9tIFwiQGF3cy1jZGsvYXdzLXN0ZXBmdW5jdGlvbnMtdGFza3NcIjtcclxuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENka0V4YW1wbGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgcHVibGljIE1hY2hpbmU6IHNmbi5TdGF0ZU1hY2hpbmU7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG4gICAgLy8gZXhhbXBsZSByZXNvdXJjZVxyXG4gICAgLy8gY29uc3QgcXVldWUgPSBuZXcgc3FzLlF1ZXVlKHRoaXMsICdDZGtFeGFtcGxlUXVldWUnLCB7XHJcbiAgICAvLyAgIHZpc2liaWxpdHlUaW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzMDApXHJcbiAgICAvLyB9KTtcclxuXHJcbiAgICAvLyBjb25zdCBnZXRDdXN0b21lciA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ2dldGN1c3RvbWVyJywgZ2V0Q3VzdG9tZXJMYW1iZGEoKSk7XHJcbiAgICAvLyBjb25zdCBwb3N0Q3VzdG9tZXIgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdwb3N0Y3VzdG9tZXInLCBwb3N0Q3VzdG9tZXJMYW1iZGEoKSk7XHJcbiAgICBcclxuICAgIC8vIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsIFwiR2V0IEN1c3RvbWVyXCIsIHtcclxuICAgIC8vICAgbGFtYmRhRnVuY3Rpb246IGdldEN1c3RvbWVyLFxyXG4gICAgLy8gICBvdXRwdXRQYXRoOiBcIiQuUGF5bG9hZFwiLFxyXG4gICAgLy8gfSlcclxuXHJcbiAgICAvLyAgIC5uZXh0KFxyXG4gICAgLy8gICAgIG5ldyB0YXNrcy5MYW1iZGFJbnZva2UodGhpcywgXCJQb3N0IEN1c3RvbWVyXCIsIHtcclxuICAgIC8vICAgICAgIGxhbWJkYUZ1bmN0aW9uOiBwb3N0Q3VzdG9tZXIsXHJcbiAgICAvLyAgICAgICBvdXRwdXRQYXRoOiBcIiQuUGF5bG9hZFwiLFxyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICk7XHJcblxyXG4gICAgLy8gdGhpcy5NYWNoaW5lID0gbmV3IHNmbi5TdGF0ZU1hY2hpbmUodGhpcywgXCJTdGF0ZU1hY2hpbmVcIiwge1xyXG4gICAgLy8gICBkZWZpbml0aW9uLFxyXG5cclxuICAgIC8vIH0pO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgdXNlclJlZ2lzdHJhdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywnVXNlclJlZ2lzdHJhdGlvbicsVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSgpKVxyXG4gICAgLy8gY29uc3QgVXNlckVtYWlsQ29uZmlybSA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywnVXNlckVtYWlsQ29uZmlybScsVXNlckVtYWlsQ29uZmlybUxhbWJkYSgpKVxyXG5cclxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsJ1VzZXIgUmVnaXN0cmF0aW9uJyAsIHtcclxuICAgICAgbGFtYmRhRnVuY3Rpb246dXNlclJlZ2lzdHJhdGlvbixcclxuICAgICAgb3V0cHV0UGF0aDpcIiQuUGF5bG9hZFwiXHJcbiAgICB9KVxyXG4gICAgICAvLyAubmV4dChcclxuICAgICAgLy8gICBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsIFwiVXNlciBFbWFpbCBDb25maXJtXCIsIHtcclxuICAgICAgLy8gICAgIGxhbWJkYUZ1bmN0aW9uOiBVc2VyRW1haWxDb25maXJtLFxyXG4gICAgICAvLyAgICAgb3V0cHV0UGF0aDogXCIkLlBheWxvYWRcIixcclxuICAgICAgLy8gICB9KVxyXG4gICAgICAvLyApO1xyXG5cclxuICAgIC8vIHRoaXMuTWFjaGluZSA9IG5ldyBzZm4uU3RhdGVNYWNoaW5lKHRoaXMsIFwiU3RhdGVNYWNoaW5lXCIsIHtcclxuICAgIC8vICAgZGVmaW5pdGlvbixcclxuXHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4gIH1cclxufSJdfQ==