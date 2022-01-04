import * as apigateway from "@aws-cdk/aws-apigateway"
import {  ApiGateWayResponseMethod } from "../../../constants/ApiGatewayConstant";


// Works man terms and condition api gateway
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

// works man experience api gateway
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