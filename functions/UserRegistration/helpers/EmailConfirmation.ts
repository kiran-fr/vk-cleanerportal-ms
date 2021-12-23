var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-1" });

export const EmailConfirmation= (toAddress:any) =>{
    
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
         
          return ses.sendEmail(params).promise()
    
}