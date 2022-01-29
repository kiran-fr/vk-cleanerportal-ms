var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-2" });

export const EmailConfirmation= (emailConfirm:any) =>{
    
        const params = {
            Destination: {
              ToAddresses: [emailConfirm.email],
            },
            Message: {
              Body: {
                Text: { Data: `${emailConfirm.family_name} you succesfully registered` },
              },
        
              Subject: { Data: "Test Email" },
            },
            Source: "kiran.budipi@vrishkar.com",
          };
         
          return ses.sendEmail(params).promise()
    
}