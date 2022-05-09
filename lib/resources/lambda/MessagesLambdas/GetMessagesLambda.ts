import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetMessagesLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetMessages"),
      functionName: "GetMessagesFun",
      handler: "index.GetMessagesHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };