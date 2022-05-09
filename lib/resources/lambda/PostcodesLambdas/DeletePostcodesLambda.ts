import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const DeletePostcodesLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/DeletePostcodes"),
      functionName: "DeletePostcodesFun",
      handler: "index.DeletePostcodesHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };