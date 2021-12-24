var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

exports.handler = async (event:any) => {
    const params = {
        Destination: {
          ToAddresses: ["vensurag@gmail.com"],
        },
        Message: {
          Body: {
            Text: { Data: "Test" },
          },
    
          Subject: { Data: "Test Email" },
        },
        Source: "venki.suragani@vrishkar.com",
      };
     
      return ses.sendEmail(params).promise()
    };