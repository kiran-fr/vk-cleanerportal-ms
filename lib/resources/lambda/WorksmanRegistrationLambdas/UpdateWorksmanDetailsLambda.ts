import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const UpdateWorksmanDetailsLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/UpdateWorksmanDetails"),
      functionName: "UpdateWorksmanDetailsFun",
      handler: "index.UpdateWorksmanDetailsHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };