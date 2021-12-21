import * as cdk from '@aws-cdk/core';
import * as lambda from '@aws-cdk/aws-lambda';
export declare const UserRegistrationLambda: () => {
    code: lambda.AssetCode;
    functionName: string;
    handler: string;
    memorySize: number;
    runtime: lambda.Runtime;
    timeout: cdk.Duration;
};
