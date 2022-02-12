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
       
      input: CodePipelineSource.connection('vrishkarservices/VK-CLEANERPORTAL-MS', 'cdk-pipeline', {
             connectionArn: 'arn:aws:codestar-connections:us-east-2:278937816757:connection/5f9ea885-99d4-4039-933b-de7b4a16a1b9', // Created using the AWS console
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
  env: { account: '278937816757', region: 'us-east-2' }
}));

  }
}

