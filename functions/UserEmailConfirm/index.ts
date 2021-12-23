var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

exports.handler = async (event:any) => {
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
     
      return ses.sendEmail(params).promise()
    };