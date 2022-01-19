import * as apigateway from "@aws-cdk/aws-apigateway"

const successResponseModel = (api:any) => {
  return api.addModel('ResponseModel', {
    contentType: 'application/json',
    modelName: 'ResponseModel',
    schema: {
      schema: apigateway.JsonSchemaVersion.DRAFT4,
      title: 'pollResponse',
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        state: { type: apigateway.JsonSchemaType.STRING },
        greeting: { type: apigateway.JsonSchemaType.STRING }
      }
    }
  });
}

const errorResponseModel = (api: any) => {
   return api.addModel('ErrorResponseModel', {
    contentType: 'application/json',
    modelName: 'ErrorResponseModel',
    schema: {
      schema: apigateway.JsonSchemaVersion.DRAFT4,
      title: 'errorResponse',
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        state: { type: apigateway.JsonSchemaType.STRING },
        message: { type: apigateway.JsonSchemaType.STRING }
      }
    }
  });
}

export const responseMethods = (api: any) => {
    return [
        {
          // Successful response from the integration
          statusCode: '200',
          // Define what parameters are allowed or not
          responseParameters: {
            'method.response.header.Content-Type': true,
            'method.response.header.Access-Control-Allow-Origin': true,
            'method.response.header.Access-Control-Allow-Credentials': true,
            'method.response.header.Access-Control-Allow-Headers': true
          },
          // Validate the schema on the response
          responseModels: {
            'application/json': successResponseModel(api)
          }
        },
        {
          // Same thing for the error responses
          statusCode: '400',
          responseParameters: {
            'method.response.header.Content-Type': true,
            'method.response.header.Access-Control-Allow-Origin': true,
            'method.response.header.Access-Control-Allow-Credentials': true,
            'method.response.header.Access-Control-Allow-Headers': true
          },
          responseModels: {
            'application/json': errorResponseModel(api)
          }
        }
      ]
}