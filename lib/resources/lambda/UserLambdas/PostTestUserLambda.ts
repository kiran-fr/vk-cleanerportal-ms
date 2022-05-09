
import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const PostTestUserLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetPostTestUser"),
      functionName: "PostTestUser",
      handler: "index.handler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };