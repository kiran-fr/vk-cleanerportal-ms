import { Construct, SecretValue, Stack, StackProps } from '@aws-cdk/core';
import { CodePipeline, CodePipelineSource, ShellStep } from "@aws-cdk/pipelines";
import { CdkpipelinesDemoStage } from './cdkpipelines-demo-stage'

/**
 * The stack that defines the application pipeline
 */
export class CdkpipelinesDemoPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      // The pipeline name
      pipelineName: 'vkcleanerdevportalPipeline',

       // How it will be built and synthesized
       synth: new ShellStep('Synth', {
       
      input: CodePipelineSource.connection('vrishkarservices/VK-CLEANERPORTAL-MS', 'master', {
             connectionArn: 'arn:aws:codestar-connections:us-east-1:278937816757:connection/043c78f4-9d75-423f-987c-62559867adbf', // Created using the AWS console
      }),
      // Install dependencies, build and run cdk synth
      commands: [
           'npm i',
           'npm run build',
           'npx cdk synth'
         ],
      }),
    });

    // This is where we add the application stages
pipeline.addStage(new CdkpipelinesDemoStage(this, 'vkcleanerdevportalms', {
  env: { account: '278937816757', region: 'us-east-1' }
}));

  }
}

