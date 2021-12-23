"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEmailConfirm = exports.UserRegistrationLambda = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLDBDQUEwQztBQUc3QixRQUFBLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtJQUN6QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDO1FBQzFELFlBQVksRUFBQyxrQkFBa0I7UUFDL0IsT0FBTyxFQUFDLCtCQUErQjtRQUN2QyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7SUFDbkMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxZQUFZLEVBQUMsV0FBVztRQUN4QixPQUFPLEVBQUMsZUFBZTtRQUN2QixVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xyXG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnQGF3cy1jZGsvYXdzLXNxcyc7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcclxuLy8gaW1wb3J0IHtEdXJhdGlvbn0gZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSA9ICgpID0+e1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvVXNlclJlZ2lzdHJhdGlvbicpLFxyXG4gICAgZnVuY3Rpb25OYW1lOidVc2VyUmVnaXN0cmF0aW9uJyxcclxuICAgIGhhbmRsZXI6J2luZGV4LlVzZXJSZWdpc3RyYXRpb25IYW5sZGVyJyxcclxuICAgIG1lbW9yeVNpemU6MTAyNCxcclxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VyRW1haWxDb25maXJtID0gKCkgPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Vc2VyRW1haWxDb25maXJtJyksXHJcbiAgICBmdW5jdGlvbk5hbWU6J3VzZXJFbWFpbCcsXHJcbiAgICBoYW5kbGVyOidpbmRleC5oYW5kbGVyJyxcclxuICAgIG1lbW9yeVNpemU6MTAyNCxcclxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcclxuICB9XHJcbn1cclxuIl19