"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmailConfirmLambda = exports.UserRegistrationLambda = void 0;
// import * as sqs from '@aws-cdk/aws-sqs';
const lambda = require("@aws-cdk/aws-lambda");
exports.UserRegistrationLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/UserRegistration'),
        functionName: 'UserRegistration',
        handler: 'index.UserRegistrationHanlder',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
    };
};
exports.UserEmailConfirmLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/UserEmailConfirm'),
        function: 'UserEmailConfirm',
        handler: 'index.handler',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFHakMsUUFBQSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7SUFDekMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxZQUFZLEVBQUMsa0JBQWtCO1FBQy9CLE9BQU8sRUFBQywrQkFBK0I7UUFDdkMsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO0tBRW5DLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtJQUN6QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDO1FBQzFELFFBQVEsRUFBQyxrQkFBa0I7UUFDM0IsT0FBTyxFQUFDLGVBQWU7UUFDdkIsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO0tBQ25DLENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XHJcbi8vIGltcG9ydCAqIGFzIHNxcyBmcm9tICdAYXdzLWNkay9hd3Mtc3FzJztcclxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUmVnaXN0cmF0aW9uTGFtYmRhID0gKCkgPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Vc2VyUmVnaXN0cmF0aW9uJyksXHJcbiAgICBmdW5jdGlvbk5hbWU6J1VzZXJSZWdpc3RyYXRpb24nLFxyXG4gICAgaGFuZGxlcjonaW5kZXguVXNlclJlZ2lzdHJhdGlvbkhhbmxkZXInLFxyXG4gICAgbWVtb3J5U2l6ZToxMDI0LFxyXG4gICAgcnVudGltZTpsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcclxuICAgIC8vIHRpbWVvdXQ6Y2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwMDApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgVXNlckVtYWlsQ29uZmlybUxhbWJkYSA9ICgpID0+e1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvVXNlckVtYWlsQ29uZmlybScpLFxyXG4gICAgZnVuY3Rpb246J1VzZXJFbWFpbENvbmZpcm0nLFxyXG4gICAgaGFuZGxlcjonaW5kZXguaGFuZGxlcicsXHJcbiAgICBtZW1vcnlTaXplOjEwMjQsXHJcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YXHJcbiAgfVxyXG59Il19