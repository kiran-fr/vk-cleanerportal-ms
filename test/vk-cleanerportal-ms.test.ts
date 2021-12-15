import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import * as VkCleanerportalMs from '../lib/vk-cleanerportal-ms-stack';

test('SQS Queue and SNS Topic Created', () => {
  // const app = new cdk.App();
  // // WHEN
  // const stack = new VkCleanerportalMs.VkCleanerportalMsStack(app, 'SingUp');
  // // THEN

  // const template = Template.fromStack(stack);

  // template.hasResourceProperties('AWS::SQS::Queue', {
  //   VisibilityTimeout: 300
  // });
  // template.resourceCountIs('AWS::SNS::Topic', 1);
});
