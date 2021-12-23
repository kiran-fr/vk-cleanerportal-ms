"use strict";
var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });
exports.handler = async (event) => {
    const params = {
        Destination: {
            ToAddresses: ["kiran.budipi@vrishkar.com"],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzdCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO0FBRS9DLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQVMsRUFBRSxFQUFFO0lBQ2xDLE1BQU0sTUFBTSxHQUFHO1FBQ1gsV0FBVyxFQUFFO1lBQ1gsV0FBVyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDM0M7UUFDRCxPQUFPLEVBQUU7WUFDUCxJQUFJLEVBQUU7Z0JBQ0osSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRTthQUN2QjtZQUVELE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUU7U0FDaEM7UUFDRCxNQUFNLEVBQUUsMkJBQTJCO0tBQ3BDLENBQUM7SUFFRixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDeEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGF3cyA9IHJlcXVpcmUoXCJhd3Mtc2RrXCIpO1xyXG52YXIgc2VzID0gbmV3IGF3cy5TRVMoeyByZWdpb246IFwidXMtZWFzdC0xXCIgfSk7XHJcblxyXG5leHBvcnRzLmhhbmRsZXIgPSBhc3luYyAoZXZlbnQ6YW55KSA9PiB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgRGVzdGluYXRpb246IHtcclxuICAgICAgICAgIFRvQWRkcmVzc2VzOiBbXCJraXJhbi5idWRpcGlAdnJpc2hrYXIuY29tXCJdLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgTWVzc2FnZToge1xyXG4gICAgICAgICAgQm9keToge1xyXG4gICAgICAgICAgICBUZXh0OiB7IERhdGE6IFwiVGVzdFwiIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgXHJcbiAgICAgICAgICBTdWJqZWN0OiB7IERhdGE6IFwiVGVzdCBFbWFpbFwiIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBTb3VyY2U6IFwia2lyYW4uYnVkaXBpQHZyaXNoa2FyLmNvbVwiLFxyXG4gICAgICB9O1xyXG4gICAgIFxyXG4gICAgICByZXR1cm4gc2VzLnNlbmRFbWFpbChwYXJhbXMpLnByb21pc2UoKVxyXG4gICAgfTsiXX0=