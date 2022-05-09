
import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetListOfJobsBasedOnMonthLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetListOfJobsBasedOnMonth"),
      functionName: "GetListOfJobsBasedOnMonthFun",
      handler: "index.GetListOfJobsBasedOnMonthHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };