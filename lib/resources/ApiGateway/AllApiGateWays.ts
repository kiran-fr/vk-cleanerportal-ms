import * as apigateway from "@aws-cdk/aws-apigateway"
import { ApiGateWayResponseMethod } from "../../../constants/ApiGatewayConstant";
import {  responseMethods } from "./ResponseModel";


// Works man terms and condition api gateway
export const WorksmanTermsAndConditionsApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const WorksmanTermsAndConditions = api.root.addResource('WorksmanTermsAndConditions');

  // 👇 integrate GET /todos with getTodosLambda
  WorksmanTermsAndConditions.addMethod(
    methodType,
    new apigateway.LambdaIntegration(lambdaFunctionName,
      ApiGateWayResponseMethod()
    ),
    {
      methodResponses: [
        {
          statusCode: '200',
          responseParameters: {
            'method.response.header.Access-Control-Allow-Origin': true,
          },
        },
      ],
    }
  );
}

// works man experience api gateway
export const worksmanExperienceApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const worksmanExperience = api.root.addResource('worksmanExperience');

  // 👇 integrate GET /todos with getTodosLambda
  worksmanExperience.addMethod(
    methodType,
    new apigateway.LambdaIntegration(lambdaFunctionName,
      ApiGateWayResponseMethod()
    ),
    {
      methodResponses: [
        {
          statusCode: '200',
          responseParameters: {
            'method.response.header.Access-Control-Allow-Origin': true,
          },
        },
      ],
    }
  );
}


// Works man current step api gateway
export const GetWorksmanAccountRegistartionStatusApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const GetWorksmanAccountRegistartionStatus = api.root.addResource('GetWorksmanAccountRegistartionStatus');

  // 👇 integrate GET /todos with getTodosLambda
  GetWorksmanAccountRegistartionStatus.addMethod(
    methodType,
    new apigateway.LambdaIntegration(lambdaFunctionName,
      ApiGateWayResponseMethod()
    ),
    {
      methodResponses: [
        {
          statusCode: '200',
          responseParameters: {
            'method.response.header.Access-Control-Allow-Origin': true,
          },
        },
      ],
    }
  );
}

export const GetTestUserApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const GetTestUser = api.root.addResource('GetTestUser');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.who': 'method.request.querystring.who'
      'integration.request.querystring.who': 'method.request.querystring.who'
    },
    allowTestInvoke: true,
    requestTemplates: {
    //   // You can define a mapping that will build a payload for your integration, based
    //   //  on the integration parameters that you have specified
    //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
    },
    // This parameter defines the behavior of the engine is no suitable response template is found
    passthroughBehavior: apigateway.PassthroughBehavior.NEVER,
    integrationResponses: [
      {
        // Successful response from the Lambda function, no filter defined
        //  - the selectionPattern filter only tests the error message
        // We will set the response status code to 200
        statusCode: "200",
        responseTemplates: {
          // This template takes the "message" result from the Lambda function, and embeds it in a JSON response
          // Check https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
          'application/json': JSON.stringify({ state: 'ok', greeting: '$util.escapeJavaScript($input.body)' })
        },
        responseParameters: {
          // We can map response parameters
          // - Destination parameters (the key) are the response parameters (used in mappings)
          // - Source parameters (the value) are the integration response parameters or expressions
          'method.response.header.Content-Type': "'application/json'",
          'method.response.header.Access-Control-Allow-Origin': "'http://localhost:3000'",
          'method.response.header.Access-Control-Allow-Credentials': "'true'"
        }
      },
      {
        // For errors, we check if the error message is not empty, get the error data
        selectionPattern: '(\n|.)+',
        // We will set the response status code to 200
        statusCode: "400",
        responseTemplates: {
            'application/json': JSON.stringify({ state: 'error', message: "$util.escapeJavaScript($input.path('$.errorMessage'))" })
        },
        responseParameters: {
            'method.response.header.Content-Type': "'application/json'",
            'method.response.header.Access-Control-Allow-Origin': "'*'",
            'method.response.header.Access-Control-Allow-Credentials': "'true'"
        }
      }
    ]
  });

 

  GetTestUser.addMethod('GET', integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.querystring.who': true
    },
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'test-validator',
    //   validateRequestBody: true,
    //   validateRequestParameters: false
    // },
    methodResponses: responseMethods(api)
  });
  }