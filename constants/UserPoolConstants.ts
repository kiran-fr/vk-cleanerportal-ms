import { HttpUserPoolAuthorizer } from '@aws-cdk/aws-apigatewayv2-authorizers';
import * as cognito from '@aws-cdk/aws-cognito'
import * as cdk from '@aws-cdk/core';
import * as apigateway from "@aws-cdk/aws-apigateway";

export const authorizer = (api:any,userPoolClient:any) => {
    return  {
        restApiId: api.restApiId,
        name: 'vk-clean-portal-2',
        type: "COGNITO_USER_POOLS",
  
        authorizerResultTtlInSeconds: 300,
        identitySource: 'method.request.header.Authorization',
        providerArns: ['arn:aws:cognito-idp:us-east-2:278937816757:userpool/us-east-2_snRnfRZ3a'],
    }
    
}