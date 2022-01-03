"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CdkExampleStack = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
const allLambda_1 = require("./resources/lambda/allLambda");
const sfn = require("@aws-cdk/aws-stepfunctions");
const tasks = require("@aws-cdk/aws-stepfunctions-tasks");
const apigateway = require("@aws-cdk/aws-apigateway");
const ApiGatewayConstant_1 = require("../constants/ApiGatewayConstant");
const AllApiGateWays_1 = require("./resources/ApiGateway/AllApiGateWays");
class CdkExampleStack extends cdk.Stack {
    constructor(scope, id, props) {
        super(scope, id, props);
        const userRegistration = new lambda.Function(this, 'UserRegistration', allLambda_1.UserRegistrationLambda());
        const WorksManTermsAndCondition = new lambda.Function(this, 'WorksManTermsAndCondition', allLambda_1.WorksManTermsAndConditionLambda());
        const WorksManExperience = new lambda.Function(this, 'WorksManExperience', allLambda_1.WorksManExperienceLambda());
        const Test = new lambda.Function(this, 'Test', {
            code: lambda.Code.fromAsset('./functions/Test'),
            functionName: 'WorksManExperience',
            handler: 'index.testHandler',
            memorySize: 1024,
            runtime: lambda.Runtime.NODEJS_14_X,
            timeout: cdk.Duration.seconds(15)
        });
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
        this.Machine = new sfn.StateMachine(this, "StateMachine", {
            definition,
        });
        const api = new apigateway.RestApi(this, 'WorksManApi', ApiGatewayConstant_1.ApigatewayDataConstants());
        new cdk.CfnOutput(this, 'apiUrl', { value: api.url });
        AllApiGateWays_1.WorksmanTermsAndConditionsApiGateway(api, WorksManTermsAndCondition, 'POST');
        AllApiGateWays_1.worksmanExperienceApiGateway(api, WorksManExperience, 'POST');
    }
}
exports.CdkExampleStack = CdkExampleStack;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2RrLWV4YW1wbGUtc3RhY2suanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjZGstZXhhbXBsZS1zdGFjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxQ0FBcUM7QUFDckMsOENBQThDO0FBQzlDLDREQUFnSTtBQUNoSSxrREFBa0Q7QUFDbEQsMERBQTBEO0FBQzFELHNEQUFxRDtBQUNyRCx3RUFBMEU7QUFDMUUsMEVBQXdIO0FBRXhILE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsS0FBSztJQUU1QyxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQXNCO1FBQ2xFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRXhCLE1BQU0sZ0JBQWdCLEdBQUcsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxrQkFBa0IsRUFBRSxrQ0FBc0IsRUFBRSxDQUFDLENBQUE7UUFDaEcsTUFBTSx5QkFBeUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLDJCQUEyQixFQUFFLDJDQUErQixFQUFFLENBQUMsQ0FBQTtRQUMzSCxNQUFNLGtCQUFrQixHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsb0NBQXdCLEVBQUUsQ0FBQyxDQUFBO1FBRXRHLE1BQU0sSUFBSSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFO1lBQzdDLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQztZQUM5QyxZQUFZLEVBQUMsb0JBQW9CO1lBQ2pDLE9BQU8sRUFBQyxtQkFBbUI7WUFDM0IsVUFBVSxFQUFDLElBQUk7WUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1lBQ2xDLE9BQU8sRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7U0FDakMsQ0FBQyxDQUFBO1FBRUYsTUFBTSxVQUFVLEdBQUcsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxtQkFBbUIsRUFBRTtZQUNuRSxjQUFjLEVBQUUsZ0JBQWdCO1lBQ2hDLFVBQVUsRUFBRSxXQUFXO1NBQ3hCLENBQUMsQ0FBQTtRQUNBLFNBQVM7UUFDVCx5REFBeUQ7UUFDekQsd0NBQXdDO1FBQ3hDLCtCQUErQjtRQUMvQixPQUFPO1FBQ1AsS0FBSztRQUVQLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxjQUFjLEVBQUU7WUFDeEQsVUFBVTtTQUNYLENBQUMsQ0FBQztRQUVILE1BQU0sR0FBRyxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLDRDQUF1QixFQUFFLENBQUMsQ0FBQztRQUVuRixJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUd0RCxxREFBb0MsQ0FBQyxHQUFHLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxDQUFDLENBQUE7UUFDMUUsNkNBQTRCLENBQUMsR0FBRyxFQUFDLGtCQUFrQixFQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRTdELENBQUM7Q0FDRjtBQTFDRCwwQ0EwQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcclxuaW1wb3J0IHsgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSxXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uTGFtYmRhLCBXb3Jrc01hbkV4cGVyaWVuY2VMYW1iZGEgfSBmcm9tICcuL3Jlc291cmNlcy9sYW1iZGEvYWxsTGFtYmRhJztcclxuaW1wb3J0ICogYXMgc2ZuIGZyb20gXCJAYXdzLWNkay9hd3Mtc3RlcGZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgKiBhcyB0YXNrcyBmcm9tIFwiQGF3cy1jZGsvYXdzLXN0ZXBmdW5jdGlvbnMtdGFza3NcIjtcclxuaW1wb3J0ICogYXMgYXBpZ2F0ZXdheSBmcm9tIFwiQGF3cy1jZGsvYXdzLWFwaWdhdGV3YXlcIlxyXG5pbXBvcnQgeyBBcGlnYXRld2F5RGF0YUNvbnN0YW50cyB9IGZyb20gJy4uL2NvbnN0YW50cy9BcGlHYXRld2F5Q29uc3RhbnQnO1xyXG5pbXBvcnQgeyB3b3Jrc21hbkV4cGVyaWVuY2VBcGlHYXRld2F5LFdvcmtzbWFuVGVybXNBbmRDb25kaXRpb25zQXBpR2F0ZXdheX0gZnJvbSBcIi4vcmVzb3VyY2VzL0FwaUdhdGV3YXkvQWxsQXBpR2F0ZVdheXNcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENka0V4YW1wbGVTdGFjayBleHRlbmRzIGNkay5TdGFjayB7XHJcbiAgcHVibGljIE1hY2hpbmU6IHNmbi5TdGF0ZU1hY2hpbmU7XHJcbiAgY29uc3RydWN0b3Ioc2NvcGU6IGNkay5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzPzogY2RrLlN0YWNrUHJvcHMpIHtcclxuICAgIHN1cGVyKHNjb3BlLCBpZCwgcHJvcHMpO1xyXG5cclxuICAgIGNvbnN0IHVzZXJSZWdpc3RyYXRpb24gPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdVc2VyUmVnaXN0cmF0aW9uJywgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSgpKVxyXG4gICAgY29uc3QgV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbiA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ1dvcmtzTWFuVGVybXNBbmRDb25kaXRpb24nLCBXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uTGFtYmRhKCkpXHJcbiAgICBjb25zdCBXb3Jrc01hbkV4cGVyaWVuY2UgPSBuZXcgbGFtYmRhLkZ1bmN0aW9uKHRoaXMsICdXb3Jrc01hbkV4cGVyaWVuY2UnLCBXb3Jrc01hbkV4cGVyaWVuY2VMYW1iZGEoKSlcclxuICAgIFxyXG4gICAgY29uc3QgVGVzdCA9IG5ldyBsYW1iZGEuRnVuY3Rpb24odGhpcywgJ1Rlc3QnLCB7XHJcbiAgICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9UZXN0JyksXHJcbiAgICAgIGZ1bmN0aW9uTmFtZTonV29ya3NNYW5FeHBlcmllbmNlJyxcclxuICAgICAgaGFuZGxlcjonaW5kZXgudGVzdEhhbmRsZXInLFxyXG4gICAgICBtZW1vcnlTaXplOjEwMjQsXHJcbiAgICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICAgIHRpbWVvdXQ6Y2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgdGFza3MuTGFtYmRhSW52b2tlKHRoaXMsICdVc2VyIFJlZ2lzdHJhdGlvbicsIHtcclxuICAgICAgbGFtYmRhRnVuY3Rpb246IHVzZXJSZWdpc3RyYXRpb24sXHJcbiAgICAgIG91dHB1dFBhdGg6IFwiJC5QYXlsb2FkXCJcclxuICAgIH0pXHJcbiAgICAgIC8vIC5uZXh0KFxyXG4gICAgICAvLyAgIG5ldyB0YXNrcy5MYW1iZGFJbnZva2UodGhpcywgXCJVc2VyIEVtYWlsIENvbmZpcm1cIiwge1xyXG4gICAgICAvLyAgICAgbGFtYmRhRnVuY3Rpb246IFVzZXJFbWFpbENvbmZpcm0sXHJcbiAgICAgIC8vICAgICBvdXRwdXRQYXRoOiBcIiQuUGF5bG9hZFwiLFxyXG4gICAgICAvLyAgIH0pXHJcbiAgICAgIC8vICk7XHJcblxyXG4gICAgdGhpcy5NYWNoaW5lID0gbmV3IHNmbi5TdGF0ZU1hY2hpbmUodGhpcywgXCJTdGF0ZU1hY2hpbmVcIiwge1xyXG4gICAgICBkZWZpbml0aW9uLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgYXBpID0gbmV3IGFwaWdhdGV3YXkuUmVzdEFwaSh0aGlzLCAnV29ya3NNYW5BcGknLCBBcGlnYXRld2F5RGF0YUNvbnN0YW50cygpKTtcclxuXHJcbiAgICBuZXcgY2RrLkNmbk91dHB1dCh0aGlzLCAnYXBpVXJsJywgeyB2YWx1ZTogYXBpLnVybCB9KTtcclxuXHJcblxyXG4gICAgV29ya3NtYW5UZXJtc0FuZENvbmRpdGlvbnNBcGlHYXRld2F5KGFwaSxXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uLCdQT1NUJylcclxuICAgIHdvcmtzbWFuRXhwZXJpZW5jZUFwaUdhdGV3YXkoYXBpLFdvcmtzTWFuRXhwZXJpZW5jZSwnUE9TVCcpXHJcblxyXG4gIH1cclxufSJdfQ==