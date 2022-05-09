import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetWorksmanSchedulesLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetWorksmanSchedules"),
      functionName: "GetWorksmanSchedulesFun",
      handler: "index.GetWorksmanSchedulesHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };