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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLDBDQUEwQztBQUc3QixRQUFBLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtJQUN6QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDO1FBQzFELFlBQVksRUFBQyxrQkFBa0I7UUFDL0IsT0FBTyxFQUFDLCtCQUErQjtRQUN2QyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7SUFDbkMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxZQUFZLEVBQUMsV0FBVztRQUN4QixPQUFPLEVBQUMsZUFBZTtRQUN2QixVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSwrQkFBK0IsR0FBRyxHQUFHLEVBQUU7SUFDbEQsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQztRQUNuRSxZQUFZLEVBQUMsMkJBQTJCO1FBQ3hDLE9BQU8sRUFBQyx3Q0FBd0M7UUFDaEQsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ2xDLE9BQU8sRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDakMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQzNDLE9BQU87UUFDTCxJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUM7UUFDNUQsWUFBWSxFQUFDLG9CQUFvQjtRQUNqQyxPQUFPLEVBQUMsaUNBQWlDO1FBQ3pDLFVBQVUsRUFBQyxJQUFJO1FBQ2YsT0FBTyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNsQyxPQUFPLEVBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2pDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLHlCQUF5QixHQUFHLEdBQUcsRUFBRTtJQUM1QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGlDQUFpQyxDQUFDO1FBQzdELFlBQVksRUFBQyxxQkFBcUI7UUFDbEMsT0FBTyxFQUFDLGtDQUFrQztRQUMxQyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNqQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxxQkFBcUIsR0FBSSxHQUFHLEVBQUU7SUFDekMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw2QkFBNkIsQ0FBQztRQUN6RCxZQUFZLEVBQUMsaUJBQWlCO1FBQzlCLE9BQU8sRUFBQyw4QkFBOEI7UUFDdEMsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ2xDLE9BQU8sRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDakMsQ0FBQTtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGNkayBmcm9tICdAYXdzLWNkay9jb3JlJztcclxuLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ0Bhd3MtY2RrL2F3cy1zcXMnO1xyXG5pbXBvcnQgKiBhcyBsYW1iZGEgZnJvbSAnQGF3cy1jZGsvYXdzLWxhbWJkYSc7XHJcbi8vIGltcG9ydCB7RHVyYXRpb259IGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFVzZXJSZWdpc3RyYXRpb25MYW1iZGEgPSAoKSA9PntcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1VzZXJSZWdpc3RyYXRpb24nKSxcclxuICAgIGZ1bmN0aW9uTmFtZTonVXNlclJlZ2lzdHJhdGlvbicsXHJcbiAgICBoYW5kbGVyOidpbmRleC5Vc2VyUmVnaXN0cmF0aW9uSGFubGRlcicsXHJcbiAgICBtZW1vcnlTaXplOjEwMjQsXHJcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxyXG4gICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlckVtYWlsQ29uZmlybSA9ICgpID0+e1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvVXNlckVtYWlsQ29uZmlybScpLFxyXG4gICAgZnVuY3Rpb25OYW1lOid1c2VyRW1haWwnLFxyXG4gICAgaGFuZGxlcjonaW5kZXguaGFuZGxlcicsXHJcbiAgICBtZW1vcnlTaXplOjEwMjQsXHJcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxyXG4gICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbkxhbWJkYSA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1dvcmtzTWFuVGVybXNBbmRDb25kaXRpb24nKSxcclxuICAgIGZ1bmN0aW9uTmFtZTonV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbicsXHJcbiAgICBoYW5kbGVyOidpbmRleC5Xb3Jrc01hblRlcm1zQW5kQ29uZGl0aW9uSGFuZGxlcicsXHJcbiAgICBtZW1vcnlTaXplOjEwMjQsXHJcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxyXG4gICAgdGltZW91dDpjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcclxuICB9XHJcbn0gXHJcblxyXG5leHBvcnQgY29uc3QgV29ya3NNYW5FeHBlcmllbmNlTGFtYmRhID0gKCkgPT4ge1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvV29ya3NNYW5FeHBlcmllbmNlJyksXHJcbiAgICBmdW5jdGlvbk5hbWU6J1dvcmtzTWFuRXhwZXJpZW5jZScsXHJcbiAgICBoYW5kbGVyOidpbmRleC5Xb3Jrc01hbkV4cGVyaWVuY2VIYW5kbGVyJyxcclxuICAgIG1lbW9yeVNpemU6MTAyNCxcclxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICB0aW1lb3V0OmNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdvcmtzbWFuRWxpZ2liaWxpdHlMYW1iZGEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Xb3Jrc21hbkVsaWdpYmlsaXR5JyksXHJcbiAgICBmdW5jdGlvbk5hbWU6J1dvcmtzbWFuRWxpZ2liaWxpdHknLFxyXG4gICAgaGFuZGxlcjonaW5kZXguV29ya3NtYW5FbGlnaWJpbGl0eUhhbmRsZXInLFxyXG4gICAgbWVtb3J5U2l6ZToxMDI0LFxyXG4gICAgcnVudGltZTpsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcclxuICAgIHRpbWVvdXQ6Y2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV29ya3NNYW5BZGRyZXNzTGFtYmRhICA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1dvcmtzTWFuQWRkcmVzcycpLFxyXG4gICAgZnVuY3Rpb25OYW1lOidXb3Jrc01hbkFkZHJlc3MnLFxyXG4gICAgaGFuZGxlcjonaW5kZXguV29ya3NNYW5BZGRyZXNzSGFuZGxlcicsXHJcbiAgICBtZW1vcnlTaXplOjEwMjQsXHJcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxyXG4gICAgdGltZW91dDpjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcclxuICB9XHJcbn0iXX0=