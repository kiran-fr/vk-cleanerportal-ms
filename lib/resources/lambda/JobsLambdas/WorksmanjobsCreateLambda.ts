import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const WorksmanjobsCreateLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/WorksmanjobsCreate"),
      functionName: "WorksmanjobsCreateFun",
      handler: "index.WorksmanjobsCreateHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };