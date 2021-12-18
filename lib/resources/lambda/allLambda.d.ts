import * as lambda from '@aws-cdk/aws-lambda';
export declare const UserRegistrationLambda: () => {
    code: lambda.AssetCode;
    functionName: string;
    handler: string;
    memorySize: number;
    runtime: lambda.Runtime;
};
export declare const UserEmailConfirmLambda: () => {
    code: lambda.AssetCode;
    function: string;
    handler: string;
    memorySize: number;
    runtime: lambda.Runtime;
};
