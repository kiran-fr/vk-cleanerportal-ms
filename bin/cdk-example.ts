#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkpipelinesDemoPipelineStack } from '../lib/cdkpipelines-demo-pipeline-stack';

const app = new cdk.App();
new CdkpipelinesDemoPipelineStack(app, 'VrishkarServicesDevStack', {
    env: { account: '278937816757', region: 'us-east-2' },
});
app.synth();