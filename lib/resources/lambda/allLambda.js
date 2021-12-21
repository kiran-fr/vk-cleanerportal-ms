"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationLambda = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFHakMsUUFBQSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7SUFDekMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxZQUFZLEVBQUMsa0JBQWtCO1FBQy9CLE9BQU8sRUFBQywrQkFBK0I7UUFDdkMsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO0tBRW5DLENBQUE7QUFDSCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjZGsgZnJvbSAnQGF3cy1jZGsvY29yZSc7XHJcbi8vIGltcG9ydCAqIGFzIHNxcyBmcm9tICdAYXdzLWNkay9hd3Mtc3FzJztcclxuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUmVnaXN0cmF0aW9uTGFtYmRhID0gKCkgPT57XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Vc2VyUmVnaXN0cmF0aW9uJyksXHJcbiAgICBmdW5jdGlvbk5hbWU6J1VzZXJSZWdpc3RyYXRpb24nLFxyXG4gICAgaGFuZGxlcjonaW5kZXguVXNlclJlZ2lzdHJhdGlvbkhhbmxkZXInLFxyXG4gICAgbWVtb3J5U2l6ZToxMDI0LFxyXG4gICAgcnVudGltZTpsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcclxuICAgIC8vIHRpbWVvdXQ6Y2RrLkR1cmF0aW9uLnNlY29uZHMoMzAwMDApXHJcbiAgfVxyXG59XHJcbiJdfQ==