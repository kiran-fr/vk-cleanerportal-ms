"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksManAddressLambda = exports.WorksmanEligibilityLambda = exports.WorksManExperienceLambda = exports.WorksManTermsAndConditionLambda = exports.userEmailConfirm = exports.UserRegistrationLambda = void 0;
const cdk = require("@aws-cdk/core");
// import * as sqs from '@aws-cdk/aws-sqs';
const lambda = require("@aws-cdk/aws-lambda");
// import {Duration} from "@aws-cdk/core";
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
exports.userEmailConfirm = () => {
    return {
        code: lambda.Code.fromAsset('./functions/UserEmailConfirm'),
        functionName: 'userEmail',
        handler: 'index.handler',
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
exports.WorksmanEligibilityLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/WorksmanEligibility'),
        functionName: 'WorksmanEligibility',
        handler: 'index.WorksmanEligibilityHandler',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(15)
    };
};
exports.WorksManAddressLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/WorksManAddress'),
        functionName: 'WorksManAddress',
        handler: 'index.WorksManAddressHandler',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(15)
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLDBDQUEwQztBQUc3QixRQUFBLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtJQUN6QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDO1FBQzFELFlBQVksRUFBQyxrQkFBa0I7UUFDL0IsT0FBTyxFQUFDLCtCQUErQjtRQUN2QyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7SUFDbkMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxZQUFZLEVBQUMsV0FBVztRQUN4QixPQUFPLEVBQUMsZUFBZTtRQUN2QixVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSwrQkFBK0IsR0FBRyxHQUFHLEVBQUU7SUFDbEQsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQztRQUNuRSxZQUFZLEVBQUMsMkJBQTJCO1FBQ3hDLE9BQU8sRUFBQyx3Q0FBd0M7UUFDaEQsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ2xDLE9BQU8sRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDakMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQzNDLE9BQU87UUFDTCxJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUM7UUFDNUQsWUFBWSxFQUFDLG9CQUFvQjtRQUNqQyxPQUFPLEVBQUMsaUNBQWlDO1FBQ3pDLFVBQVUsRUFBQyxJQUFJO1FBQ2YsT0FBTyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNsQyxPQUFPLEVBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2pDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLHlCQUF5QixHQUFHLEdBQUcsRUFBRTtJQUM1QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDO1FBQzdELFlBQVksRUFBQyxxQkFBcUI7UUFDbEMsT0FBTyxFQUFDLGtDQUFrQztRQUMxQyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNqQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxxQkFBcUIsR0FBSSxHQUFHLEVBQUU7SUFDekMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsQ0FBQztRQUN6RCxZQUFZLEVBQUMsaUJBQWlCO1FBQzlCLE9BQU8sRUFBQyw4QkFBOEI7UUFDdEMsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ2xDLE9BQU8sRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDakMsQ0FBQTtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcbi8vIGltcG9ydCAqIGFzIHNxcyBmcm9tICdAYXdzLWNkay9hd3Mtc3FzJztcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcbi8vIGltcG9ydCB7RHVyYXRpb259IGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5cblxuZXhwb3J0IGNvbnN0IFVzZXJSZWdpc3RyYXRpb25MYW1iZGEgPSAoKSA9PntcbiAgcmV0dXJuIHtcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvVXNlclJlZ2lzdHJhdGlvbicpLFxuICAgIGZ1bmN0aW9uTmFtZTonVXNlclJlZ2lzdHJhdGlvbicsXG4gICAgaGFuZGxlcjonaW5kZXguVXNlclJlZ2lzdHJhdGlvbkhhbmxkZXInLFxuICAgIG1lbW9yeVNpemU6MTAyNCxcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCB1c2VyRW1haWxDb25maXJtID0gKCkgPT57XG4gIHJldHVybiB7XG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1VzZXJFbWFpbENvbmZpcm0nKSxcbiAgICBmdW5jdGlvbk5hbWU6J3VzZXJFbWFpbCcsXG4gICAgaGFuZGxlcjonaW5kZXguaGFuZGxlcicsXG4gICAgbWVtb3J5U2l6ZToxMDI0LFxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFdvcmtzTWFuVGVybXNBbmRDb25kaXRpb25MYW1iZGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1dvcmtzTWFuVGVybXNBbmRDb25kaXRpb24nKSxcbiAgICBmdW5jdGlvbk5hbWU6J1dvcmtzTWFuVGVybXNBbmRDb25kaXRpb24nLFxuICAgIGhhbmRsZXI6J2luZGV4LldvcmtzTWFuVGVybXNBbmRDb25kaXRpb25IYW5kbGVyJyxcbiAgICBtZW1vcnlTaXplOjEwMjQsXG4gICAgcnVudGltZTpsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICB0aW1lb3V0OmNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxuICB9XG59IFxuXG5leHBvcnQgY29uc3QgV29ya3NNYW5FeHBlcmllbmNlTGFtYmRhID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Xb3Jrc01hbkV4cGVyaWVuY2UnKSxcbiAgICBmdW5jdGlvbk5hbWU6J1dvcmtzTWFuRXhwZXJpZW5jZScsXG4gICAgaGFuZGxlcjonaW5kZXguV29ya3NNYW5FeHBlcmllbmNlSGFuZGxlcicsXG4gICAgbWVtb3J5U2l6ZToxMDI0LFxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgdGltZW91dDpjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgV29ya3NtYW5FbGlnaWJpbGl0eUxhbWJkYSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvV29ya3NtYW5FbGlnaWJpbGl0eScpLFxuICAgIGZ1bmN0aW9uTmFtZTonV29ya3NtYW5FbGlnaWJpbGl0eScsXG4gICAgaGFuZGxlcjonaW5kZXguV29ya3NtYW5FbGlnaWJpbGl0eUhhbmRsZXInLFxuICAgIG1lbW9yeVNpemU6MTAyNCxcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6Y2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IFdvcmtzTWFuQWRkcmVzc0xhbWJkYSAgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1dvcmtzTWFuQWRkcmVzcycpLFxuICAgIGZ1bmN0aW9uTmFtZTonV29ya3NNYW5BZGRyZXNzJyxcbiAgICBoYW5kbGVyOidpbmRleC5Xb3Jrc01hbkFkZHJlc3NIYW5kbGVyJyxcbiAgICBtZW1vcnlTaXplOjEwMjQsXG4gICAgcnVudGltZTpsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICB0aW1lb3V0OmNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxuICB9XG59Il19