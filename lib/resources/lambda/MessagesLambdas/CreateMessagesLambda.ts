import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const CreateMessagesLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/CreateMessages"),
      functionName: "CreateMessagesFun",
      handler: "index.CreateMessagesHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };