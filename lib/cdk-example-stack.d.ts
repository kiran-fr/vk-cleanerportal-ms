import * as cdk from '@aws-cdk/core';
import * as sfn from "@aws-cdk/aws-stepfunctions";
export declare class CdkExampleStack extends cdk.Stack {
    Machine: sfn.StateMachine;
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps);
}
