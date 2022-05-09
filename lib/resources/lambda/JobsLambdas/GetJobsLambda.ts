import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetJobsLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetJobsTable"),
      functionName: "GetJobsFun",
      handler: "index.GetJobsHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };