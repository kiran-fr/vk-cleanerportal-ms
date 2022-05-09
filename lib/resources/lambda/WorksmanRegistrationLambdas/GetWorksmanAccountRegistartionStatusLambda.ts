import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetWorksmanAccountRegistartionStatusLambda = () => {
    return {
      code: lambda.Code.fromAsset(
        "./functions/GetWorksmanAccountRegistartionStatus"
      ),
      functionName: "GetWorksmanAccountRegistartionStatus",
      handler: "index.GetWorksmanAccountRegistartionStatusHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };