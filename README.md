# Welcome to your CDK TypeScript project!

This is a blank project for TypeScript development with CDK.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
* `cdk destroy`       delete the stacks


https://tlakomy.com/run-cdk-lambda-function-locally

npm run build
cdk bootstrap
cdk synth --no-staging > template.yaml 
sam local invoke getcustomer --no-event
sam local invoke UserRegistration -e  functions/UserRegistration/mock.json
sam local invoke WorksManTermsAndCondition66F1F295 -e functions/WorksManTermsAndCondition/mock.json
sam local invoke WorksManExperience -e functions/WorksManExperience/mock.json
sam local invoke GetWorksmanAccountRegistartionStatusA28FB6DA -e functions/GetWorksmanAccountRegistartionStatus/mock.json
sam local invoke GetWorkmanDetails839D982B -e functions/GetWorksmanDetails/mock.json
sam local invoke UpdateWorksmanDetail764C9F8C -e functions/UpdateWorksmanDetails/mock.json
sam local invoke UserPostCodesEC5B0AD7 -e functions/UserPostCodes/mock.json
sam local invoke GetAllPostcodes029D20CC -e functions/GetAllPostcodes/mock.json
sam local invoke DeletePostcodes16F8A0A6 -e functions/DeletePostcodes/mock.json
sam local invoke WorksmnaScheduletcodes517FF821 -e functions/WorksmnaSchedule/mock.json
sam local invoke DeleteWorkmanSchedule22944F3C -e functions/DeleteWorkmanSchedule/mock.json
sam local invoke GetWorksmanScheduleC62DDBF7 -e functions/GetWorksmanSchedules/mock.json
sam local invoke GetWorksmanjobsC1DF3F8D -e functions/GetWorksmanjobs/mock.json
sam local invoke WorksmanjobsCreate9C217260 -e functions/WorksmanjobsCreate/mock.json
sam local invoke CreateBankDetailsEF6B9549 -e functions/CreateBankDetails/mock.json
sam local invoke GetBankDetails125327D9 -e functions/GetBankDetails/mock.json
sam local invoke CreateMessages23E7B181 -e functions/CreateMessages/mock.json
sam local invoke GetMessagesEBEDDDD2 -e functions/GetMessages/mock.json
sam local invoke GetJobsE878805E -e functions/GetJobsTable/mock.json
sam local invoke GetPaymentDetailsE3A0032F -e functions/GetPaymentDetails/mock.json
sam local invoke CreatePaymentHistoryDetails29607F15 -e functions/CreatePaymentHistoryDetails/mock.json
sam local invoke GetPaymentHistoryDetails96306007 -e functions/CreatePaymentHistoryDetails/mock.json

<!-- customer table -->
sam local invoke CreateCustomerTable11E80E27 -e functions/CreateCustomerTable/mock.json
sam local invoke CreateCustomerAddressC1EA6BF7 -e functions/CreateCustomerAddress/mock.json

