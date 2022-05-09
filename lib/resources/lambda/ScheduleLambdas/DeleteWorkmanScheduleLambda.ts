import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const DeleteWorkmanScheduleLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/DeleteWorkmanSchedule"),
      functionName: "DeleteWorkmanScheduleFun",
      handler: "index.DeleteWorkmanScheduleHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };