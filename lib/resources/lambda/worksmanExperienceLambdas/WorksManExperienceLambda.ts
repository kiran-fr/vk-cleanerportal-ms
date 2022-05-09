import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const WorksManExperienceLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/WorksManExperience"),
      functionName: "WorksManExperience",
      handler: "index.WorksManExperienceHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };