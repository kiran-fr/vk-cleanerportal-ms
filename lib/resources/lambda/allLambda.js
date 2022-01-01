"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksManAddressLambda = exports.WorksManExperienceLambda = exports.WorksManTermsAndConditionLambda = exports.userEmailConfirm = exports.UserRegistrationLambda = void 0;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFDQUFxQztBQUNyQywyQ0FBMkM7QUFDM0MsOENBQThDO0FBQzlDLDBDQUEwQztBQUc3QixRQUFBLHNCQUFzQixHQUFHLEdBQUcsRUFBRTtJQUN6QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDhCQUE4QixDQUFDO1FBQzFELFlBQVksRUFBQyxrQkFBa0I7UUFDL0IsT0FBTyxFQUFDLCtCQUErQjtRQUN2QyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSxnQkFBZ0IsR0FBRyxHQUFHLEVBQUU7SUFDbkMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxZQUFZLEVBQUMsV0FBVztRQUN4QixPQUFPLEVBQUMsZUFBZTtRQUN2QixVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNsQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBO0FBRVksUUFBQSwrQkFBK0IsR0FBRyxHQUFHLEVBQUU7SUFDbEQsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1Q0FBdUMsQ0FBQztRQUNuRSxZQUFZLEVBQUMsMkJBQTJCO1FBQ3hDLE9BQU8sRUFBQyx3Q0FBd0M7UUFDaEQsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO1FBQ2xDLE9BQU8sRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7S0FDakMsQ0FBQTtBQUNILENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQzNDLE9BQU87UUFDTCxJQUFJLEVBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0NBQWdDLENBQUM7UUFDNUQsWUFBWSxFQUFDLG9CQUFvQjtRQUNqQyxPQUFPLEVBQUMsaUNBQWlDO1FBQ3pDLFVBQVUsRUFBQyxJQUFJO1FBQ2YsT0FBTyxFQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsV0FBVztRQUNsQyxPQUFPLEVBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO0tBQ2pDLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFWSxRQUFBLHFCQUFxQixHQUFJLEdBQUcsRUFBRTtJQUN6QyxPQUFPO1FBQ0wsSUFBSSxFQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLDZCQUE2QixDQUFDO1FBQ3pELFlBQVksRUFBQyxpQkFBaUI7UUFDOUIsT0FBTyxFQUFDLDhCQUE4QjtRQUN0QyxVQUFVLEVBQUMsSUFBSTtRQUNmLE9BQU8sRUFBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFdBQVc7UUFDbEMsT0FBTyxFQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztLQUNqQyxDQUFBO0FBQ0gsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xuLy8gaW1wb3J0ICogYXMgc3FzIGZyb20gJ0Bhd3MtY2RrL2F3cy1zcXMnO1xuaW1wb3J0ICogYXMgbGFtYmRhIGZyb20gJ0Bhd3MtY2RrL2F3cy1sYW1iZGEnO1xuLy8gaW1wb3J0IHtEdXJhdGlvbn0gZnJvbSBcIkBhd3MtY2RrL2NvcmVcIjtcblxuXG5leHBvcnQgY29uc3QgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSA9ICgpID0+e1xuICByZXR1cm4ge1xuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Vc2VyUmVnaXN0cmF0aW9uJyksXG4gICAgZnVuY3Rpb25OYW1lOidVc2VyUmVnaXN0cmF0aW9uJyxcbiAgICBoYW5kbGVyOidpbmRleC5Vc2VyUmVnaXN0cmF0aW9uSGFubGRlcicsXG4gICAgbWVtb3J5U2l6ZToxMDI0LFxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgdGltZW91dDogY2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHVzZXJFbWFpbENvbmZpcm0gPSAoKSA9PntcbiAgcmV0dXJuIHtcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvVXNlckVtYWlsQ29uZmlybScpLFxuICAgIGZ1bmN0aW9uTmFtZTondXNlckVtYWlsJyxcbiAgICBoYW5kbGVyOidpbmRleC5oYW5kbGVyJyxcbiAgICBtZW1vcnlTaXplOjEwMjQsXG4gICAgcnVudGltZTpsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICB0aW1lb3V0OiBjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbkxhbWJkYSA9ICgpID0+IHtcbiAgcmV0dXJuIHtcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbicpLFxuICAgIGZ1bmN0aW9uTmFtZTonV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbicsXG4gICAgaGFuZGxlcjonaW5kZXguV29ya3NNYW5UZXJtc0FuZENvbmRpdGlvbkhhbmRsZXInLFxuICAgIG1lbW9yeVNpemU6MTAyNCxcbiAgICBydW50aW1lOmxhbWJkYS5SdW50aW1lLk5PREVKU18xNF9YLFxuICAgIHRpbWVvdXQ6Y2RrLkR1cmF0aW9uLnNlY29uZHMoMTUpXG4gIH1cbn0gXG5cbmV4cG9ydCBjb25zdCBXb3Jrc01hbkV4cGVyaWVuY2VMYW1iZGEgPSAoKSA9PiB7XG4gIHJldHVybiB7XG4gICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1dvcmtzTWFuRXhwZXJpZW5jZScpLFxuICAgIGZ1bmN0aW9uTmFtZTonV29ya3NNYW5FeHBlcmllbmNlJyxcbiAgICBoYW5kbGVyOidpbmRleC5Xb3Jrc01hbkV4cGVyaWVuY2VIYW5kbGVyJyxcbiAgICBtZW1vcnlTaXplOjEwMjQsXG4gICAgcnVudGltZTpsYW1iZGEuUnVudGltZS5OT0RFSlNfMTRfWCxcbiAgICB0aW1lb3V0OmNkay5EdXJhdGlvbi5zZWNvbmRzKDE1KVxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBXb3Jrc01hbkFkZHJlc3NMYW1iZGEgID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIGNvZGU6bGFtYmRhLkNvZGUuZnJvbUFzc2V0KCcuL2Z1bmN0aW9ucy9Xb3Jrc01hbkFkZHJlc3MnKSxcbiAgICBmdW5jdGlvbk5hbWU6J1dvcmtzTWFuQWRkcmVzcycsXG4gICAgaGFuZGxlcjonaW5kZXguV29ya3NNYW5BZGRyZXNzSGFuZGxlcicsXG4gICAgbWVtb3J5U2l6ZToxMDI0LFxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXG4gICAgdGltZW91dDpjZGsuRHVyYXRpb24uc2Vjb25kcygxNSlcbiAgfVxufSJdfQ==