import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetBankDetailsLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetBankDetails"),
      functionName: "GetBankDetailsFun",
      handler: "index.GetBankDetailsHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };