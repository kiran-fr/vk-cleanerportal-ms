import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const CreateWorksmanScheduleLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/CreateWorksmanSchedule"),
      functionName: "CreateWorksmanScheduleFun",
      handler: "index.CreateWorksmanScheduleHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };