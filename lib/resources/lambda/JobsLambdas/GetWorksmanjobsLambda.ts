import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetWorksmanjobsLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetWorksmanjobs"),
      functionName: "GetWorksmanjobsFun",
      handler: "index.GetWorksmanjobsHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };