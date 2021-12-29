"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksmanEligibilityLambda = exports.WorksManExperienceLambda = exports.WorksManTermsAndConditionLambda = exports.userEmailConfirm = exports.UserRegistrationLambda = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLDBDQUEwQztBQUc3QixRQUFBLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtJQUN6QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDO1FBQzFELFlBQVksRUFBQyxrQkFBa0I7UUFDL0IsT0FBTyxFQUFDLCtCQUErQjtRQUN2QyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7SUFDbkMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxZQUFZLEVBQUMsV0FBVztRQUN4QixPQUFPLEVBQUMsZUFBZTtRQUN2QixVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSwrQkFBK0IsR0FBRyxHQUFHLEVBQUU7SUFDbEQsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQztRQUNuRSxZQUFZLEVBQUMsMkJBQTJCO1FBQ3hDLE9BQU8sRUFBQyx3Q0FBd0M7UUFDaEQsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ2xDLE9BQU8sRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDakMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQzNDLE9BQU87UUFDTCxJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUM7UUFDNUQsWUFBWSxFQUFDLG9CQUFvQjtRQUNqQyxPQUFPLEVBQUMsaUNBQWlDO1FBQ3pDLFVBQVUsRUFBQyxJQUFJO1FBQ2YsT0FBTyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNsQyxPQUFPLEVBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2pDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLHlCQUF5QixHQUFHLEdBQUcsRUFBRTtJQUM1QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDO1FBQzdELFlBQVksRUFBQyxxQkFBcUI7UUFDbEMsT0FBTyxFQUFDLGtDQUFrQztRQUMxQyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNqQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xyXG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnQGF3cy1jZGsvYXdzLXNxcyc7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcclxuLy8gaW1wb3J0IHtEdXJhdGlvbn0gZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSA9ICgpID0+e1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvVXNlclJlZ2lzdHJhdGlvbicpLFxyXG4gICAgZnVuY3Rpb25OYW1lOidVc2VyUmVnaXN0cmF0aW9uJyxcclxuICAgIGhhbmRsZXI6J2luZGV4LlVzZXJSZWdpc3RyYXRpb25IYW5sZGVyJyxcclxuICAgIG1lbW9yeVNpemU6MTAyNCxcclxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyRW1haWxDb25maXJtID0gKCkgPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Vc2VyRW1haWxDb25maXJtJyksXHJcbiAgICBmdW5jdGlvbk5hbWU6J3VzZXJFbWFpbCcsXHJcbiAgICBoYW5kbGVyOidpbmRleC5oYW5kbGVyJyxcclxuICAgIG1lbW9yeVNpemU6MTAyNCxcclxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uTGFtYmRhID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbicpLFxyXG4gICAgZnVuY3Rpb25OYW1lOidXb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uJyxcclxuICAgIGhhbmRsZXI6J2luZGV4LldvcmtzTWFuVGVybXNBbmRDb25kaXRpb25IYW5kbGVyJyxcclxuICAgIG1lbW9yeVNpemU6MTAyNCxcclxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICB0aW1lb3V0OmNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxyXG4gIH1cclxufSBcclxuXHJcbmV4cG9ydCBjb25zdCBXb3Jrc01hbkV4cGVyaWVuY2VMYW1iZGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Xb3Jrc01hbkV4cGVyaWVuY2UnKSxcclxuICAgIGZ1bmN0aW9uTmFtZTonV29ya3NNYW5FeHBlcmllbmNlJyxcclxuICAgIGhhbmRsZXI6J2luZGV4LldvcmtzTWFuRXhwZXJpZW5jZUhhbmRsZXInLFxyXG4gICAgbWVtb3J5U2l6ZToxMDI0LFxyXG4gICAgcnVudGltZTpsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcclxuICAgIHRpbWVvdXQ6Y2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV29ya3NtYW5FbGlnaWJpbGl0eUxhbWJkYSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1dvcmtzbWFuRWxpZ2liaWxpdHknKSxcclxuICAgIGZ1bmN0aW9uTmFtZTonV29ya3NtYW5FbGlnaWJpbGl0eScsXHJcbiAgICBoYW5kbGVyOidpbmRleC5Xb3Jrc21hbkVsaWdpYmlsaXR5SGFuZGxlcicsXHJcbiAgICBtZW1vcnlTaXplOjEwMjQsXHJcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxyXG4gICAgdGltZW91dDpjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcclxuICB9XHJcbn0iXX0=