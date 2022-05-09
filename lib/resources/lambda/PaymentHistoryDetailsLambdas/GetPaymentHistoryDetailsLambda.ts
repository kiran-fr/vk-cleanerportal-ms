import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetPaymentHistoryDetailsLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetPaymentHistoryDetails"),
      functionName: "GetPaymentHistoryDetailsFun",
      handler: "index.GetPaymentHistoryDetailsHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };