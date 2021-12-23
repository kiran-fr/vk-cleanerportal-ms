"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailConfirmation = void 0;
var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });
exports.EmailConfirmation = (toAddress) => {
    const params = {
        Destination: {
            ToAddresses: [toAddress],
        },
        Message: {
            Body: {
                Text: { Data: "Test" },
            },
            Subject: { Data: "Test Email" },
        },
        Source: "kiran.budipi@vrishkar.com",
    };
    return ses.sendEmail(params).promise();
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRW1haWxDb25maXJtYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJFbWFpbENvbmZpcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDN0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUM7QUFFbEMsUUFBQSxpQkFBaUIsR0FBRSxDQUFDLFNBQWEsRUFBRSxFQUFFO0lBRTFDLE1BQU0sTUFBTSxHQUFHO1FBQ1gsV0FBVyxFQUFFO1lBQ1gsV0FBVyxFQUFFLENBQUMsU0FBUyxDQUFDO1NBQ3pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsSUFBSSxFQUFFO2dCQUNKLElBQUksRUFBRSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUU7YUFDdkI7WUFFRCxPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFO1NBQ2hDO1FBQ0QsTUFBTSxFQUFFLDJCQUEyQjtLQUNwQyxDQUFDO0lBRUYsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFBO0FBRWhELENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbInZhciBhd3MgPSByZXF1aXJlKFwiYXdzLXNka1wiKTtcclxudmFyIHNlcyA9IG5ldyBhd3MuU0VTKHsgcmVnaW9uOiBcInVzLWVhc3QtMVwiIH0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IEVtYWlsQ29uZmlybWF0aW9uPSAodG9BZGRyZXNzOmFueSkgPT57XHJcbiAgICBcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIERlc3RpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgVG9BZGRyZXNzZXM6IFt0b0FkZHJlc3NdLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBNZXNzYWdlOiB7XHJcbiAgICAgICAgICAgICAgQm9keToge1xyXG4gICAgICAgICAgICAgICAgVGV4dDogeyBEYXRhOiBcIlRlc3RcIiB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgU3ViamVjdDogeyBEYXRhOiBcIlRlc3QgRW1haWxcIiB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBTb3VyY2U6IFwia2lyYW4uYnVkaXBpQHZyaXNoa2FyLmNvbVwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgXHJcbiAgICAgICAgICByZXR1cm4gc2VzLnNlbmRFbWFpbChwYXJhbXMpLnByb21pc2UoKVxyXG4gICAgXHJcbn0iXX0=