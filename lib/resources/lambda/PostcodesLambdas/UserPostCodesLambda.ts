import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const UserPostCodesLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/UserPostCodes"),
      functionName: "UserPostCodesFun",
      handler: "index.UserPostCodesHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };