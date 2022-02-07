import * as apigateway from "@aws-cdk/aws-apigateway"

<<<<<<< HEAD
const successResponseModel = (api:any,success:any) => {
  return api.addModel(success, {
    contentType: 'application/json',
    modelName: success,
=======
const successResponseModel = (api: any, modelName: any, title: any) => {
  return api.addModel(modelName, {
    contentType: 'application/json',
    modelName,
>>>>>>> 6f4c0ffdf4595db889e67a2f29141606ad223643
    schema: {
      schema: apigateway.JsonSchemaVersion.DRAFT4,
      title: title,
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        state: { type: apigateway.JsonSchemaType.STRING },
        greeting: { type: apigateway.JsonSchemaType.STRING }
      }
    }
  });
}

<<<<<<< HEAD
const errorResponseModel = (api: any,error:any) => {
   return api.addModel(error, {
    contentType: 'application/json',
    modelName: error,
=======
const errorResponseModel = (api: any, modelName: any, title: any) => {
  return api.addModel(modelName, {
    contentType: 'application/json',
    modelName,
>>>>>>> 6f4c0ffdf4595db889e67a2f29141606ad223643
    schema: {
      schema: apigateway.JsonSchemaVersion.DRAFT4,
      title: title,
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        state: { type: apigateway.JsonSchemaType.STRING },
        message: { type: apigateway.JsonSchemaType.STRING }
      }
    }
  });
}

<<<<<<< HEAD
export const responseMethods = (api: any,success:any,error:any) => {
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
            'application/json': successResponseModel(api,success)
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
            'application/json': errorResponseModel(api,error)
          }
        }
      ]
}

export const postresponseMethods = (api: any,respModal:any,errorModal:any) => {
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
          'application/json': api.addModel(respModal, {
            contentType: 'application/json',
            modelName: respModal,
            schema: {
              schema: apigateway.JsonSchemaVersion.DRAFT4,
              title:respModal,
              type: apigateway.JsonSchemaType.OBJECT,
              properties: {
                state: { type: apigateway.JsonSchemaType.STRING },
                greeting: { type: apigateway.JsonSchemaType.STRING }
              }
            },
          })



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
          'application/json': api.addModel(errorModal, {
            contentType: 'application/json',
            modelName: errorModal,
            schema: {
              schema: apigateway.JsonSchemaVersion.DRAFT4,
              title: errorModal,
              type: apigateway.JsonSchemaType.OBJECT,
              properties: {
                state: { type: apigateway.JsonSchemaType.STRING },
                message: { type: apigateway.JsonSchemaType.STRING }
              }
            }
          })
        }
      }
    ]
}
=======
export const responseMethods = (api: any, sucessModelName: any, sucessTitle: any, errorModelName: any, errorTittle: any) => {
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
        'application/json': successResponseModel(api, sucessModelName, sucessTitle)
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
        'application/json': errorResponseModel(api, errorModelName, errorTittle)
      }
    }
  ]
}

>>>>>>> 6f4c0ffdf4595db889e67a2f29141606ad223643
