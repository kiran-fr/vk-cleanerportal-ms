import * as apigateway from "@aws-cdk/aws-apigateway"
import { JsonSchemaType, JsonSchemaVersion } from "@aws-cdk/aws-apigateway";
import { ApiGateWayResponseMethod } from "../../../constants/ApiGatewayConstant";
import { postresponseMethods, responseMethods } from "./ResponseModel";


// Works man terms and condition api gateway
export const WorksmanTermsAndConditionsApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const WorksmanTermsAndConditions = api.root.addResource('WorksmanTermsAndConditions');

  const WorksmanTermsAndConditionsModel: apigateway.Model = api.addModel('WorksmanTermsAndConditionsModel', {
    schema: {
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        worksman_id: {
          type: apigateway.JsonSchemaType.STRING
        },
        isWatched_howVrishkar_Works: {
          type: apigateway.JsonSchemaType.STRING
        },
        isUnderstand_Worksman_Will_SelfEmployeed: {
          type: apigateway.JsonSchemaType.STRING
        },
        isUnderstand_Vrishkar_isnot_responsible: {
          type: apigateway.JsonSchemaType.STRING
        }
      },
      required: ['worksman_id']
    }
  });

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.Authorization': 'method.request.header.Authorization'


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,

    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify("$util.escapeJavaScript($input.body)")
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
          'application/json': JSON.stringify({ state: 'ok', data: '$util.escapeJavaScript($input.body)' })
        },
        responseParameters: {
          // We can map response parameters
          // - Destination parameters (the key) are the response parameters (used in mappings)
          // - Source parameters (the value) are the integration response parameters or expressions
          'method.response.header.Content-Type': "'application/json'",
          'method.response.header.Access-Control-Allow-Origin': "'http://localhost:3000'",
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

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
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

        }
      }
    ]
  });



  WorksmanTermsAndConditions.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      // 'method.request.querystring.worksmanId': true,
      'method.request.header.Authorization': true
    },
    requestModels: {
      'application/json': WorksmanTermsAndConditionsModel
    },

    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'post-WorksmanTermsAndConditions',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: postresponseMethods(api, "RespWorksmanTermsAndConditionsMethod", "ErrorpWorksmanTermsAndConditionsMethod")
  });
}


export const worksmanExperienceApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const worksmanExperienceapi = api.root.addResource('worksmanExperienceapi');

  const worksmanExperienceModel: apigateway.Model = api.addModel('worksmanExperienceModel', {
    schema: {
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        worksman_id: {
          type: apigateway.JsonSchemaType.STRING
        },
        years_of_cleaning_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_house_cleaning_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_deep_cleaning_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_office_cleaning_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_oven_cleaning_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_gardening_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_building_cleaning_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_hotel_cleaning_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_hospital_cleaning_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_retail_cleaning_exp: {
          type: apigateway.JsonSchemaType.STRING
        },
        other_cleaning: {
          type: apigateway.JsonSchemaType.STRING
        }
      },
      // required: ['worksman_id']
    }
  });

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.Authorization': 'method.request.header.Authorization'


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,

    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify('$util.escapeJavaScript($input.body)')
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
          'application/json': JSON.stringify({ state: 'ok', data: '$util.escapeJavaScript($input.body)' })
        },
        responseParameters: {
          // We can map response parameters
          // - Destination parameters (the key) are the response parameters (used in mappings)
          // - Source parameters (the value) are the integration response parameters or expressions
          'method.response.header.Content-Type': "'application/json'",
          'method.response.header.Access-Control-Allow-Origin': "'http://localhost:3000'",
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

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
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

        }
      }
    ]
  });



  worksmanExperienceapi.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      // 'method.request.querystring.worksmanId': true,
      'method.request.header.Authorization': true
    },
    requestModels: {
      'application/json': worksmanExperienceModel
    },

    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'post-worksmanExperience',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: postresponseMethods(api, "RespworksmanExperienceMethods", "ErrorpworksmanExperienceMethods")
  });
}

