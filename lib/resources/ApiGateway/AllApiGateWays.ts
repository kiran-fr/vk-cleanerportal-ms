import * as apigateway from "@aws-cdk/aws-apigateway"
import {  ApiGateWayResponseMethod } from "../../../constants/ApiGatewayConstant";

export const getCustomerApiGateway = (api: any,lambdaFunctionName:any, methodType:string) => {
  

    // 👇 add a /todos resource
    const getcustomer = api.root.addResource('getcustomer');

    // 👇 integrate GET /todos with getTodosLambda
    getcustomer.addMethod(
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

export const WorksmanTermsAndConditionsApiGateway = (api: any,lambdaFunctionName:any, methodType:string) => {
  

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

export const worksmanExperienceApiGateway = (api: any,lambdaFunctionName:any, methodType:string) => {
  

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

export const worksmanEligibilityApiGateway = (api: any,lambdaFunctionName:any, methodType:string) => {
  

    // 👇 add a /todos resource
    const worksmanEligibility = api.root.addResource('worksmanEligibility');

    // 👇 integrate GET /todos with getTodosLambda
    worksmanEligibility.addMethod(
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

export const WorksmanAddressApiGateway = (api: any,lambdaFunctionName:any, methodType:string) => {
  

    // 👇 add a /todos resource
    const WorksmanAddress = api.root.addResource('WorksmanAddress');

    // 👇 integrate GET /todos with getTodosLambda
    WorksmanAddress.addMethod(
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