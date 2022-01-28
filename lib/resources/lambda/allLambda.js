"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllMobileNumberLambda = exports.PostTestUserLambda = exports.GetTestUserLambda = exports.GetWorksmanAccountRegistartionStatusLambda = exports.WorksManExperienceLambda = exports.WorksManTermsAndConditionLambda = exports.UserRegistrationLambda = void 0;
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
exports.PostTestUserLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/GetPostTestUser'),
        functionName: 'PostTestUser',
        handler: 'index.handler',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(35)
    };
};
exports.getAllMobileNumberLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/userEmailError'),
        functionName: 'getAllMobileNumbers',
        handler: 'index.getAllMobileNumbersHanlder',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(35)
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFFakMsUUFBQSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7SUFDekMsT0FBTztRQUNMLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMzRCxZQUFZLEVBQUUsa0JBQWtCO1FBQ2hDLE9BQU8sRUFBRSwrQkFBK0I7UUFDeEMsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNuQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2xDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLCtCQUErQixHQUFHLEdBQUcsRUFBRTtJQUNsRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDO1FBQ3BFLFlBQVksRUFBRSwyQkFBMkI7UUFDekMsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxVQUFVLEVBQUUsSUFBSTtRQUNoQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ25DLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDbEMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQzNDLE9BQU87UUFDTCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUM7UUFDN0QsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxPQUFPLEVBQUUsaUNBQWlDO1FBQzFDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSwwQ0FBMEMsR0FBRyxHQUFHLEVBQUU7SUFDN0QsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrREFBa0QsQ0FBQztRQUM5RSxZQUFZLEVBQUMsc0NBQXNDO1FBQ25ELE9BQU8sRUFBQyxtREFBbUQ7UUFDM0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNuQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2xDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFHWSxRQUFBLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtJQUNwQyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDO1FBQ3JELFlBQVksRUFBQyxhQUFhO1FBQzFCLE9BQU8sRUFBQyxlQUFlO1FBQ3ZCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7SUFDckMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsQ0FBQztRQUN6RCxZQUFZLEVBQUMsY0FBYztRQUMzQixPQUFPLEVBQUMsZUFBZTtRQUN2QixVQUFVLEVBQUUsSUFBSTtRQUNoQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ25DLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDbEMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUdZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQzNDLE9BQU87UUFDTCxJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsNEJBQTRCLENBQUM7UUFDeEQsWUFBWSxFQUFDLHFCQUFxQjtRQUNsQyxPQUFPLEVBQUMsa0NBQWtDO1FBQzFDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xyXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Vc2VyUmVnaXN0cmF0aW9uJyksXHJcbiAgICBmdW5jdGlvbk5hbWU6ICdVc2VyUmVnaXN0cmF0aW9uJyxcclxuICAgIGhhbmRsZXI6ICdpbmRleC5Vc2VyUmVnaXN0cmF0aW9uSGFubGRlcicsXHJcbiAgICBtZW1vcnlTaXplOiAxMDI0LFxyXG4gICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uTGFtYmRhID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOiBsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1dvcmtzTWFuVGVybXNBbmRDb25kaXRpb24nKSxcclxuICAgIGZ1bmN0aW9uTmFtZTogJ1dvcmtzTWFuVGVybXNBbmRDb25kaXRpb24nLFxyXG4gICAgaGFuZGxlcjogJ2luZGV4LldvcmtzTWFuVGVybXNBbmRDb25kaXRpb25IYW5kbGVyJyxcclxuICAgIG1lbW9yeVNpemU6IDEwMjQsXHJcbiAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcclxuICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdvcmtzTWFuRXhwZXJpZW5jZUxhbWJkYSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Xb3Jrc01hbkV4cGVyaWVuY2UnKSxcclxuICAgIGZ1bmN0aW9uTmFtZTogJ1dvcmtzTWFuRXhwZXJpZW5jZScsXHJcbiAgICBoYW5kbGVyOiAnaW5kZXguV29ya3NNYW5FeHBlcmllbmNlSGFuZGxlcicsXHJcbiAgICBtZW1vcnlTaXplOiAxMDI0LFxyXG4gICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBHZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXNMYW1iZGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9HZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXMnKSxcclxuICAgIGZ1bmN0aW9uTmFtZTonR2V0V29ya3NtYW5BY2NvdW50UmVnaXN0YXJ0aW9uU3RhdHVzJyxcclxuICAgIGhhbmRsZXI6J2luZGV4LkdldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1c0hhbmRsZXInLFxyXG4gICAgbWVtb3J5U2l6ZTogMTAyNCxcclxuICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxyXG4gICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzUpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEdldFRlc3RVc2VyTGFtYmRhID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvR2V0VGVzdFVzZXInKSxcclxuICAgIGZ1bmN0aW9uTmFtZTonR2V0VGVzdFVzZXInLFxyXG4gICAgaGFuZGxlcjonaW5kZXguaGFuZGxlcicsXHJcbiAgICBtZW1vcnlTaXplOiAxMDI0LFxyXG4gICAgcnVudGltZTogbGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzNSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQb3N0VGVzdFVzZXJMYW1iZGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9HZXRQb3N0VGVzdFVzZXInKSxcclxuICAgIGZ1bmN0aW9uTmFtZTonUG9zdFRlc3RVc2VyJyxcclxuICAgIGhhbmRsZXI6J2luZGV4LmhhbmRsZXInLFxyXG4gICAgbWVtb3J5U2l6ZTogMTAyNCxcclxuICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxyXG4gICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzUpXHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldEFsbE1vYmlsZU51bWJlckxhbWJkYSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL3VzZXJFbWFpbEVycm9yJyksXHJcbiAgICBmdW5jdGlvbk5hbWU6J2dldEFsbE1vYmlsZU51bWJlcnMnLFxyXG4gICAgaGFuZGxlcjonaW5kZXguZ2V0QWxsTW9iaWxlTnVtYmVyc0hhbmxkZXInLFxyXG4gICAgbWVtb3J5U2l6ZTogMTAyNCxcclxuICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxyXG4gICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMzUpXHJcbiAgfVxyXG59Il19