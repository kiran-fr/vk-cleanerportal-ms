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
cdk synth --no-staging > template.yaml 
sam local invoke getcustomer --no-event
sam local invoke UserRegistration -e  functions/UserRegistration/mock.json
sam local invoke WorksManTermsAndCondition66F1F295 -e functions/WorksManTermsAndCondition/mock.json
sam local invoke WorksManExperience -e functions/WorksManExperience/mock.json