export const PostUserApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const GetTestUser = api.root.addResource('PostTestUser');

  const userModel: apigateway.Model = api.addModel('UserModel', {
    schema: {
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        userId: {
          type: apigateway.JsonSchemaType.STRING
        },
        name: {
          type: apigateway.JsonSchemaType.STRING
        }
      },
      required: ['userId']
    }
  });

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.Authorization': 'method.request.header.Authorization'


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,

    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify({
        worksmanId: "$util.escapeJavaScript($input.body)"

      })
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
          'application/json': JSON.stringify({ state: 'ok', data: '$util.escapeJavaScript($input.body)' })
        },
        responseParameters: {
          // We can map response parameters
          // - Destination parameters (the key) are the response parameters (used in mappings)
          // - Source parameters (the value) are the integration response parameters or expressions
          'method.response.header.Content-Type': "'application/json'",
          'method.response.header.Access-Control-Allow-Origin': "'http://localhost:3000'",
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

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
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

        }
      }
    ]
  });



  GetTestUser.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      // 'method.request.querystring.worksmanId': true,
      'method.request.header.Authorization': true
    },
    requestModels: {
      'application/json': userModel
    },

    // we can set request validator options like below
    // requestValidatorOptions: {
    //   // requestValidatorName: 'requestValidatorName',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: postresponseMethods(api, "resGetTestUser", "errorGetTestUser")
  });
}


// GET METHODS
// GET ALL MOBILE NUMBER API GATEWAY
export const getAllMobileNumbersApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const getAllMobileNumber = api.root.addResource('getAllMobileNumbereApiGateway');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      // 'integration.request.header.worksmanIdHeader': 'method.request.header.worksmanIdHeader',


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,
    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify({
        worksmanId: "$util.escapeJavaScript($input.params('worksmanId'))",
        // worksmanIdHeader: "$util.escapeJavaScript($input.params('worksmanIdHeader'))"
      })
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
          'application/json': JSON.stringify({ state: 'ok', data: '$util.escapeJavaScript($input.body)' })
        },
        responseParameters: {
          // We can map response parameters
          // - Destination parameters (the key) are the response parameters (used in mappings)
          // - Source parameters (the value) are the integration response parameters or expressions
          'method.response.header.Content-Type': "'application/json'",
          'method.response.header.Access-Control-Allow-Origin': "'http://localhost:3000'",
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

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
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

        }
      }
    ]
  });



  getAllMobileNumber.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.querystring.worksmanId': true,
      // 'method.request.header.worksmanIdHeader': true


    },
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, "getAllMobileNumber", "getAllMobileNumberError")
  });
}

export const GetWorksmanAccountRegistartionStatusApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const GetWorksmanAccountRegistartionStatus = api.root.addResource('GetWorksmanAccountRegistartionStatusApi');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.worksmanIdHeader': 'method.request.header.worksmanIdHeader',
      'integration.request.header.email': 'method.request.header.email'


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,
    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify({
        worksmanId: "$util.escapeJavaScript($input.params('worksmanId'))",
        worksmanIdHeader: "$util.escapeJavaScript($input.params('worksmanIdHeader'))",
        email: "$util.escapeJavaScript($input.params('email'))",
      })
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
          'application/json': JSON.stringify({ state: 'ok', data: '$util.escapeJavaScript($input.body)' })
        },
        responseParameters: {
          // We can map response parameters
          // - Destination parameters (the key) are the response parameters (used in mappings)
          // - Source parameters (the value) are the integration response parameters or expressions
          'method.response.header.Content-Type': "'application/json'",
          'method.response.header.Access-Control-Allow-Origin': "'http://localhost:3000'",
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

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
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

        }
      }
    ]
  });



  GetWorksmanAccountRegistartionStatus.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.querystring.worksmanId': true,
      'method.request.header.worksmanIdHeader': true,
      'method.request.header.email': true


    },
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, 'WorkmanStatusSuccess', "WorkmanStatusError")
  });
}


