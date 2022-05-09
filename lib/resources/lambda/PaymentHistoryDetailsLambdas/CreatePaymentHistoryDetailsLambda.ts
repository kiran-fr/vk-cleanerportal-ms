import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const CreatePaymentHistoryDetailsLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/CreatePaymentHistoryDetails"),
      functionName: "CreatePaymentHistoryDetailsFun",
      handler: "index.CreatePaymentHistoryDetailsHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };
  