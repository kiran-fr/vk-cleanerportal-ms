import { CfnOutput, Construct, Stage, StageProps } from '@aws-cdk/core';
import { CdkExampleStack } from './cdk-example-stack';

/**
 * Deployable unit of web service app
 */
export class CdkpipelinesDemoStage extends Stage {
  public readonly urlOutput: CfnOutput;
  
  constructor(scope: Construct, id: string, props?: StageProps) {
    super(scope, id, props);

    const service = new CdkExampleStack(this, 'Environment');
    
    // Expose CdkpipelinesDemoStack's output one level higher
    this.urlOutput = service.urlOutput;
  }
}