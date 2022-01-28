import * as lambda from "@aws-cdk/aws-lambda";
export declare const signUpLambda: () => {
    code: lambda.AssetCode;
    functionName: string;
    handler: string;
    memorySize: number;
    runtime: lambda.Runtime;
};
