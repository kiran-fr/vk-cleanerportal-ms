#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { CdkExampleStack } from '../lib/cdk-example-stack';

const app = new cdk.App();
<<<<<<< HEAD
new CdkExampleStack(app, 'VrishkarServicesDevStack', {
    
=======
new CdkExampleStack(app, 'VrishkarServicesDevStackeast2', {
 
>>>>>>> 6f4c0ffdf4595db889e67a2f29141606ad223643
});
// VrishkarServicesDevStack