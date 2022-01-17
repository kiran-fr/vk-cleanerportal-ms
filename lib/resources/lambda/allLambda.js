"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetTestUserLambda = exports.GetWorksmanAccountRegistartionStatusLambda = exports.WorksManExperienceLambda = exports.WorksManTermsAndConditionLambda = exports.UserRegistrationLambda = void 0;
const cdk = require("@aws-cdk/core");
const lambda = require("@aws-cdk/aws-lambda");
exports.UserRegistrationLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/UserRegistration'),
        functionName: 'UserRegistration',
        handler: 'index.UserRegistrationHanlder',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(15)
    };
};
exports.WorksManTermsAndConditionLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/WorksManTermsAndCondition'),
        functionName: 'WorksManTermsAndCondition',
        handler: 'index.WorksManTermsAndConditionHandler',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(15)
    };
};
exports.WorksManExperienceLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/WorksManExperience'),
        functionName: 'WorksManExperience',
        handler: 'index.WorksManExperienceHandler',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(15)
    };
};
exports.GetWorksmanAccountRegistartionStatusLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/GetWorksmanAccountRegistartionStatus'),
        functionName: 'GetWorksmanAccountRegistartionStatus',
        handler: 'index.GetWorksmanAccountRegistartionStatusHandler',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(35)
    };
};
exports.GetTestUserLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/GetTestUser'),
        functionName: 'GetTestUser',
        handler: 'index.handler',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(35)
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFFakMsUUFBQSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7SUFDekMsT0FBTztRQUNMLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMzRCxZQUFZLEVBQUUsa0JBQWtCO1FBQ2hDLE9BQU8sRUFBRSwrQkFBK0I7UUFDeEMsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNuQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2xDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLCtCQUErQixHQUFHLEdBQUcsRUFBRTtJQUNsRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDO1FBQ3BFLFlBQVksRUFBRSwyQkFBMkI7UUFDekMsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxVQUFVLEVBQUUsSUFBSTtRQUNoQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ25DLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDbEMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQzNDLE9BQU87UUFDTCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUM7UUFDN0QsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxPQUFPLEVBQUUsaUNBQWlDO1FBQzFDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSwwQ0FBMEMsR0FBRyxHQUFHLEVBQUU7SUFDN0QsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrREFBa0QsQ0FBQztRQUM5RSxZQUFZLEVBQUMsc0NBQXNDO1FBQ25ELE9BQU8sRUFBQyxtREFBbUQ7UUFDM0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNuQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2xDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFHWSxRQUFBLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtJQUNwQyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDO1FBQ3JELFlBQVksRUFBQyxhQUFhO1FBQzFCLE9BQU8sRUFBQyxlQUFlO1FBQ3ZCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xuXG5leHBvcnQgY29uc3QgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1VzZXJSZWdpc3RyYXRpb24nKSxcbiAgICBmdW5jdGlvbk5hbWU6ICdVc2VyUmVnaXN0cmF0aW9uJyxcbiAgICBoYW5kbGVyOiAnaW5kZXguVXNlclJlZ2lzdHJhdGlvbkhhbmxkZXInLFxuICAgIG1lbW9yeVNpemU6IDEwMjQsXG4gICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFdvcmtzTWFuVGVybXNBbmRDb25kaXRpb25MYW1iZGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Xb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uJyksXG4gICAgZnVuY3Rpb25OYW1lOiAnV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbicsXG4gICAgaGFuZGxlcjogJ2luZGV4LldvcmtzTWFuVGVybXNBbmRDb25kaXRpb25IYW5kbGVyJyxcbiAgICBtZW1vcnlTaXplOiAxMDI0LFxuICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBXb3Jrc01hbkV4cGVyaWVuY2VMYW1iZGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Xb3Jrc01hbkV4cGVyaWVuY2UnKSxcbiAgICBmdW5jdGlvbk5hbWU6ICdXb3Jrc01hbkV4cGVyaWVuY2UnLFxuICAgIGhhbmRsZXI6ICdpbmRleC5Xb3Jrc01hbkV4cGVyaWVuY2VIYW5kbGVyJyxcbiAgICBtZW1vcnlTaXplOiAxMDI0LFxuICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBHZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXNMYW1iZGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL0dldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1cycpLFxuICAgIGZ1bmN0aW9uTmFtZTonR2V0V29ya3NtYW5BY2NvdW50UmVnaXN0YXJ0aW9uU3RhdHVzJyxcbiAgICBoYW5kbGVyOidpbmRleC5HZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXNIYW5kbGVyJyxcbiAgICBtZW1vcnlTaXplOiAxMDI0LFxuICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDM1KVxuICB9XG59XG5cblxuZXhwb3J0IGNvbnN0IEdldFRlc3RVc2VyTGFtYmRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9HZXRUZXN0VXNlcicpLFxuICAgIGZ1bmN0aW9uTmFtZTonR2V0VGVzdFVzZXInLFxuICAgIGhhbmRsZXI6J2luZGV4LmhhbmRsZXInLFxuICAgIG1lbW9yeVNpemU6IDEwMjQsXG4gICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzUpXG4gIH1cbn0iXX0=