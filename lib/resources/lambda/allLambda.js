"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostTestUserLambda = exports.GetTestUserLambda = exports.GetWorksmanAccountRegistartionStatusLambda = exports.WorksManExperienceLambda = exports.WorksManTermsAndConditionLambda = exports.UserRegistrationLambda = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQyw4Q0FBOEM7QUFFakMsUUFBQSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7SUFDekMsT0FBTztRQUNMLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMzRCxZQUFZLEVBQUUsa0JBQWtCO1FBQ2hDLE9BQU8sRUFBRSwrQkFBK0I7UUFDeEMsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNuQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2xDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLCtCQUErQixHQUFHLEdBQUcsRUFBRTtJQUNsRCxPQUFPO1FBQ0wsSUFBSSxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHVDQUF1QyxDQUFDO1FBQ3BFLFlBQVksRUFBRSwyQkFBMkI7UUFDekMsT0FBTyxFQUFFLHdDQUF3QztRQUNqRCxVQUFVLEVBQUUsSUFBSTtRQUNoQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ25DLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDbEMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQzNDLE9BQU87UUFDTCxJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUM7UUFDN0QsWUFBWSxFQUFFLG9CQUFvQjtRQUNsQyxPQUFPLEVBQUUsaUNBQWlDO1FBQzFDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSwwQ0FBMEMsR0FBRyxHQUFHLEVBQUU7SUFDN0QsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxrREFBa0QsQ0FBQztRQUM5RSxZQUFZLEVBQUMsc0NBQXNDO1FBQ25ELE9BQU8sRUFBQyxtREFBbUQ7UUFDM0QsVUFBVSxFQUFFLElBQUk7UUFDaEIsT0FBTyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNuQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2xDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFHWSxRQUFBLGlCQUFpQixHQUFHLEdBQUcsRUFBRTtJQUNwQyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDO1FBQ3JELFlBQVksRUFBQyxhQUFhO1FBQzFCLE9BQU8sRUFBQyxlQUFlO1FBQ3ZCLFVBQVUsRUFBRSxJQUFJO1FBQ2hCLE9BQU8sRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbkMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxrQkFBa0IsR0FBRyxHQUFHLEVBQUU7SUFDckMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsQ0FBQztRQUN6RCxZQUFZLEVBQUMsY0FBYztRQUMzQixPQUFPLEVBQUMsZUFBZTtRQUN2QixVQUFVLEVBQUUsSUFBSTtRQUNoQixPQUFPLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ25DLE9BQU8sRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDbEMsQ0FBQTtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcblxuZXhwb3J0IGNvbnN0IFVzZXJSZWdpc3RyYXRpb25MYW1iZGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTogbGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Vc2VyUmVnaXN0cmF0aW9uJyksXG4gICAgZnVuY3Rpb25OYW1lOiAnVXNlclJlZ2lzdHJhdGlvbicsXG4gICAgaGFuZGxlcjogJ2luZGV4LlVzZXJSZWdpc3RyYXRpb25IYW5sZGVyJyxcbiAgICBtZW1vcnlTaXplOiAxMDI0LFxuICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uTGFtYmRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbicpLFxuICAgIGZ1bmN0aW9uTmFtZTogJ1dvcmtzTWFuVGVybXNBbmRDb25kaXRpb24nLFxuICAgIGhhbmRsZXI6ICdpbmRleC5Xb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uSGFuZGxlcicsXG4gICAgbWVtb3J5U2l6ZTogMTAyNCxcbiAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgV29ya3NNYW5FeHBlcmllbmNlTGFtYmRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6IGxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvV29ya3NNYW5FeHBlcmllbmNlJyksXG4gICAgZnVuY3Rpb25OYW1lOiAnV29ya3NNYW5FeHBlcmllbmNlJyxcbiAgICBoYW5kbGVyOiAnaW5kZXguV29ya3NNYW5FeHBlcmllbmNlSGFuZGxlcicsXG4gICAgbWVtb3J5U2l6ZTogMTAyNCxcbiAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgR2V0V29ya3NtYW5BY2NvdW50UmVnaXN0YXJ0aW9uU3RhdHVzTGFtYmRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9HZXRXb3Jrc21hbkFjY291bnRSZWdpc3RhcnRpb25TdGF0dXMnKSxcbiAgICBmdW5jdGlvbk5hbWU6J0dldFdvcmtzbWFuQWNjb3VudFJlZ2lzdGFydGlvblN0YXR1cycsXG4gICAgaGFuZGxlcjonaW5kZXguR2V0V29ya3NtYW5BY2NvdW50UmVnaXN0YXJ0aW9uU3RhdHVzSGFuZGxlcicsXG4gICAgbWVtb3J5U2l6ZTogMTAyNCxcbiAgICBydW50aW1lOiBsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygzNSlcbiAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBHZXRUZXN0VXNlckxhbWJkYSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvR2V0VGVzdFVzZXInKSxcbiAgICBmdW5jdGlvbk5hbWU6J0dldFRlc3RVc2VyJyxcbiAgICBoYW5kbGVyOidpbmRleC5oYW5kbGVyJyxcbiAgICBtZW1vcnlTaXplOiAxMDI0LFxuICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDM1KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBQb3N0VGVzdFVzZXJMYW1iZGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL0dldFBvc3RUZXN0VXNlcicpLFxuICAgIGZ1bmN0aW9uTmFtZTonUG9zdFRlc3RVc2VyJyxcbiAgICBoYW5kbGVyOidpbmRleC5oYW5kbGVyJyxcbiAgICBtZW1vcnlTaXplOiAxMDI0LFxuICAgIHJ1bnRpbWU6IGxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDM1KVxuICB9XG59Il19