export const GetWorkmanDetailsApiGateway = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const GetWorkmanDetails = api.root.addResource('GetWorkmanDetailsApi');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.worksmanIdHeader': 'method.request.header.worksmanIdHeader',
      'integration.request.header.worksman_id': 'method.request.header.worksman_id'


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,
    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify({
        worksmanId: "$util.escapeJavaScript($input.params('worksmanId'))",
        worksmanIdHeader: "$util.escapeJavaScript($input.params('worksmanIdHeader'))",
        worksman_id: "$util.escapeJavaScript($input.params('worksman_id'))"
      })
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
          'application/json': JSON.stringify({ state: 'ok', data: '$util.escapeJavaScript($input.body)' })
        },
        responseParameters: {
          // We can map response parameters
          // - Destination parameters (the key) are the response parameters (used in mappings)
          // - Source parameters (the value) are the integration response parameters or expressions
          'method.response.header.Content-Type': "'application/json'",
          'method.response.header.Access-Control-Allow-Origin': "'http://localhost:3000'",
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

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
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

        }
      }
    ]
  });



  GetWorkmanDetails.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.querystring.worksmanId': true,
      'method.request.header.worksmanIdHeader': true,
      'method.request.header.worksman_id': true
    },
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, 'GetWorkmanDetailsucees', "GetWorkmanDetailsError")
  });
}

export const UpdateWorksmanDetailsApi = (api: any, lambdaFunctionName: any, methodType: string) => {

  // 👇 add a /todos resource
  const UpdateWorksmanDetails = api.root.addResource('UpdateWorksmanDetailsApi');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.worksmanIdHeader': 'method.request.header.worksmanIdHeader',
      'integration.request.header.email': 'method.request.header.email'


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,
    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify({
        worksmanId: "$util.escapeJavaScript($input.params('worksmanId'))",
        worksmanIdHeader: "$util.escapeJavaScript($input.params('worksmanIdHeader'))",
        email: "$util.escapeJavaScript($input.params('email'))",
      })
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
          'application/json': JSON.stringify({ state: 'ok', data: '$util.escapeJavaScript($input.body)' })
        },
        responseParameters: {
          // We can map response parameters
          // - Destination parameters (the key) are the response parameters (used in mappings)
          // - Source parameters (the value) are the integration response parameters or expressions
          'method.response.header.Content-Type': "'application/json'",
          'method.response.header.Access-Control-Allow-Origin': "'http://localhost:3000'",
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

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
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

        }
      }
    ]
  });



  UpdateWorksmanDetails.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.querystring.worksmanId': true,
      'method.request.header.worksmanIdHeader': true,
      'method.request.header.email': true


    },
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, 'UpdateWorksmanDetailssucees', "UpdateWorksmanDetailsError")
  });
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
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.worksmanIdHeader': 'method.request.header.worksmanIdHeader'


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,
    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify({
        worksmanId: "$util.escapeJavaScript($input.params('worksmanId'))",
        worksmanIdHeader: "$util.escapeJavaScript($input.params('worksmanIdHeader'))"
      })
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
          'application/json': JSON.stringify({ state: 'ok', data: '$util.escapeJavaScript($input.body)' })
        },
        responseParameters: {
          // We can map response parameters
          // - Destination parameters (the key) are the response parameters (used in mappings)
          // - Source parameters (the value) are the integration response parameters or expressions
          'method.response.header.Content-Type': "'application/json'",
          'method.response.header.Access-Control-Allow-Origin': "'http://localhost:3000'",
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

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
          'method.response.header.Access-Control-Allow-Credentials': "'true'",
          'method.response.header.Access-Control-Allow-Headers': "'*'"

        }
      }
    ]
  });



  GetTestUser.addMethod('GET', integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.querystring.worksmanId': true,
      'method.request.header.worksmanIdHeader': true


    },
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, "GetTestUseResp", "GetTestUserError")
  });
}

