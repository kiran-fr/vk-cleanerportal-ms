import { Templates } from "../Templates/Templates";

var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-east-2" });
var path = require('path');



export const EmailConfirmation = (event: any) => {

  console.log("This are path",path.join(process.cwd(), 'static', './Email.css'))
  const params = {
    Destination: {
      ToAddresses: [event.email],
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: Templates(event)
        },
        Text: { Data: `${event.email} you succesfully registered`, Charset: "UTF-8" },
      },
      Subject: { Data: "Test Email" },
    },
    Source: "kiran.budipi@vrishkar.com",
  };

  return ses.sendEmail(params).promise()

}