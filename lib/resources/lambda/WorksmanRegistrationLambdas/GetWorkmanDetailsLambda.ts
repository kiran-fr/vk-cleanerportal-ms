import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetWorkmanDetailsLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetWorksmanDetails"),
      functionName: "GetWorkmanDetailsFun",
      handler: "index.GetWorksmanDetailsHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };