"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEmailConfirmLambda = exports.UserRegistrationLambda = void 0;
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
exports.UserEmailConfirmLambda = () => {
    return {
        code: lambda.Code.fromAsset('./functions/UserEmailConfirm'),
        function: 'UserEmailConfirm',
        handler: 'index.handler',
        memorySize: 1024,
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: cdk.Duration.seconds(15)
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLDBDQUEwQztBQUc3QixRQUFBLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtJQUN6QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDO1FBQzFELFlBQVksRUFBQyxrQkFBa0I7UUFDL0IsT0FBTyxFQUFDLCtCQUErQjtRQUN2QyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7SUFDekMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxRQUFRLEVBQUMsa0JBQWtCO1FBQzNCLE9BQU8sRUFBQyxlQUFlO1FBQ3ZCLFVBQVUsRUFBQyxJQUFJO1FBQ2YsT0FBTyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNsQyxPQUFPLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2xDLENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnQGF3cy1jZGsvYXdzLXNxcyc7XG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XG4vLyBpbXBvcnQge0R1cmF0aW9ufSBmcm9tIFwiQGF3cy1jZGsvY29yZVwiO1xuXG5cbmV4cG9ydCBjb25zdCBVc2VyUmVnaXN0cmF0aW9uTGFtYmRhID0gKCkgPT57XG4gIHJldHVybiB7XG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1VzZXJSZWdpc3RyYXRpb24nKSxcbiAgICBmdW5jdGlvbk5hbWU6J1VzZXJSZWdpc3RyYXRpb24nLFxuICAgIGhhbmRsZXI6J2luZGV4LlVzZXJSZWdpc3RyYXRpb25IYW5sZGVyJyxcbiAgICBtZW1vcnlTaXplOjEwMjQsXG4gICAgcnVudGltZTpsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgVXNlckVtYWlsQ29uZmlybUxhbWJkYSA9ICgpID0+e1xuICByZXR1cm4ge1xuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Vc2VyRW1haWxDb25maXJtJyksXG4gICAgZnVuY3Rpb246J1VzZXJFbWFpbENvbmZpcm0nLFxuICAgIGhhbmRsZXI6J2luZGV4LmhhbmRsZXInLFxuICAgIG1lbW9yeVNpemU6MTAyNCxcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6IGNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxuICB9XG59Il19