import * as cdk from "@aws-cdk/core";
import * as lambda from "@aws-cdk/aws-lambda";

export const GetDistrictWisePostCodesLambda = () => {
    return {
      code: lambda.Code.fromAsset("./functions/GetDistrictWisePostCodes"),
      functionName: "GetDistrictWisePostCodesFun",
      handler: "index.GetDistrictWisePostCodesHandler",
      memorySize: 1024,
      runtime: lambda.Runtime.NODEJS_14_X,
      timeout: cdk.Duration.seconds(35),
    };
  };