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
// export const UserEmailConfirmLambda = () =>{
//   return {
//     code:lambda.Code.fromAsset('./functions/UserEmailConfirm'),
//     function:'UserEmailConfirm',
//     handler:
//   }
// }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxsTGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYWxsTGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLDJDQUEyQztBQUMzQyw4Q0FBOEM7QUFHakMsUUFBQSxzQkFBc0IsR0FBRyxHQUFHLEVBQUU7SUFDekMsT0FBTztRQUNMLElBQUksRUFBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyw4QkFBOEIsQ0FBQztRQUMxRCxZQUFZLEVBQUMsa0JBQWtCO1FBQy9CLE9BQU8sRUFBQywrQkFBK0I7UUFDdkMsVUFBVSxFQUFDLElBQUk7UUFDZixPQUFPLEVBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXO0tBRW5DLENBQUE7QUFDSCxDQUFDLENBQUE7QUFFRCwrQ0FBK0M7QUFDL0MsYUFBYTtBQUNiLGtFQUFrRTtBQUNsRSxtQ0FBbUM7QUFDbkMsZUFBZTtBQUNmLE1BQU07QUFDTixJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY2RrIGZyb20gJ0Bhd3MtY2RrL2NvcmUnO1xyXG4vLyBpbXBvcnQgKiBhcyBzcXMgZnJvbSAnQGF3cy1jZGsvYXdzLXNxcyc7XHJcbmltcG9ydCAqIGFzIGxhbWJkYSBmcm9tICdAYXdzLWNkay9hd3MtbGFtYmRhJztcclxuXHJcblxyXG5leHBvcnQgY29uc3QgVXNlclJlZ2lzdHJhdGlvbkxhbWJkYSA9ICgpID0+e1xyXG4gIHJldHVybiB7XHJcbiAgICBjb2RlOmxhbWJkYS5Db2RlLmZyb21Bc3NldCgnLi9mdW5jdGlvbnMvVXNlclJlZ2lzdHJhdGlvbicpLFxyXG4gICAgZnVuY3Rpb25OYW1lOidVc2VyUmVnaXN0cmF0aW9uJyxcclxuICAgIGhhbmRsZXI6J2luZGV4LlVzZXJSZWdpc3RyYXRpb25IYW5sZGVyJyxcclxuICAgIG1lbW9yeVNpemU6MTAyNCxcclxuICAgIHJ1bnRpbWU6bGFtYmRhLlJ1bnRpbWUuTk9ERUpTXzE0X1gsXHJcbiAgICAvLyB0aW1lb3V0OmNkay5EdXJhdGlvbi5zZWNvbmRzKDMwMDAwKVxyXG4gIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGNvbnN0IFVzZXJFbWFpbENvbmZpcm1MYW1iZGEgPSAoKSA9PntcclxuLy8gICByZXR1cm4ge1xyXG4vLyAgICAgY29kZTpsYW1iZGEuQ29kZS5mcm9tQXNzZXQoJy4vZnVuY3Rpb25zL1VzZXJFbWFpbENvbmZpcm0nKSxcclxuLy8gICAgIGZ1bmN0aW9uOidVc2VyRW1haWxDb25maXJtJyxcclxuLy8gICAgIGhhbmRsZXI6XHJcbi8vICAgfVxyXG4vLyB9Il19