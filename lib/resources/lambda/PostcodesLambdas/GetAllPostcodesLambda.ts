import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetAllPostcodesLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetAllPostcodes"),
      functionName: "GetAllPostcodesFun",
      handler: "index.GetAllPostcodesHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };