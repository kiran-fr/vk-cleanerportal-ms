import * as apigateway from "@aws-cdk/aws-apigateway"
import { postresponseMethods, responseMethods } from "./ResponseModel";


// Works man terms and condition api gateway
// POST METHODS
export const WorksmanTermsAndConditionsApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

  // 👇 add a /todos resource
  const WorksmanTermsAndConditions = api.root.addResource('WorksmanTermsAndConditionsApi');

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
      // 'integration.request.header.Authorization': 'method.request.header.Authorization'


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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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
      // 'method.request.header.Authorization': true
    },
    requestModels: {
      'application/json': WorksmanTermsAndConditionsModel
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'post-worksmanExperience',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: postresponseMethods(api, "ResWorksmanTermsAndConditions", "ErrorWorksmanTermsAndConditions")
  });
}
export const worksmanExperienceApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

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
        Have_end_of_tendency: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_hotel_cleaning: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_house_cleaning: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_hospital_cleaning: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_office_cleaning: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_other_cleaning: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_Right_to_Work: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_UK_BankAccount: {
          type: apigateway.JsonSchemaType.STRING
        },
        Have_Criminal_Records: {
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
      // 'integration.request.header.Authorization': 'method.request.header.Authorization'


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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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
      // 'method.request.header.Authorization': true
    },
    requestModels: {
      'application/json': worksmanExperienceModel
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'post-worksmanExperience',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: postresponseMethods(api, "RespworksmanExperienceMethods", "ErrorpworksmanExperienceMethods")
  });
}
export const PostUserApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

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
      // 'integration.request.header.Authorization': 'method.request.header.Authorization'


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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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
      // 'method.request.header.Authorization': true
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
export const WorksmnaScheduleApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

  // 👇 add a todos resource
  const PostWorksmnaSchedule = api.root.addResource('PostWorksmnaScheduleApi');

  const PostWorksmnaScheduleModel: apigateway.Model = api.addModel('PostWorksmnaScheduleModel', {
    schema: {
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        worksman_id: {
          type: apigateway.JsonSchemaType.STRING
        },
        schedule_day: {
          type: apigateway.JsonSchemaType.STRING
        },
        schedule_time: {
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
      // 'integration.request.header.Authorization': 'method.request.header.Authorization'


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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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


  PostWorksmnaSchedule.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      // 'method.request.querystring.worksmanId': true,
      // 'method.request.header.Authorization': true
    },
    requestModels: {
      'application/json': PostWorksmnaScheduleModel
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   // requestValidatorName: 'requestValidatorName',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: postresponseMethods(api, "PostWorksmnaScheduleRes", "PostWorksmnaScheduleError")
  });
}
export const UserPostCodesApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

  // 👇 add a todos resource
  const UserPostCodes = api.root.addResource('UserPostCodesApi');

  const UserPostCodesModel: apigateway.Model = api.addModel('UserPostCodesModel', {
    schema: {
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        worksman_id: {
          type: apigateway.JsonSchemaType.STRING
        },
        postcodes: {
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
      // 'integration.request.header.Authorization': 'method.request.header.Authorization'


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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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

  UserPostCodes.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      // 'method.request.querystring.worksmanId': true,
      // 'method.request.header.Authorization': true
    },
    requestModels: {
      'application/json': UserPostCodesModel
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'requestValidatorName',
    //   validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: postresponseMethods(api, "UserPostCodesResponse", "UserPostCodesError")
  });
}
export const WorksmanjobsCreateApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

  // 👇 add a todos resource
  const WorksmanjobsCreate = api.root.addResource('WorksmanjobsCreateApi');

  const WorksmanjobsCreateModel: apigateway.Model = api.addModel('WorksmanjobsCreateModel', {
    schema: {
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        worksman_id: {
          type: apigateway.JsonSchemaType.STRING
        },
        job_title: {
          type: apigateway.JsonSchemaType.STRING
        },
        job_hours: {
          type: apigateway.JsonSchemaType.STRING
        },
        job_time: {
          type: apigateway.JsonSchemaType.STRING
        },
        job_date: {
          type: apigateway.JsonSchemaType.STRING
        },
        job_month: {
          type: apigateway.JsonSchemaType.STRING
        },
        job_year: {
          type: apigateway.JsonSchemaType.STRING
        },
        job_status: {
          type: apigateway.JsonSchemaType.STRING
        },
        customer_reviews: {
          type: apigateway.JsonSchemaType.STRING
        },
        customer_ratings: {
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
      // 'integration.request.header.Authorization': 'method.request.header.Authorization'


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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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

  WorksmanjobsCreate.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      // 'method.request.querystring.worksmanId': true,
      // 'method.request.header.Authorization': true
    },
    requestModels: {
      'application/json': WorksmanjobsCreateModel
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'requestValidatorName',
    //   validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: postresponseMethods(api, " WorksmanjobsCreateResponse", " WorksmanjobsCreateError")
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


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,
    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify({
        worksmanId: "$util.escapeJavaScript($input.params('worksmanId'))"
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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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
      'method.request.querystring.worksmanId': true
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

export const GetWorksmanAccountRegistartionStatusApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

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
      // 'integration.request.header.email': 'method.request.header.email',
      // 'integration.request.header.Authorization': 'method.request.header.Authorization'
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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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
      // 'method.request.header.email': true,
      // 'method.request.header.Authorization': true,
      'method.request.querystring.worksmanId': true,
      'method.request.header.worksmanIdHeader': true,
      'method.request.header.email': true

    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, 'WorkmanStatusSuccess', "WorkmanStatusError")
  });
}
export const GetWorkmanDetailsApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, 'GetWorkmanDetailsucees', "GetWorkmanDetailsError")
  });
}

export const GetTestUserApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, "GetTestUseResp", "GetTestUserError")
  });
}
export const GetAllPostcodesApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

  // 👇 add a /todos resource
  const GetAllPostcodes = api.root.addResource('GetAllPostcodesApi');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      // 'integration.request.header.worksmanIdHeader': 'method.request.header.worksmanIdHeader',
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
        // worksmanId: "$util.escapeJavaScript($input.params('worksmanId'))",
        // worksmanIdHeader: "$util.escapeJavaScript($input.params('worksmanIdHeader'))",
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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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

  GetAllPostcodes.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      // 'method.request.querystring.worksmanId': true,
      // 'method.request.header.worksmanIdHeader': true,
      'method.request.header.worksman_id': true,
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, "GetAllPostcodesResp", "GetAllPostcodesError")
  });
}
export const GetWorksmanScheduleApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

  // 👇 add a /todos resource
  const GetWorksmanSchedule = api.root.addResource('GetWorksmanScheduleApi');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.worksman_id': 'method.request.header.worksman_id',
      'integration.request.header.schedule_day': 'method.request.header.schedule_day',
      'integration.request.header.schedule_time': 'method.request.header.schedule_time',


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
        worksman_id: "$util.escapeJavaScript($input.params('worksman_id'))",
        schedule_day: "$util.escapeJavaScript($input.params('schedule_day'))",
        schedule_time: "$util.escapeJavaScript($input.params('schedule_time'))"
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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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

  GetWorksmanSchedule.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.querystring.worksmanId': true,
      'method.request.header.worksman_id': true,
      'method.request.header.schedule_day': true,
      'method.request.header.schedule_time': true,
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, "GetWorksmanScheduleResp", "GetWorksmanScheduleError")
  });
}
export const GetWorksmanjobsApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {
  // GetWorksmanjobsLambdaApi
  // 👇 add a /todos resource
  const GetWorksmanjobs = api.root.addResource('GetWorksmanjobsApi');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      'integration.request.header.worksman_id': 'method.request.header.worksman_id',


      // method.request.header.PARAM_NAME
    },
    allowTestInvoke: true,
    requestTemplates: {
      // 'application/json': JSON.stringify({ action: 'sayHello', pollId: "$util.escapeJavaScript($input.params('who'))" })
      //   // You can define a mapping that will build a payload for your integration, based
      //   //  on the integration parameters that you have specified
      //   // Check: https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-mapping-template-reference.html
      'application/json': JSON.stringify({
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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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

  GetWorksmanjobs.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.header.worksman_id': true,
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, "GetWorksmanjobsResp", "GetWorksmanjobsError")
  });
}


// DELETE METHODS
export const DeletePostcodesApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

  // 👇 add a /todos resource
  const DeletePostcodes = api.root.addResource('DeletePostcodesApi');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.worksman_id': 'method.request.header.worksman_id',
      'integration.request.header.postcodes': 'method.request.header.postcodes'

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
        postcodes: "$util.escapeJavaScript($input.params('postcodes'))",
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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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

  DeletePostcodes.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.querystring.worksmanId': true,
      'method.request.header.postcodes': true,
      'method.request.header.worksman_id': true,
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, "DeletePostcodesResp", "DeletePostcodesError")
  });
}
export const DeleteWorkmanScheduleApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

  // 👇 add a /todos resource
  const DeleteWorkmanSchedule = api.root.addResource('DeleteWorkmanScheduleApi');

  const integration = new apigateway.LambdaIntegration(lambdaFunctionName, {
    proxy: false,
    requestParameters: {
      // You can define mapping parameters from your method to your integration
      // - Destination parameters (the key) are the integration parameters (used in mappings)
      // - Source parameters (the value) are the source request parameters or expressions
      // @see: https://docs.aws.amazon.com/apigateway/latest/developerguide/request-response-data-mappings.html
      // 'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId'
      'integration.request.querystring.worksmanId': 'method.request.querystring.worksmanId',
      'integration.request.header.worksman_id': 'method.request.header.worksman_id',
      'integration.request.header.schedule_day': 'method.request.header.schedule_day',
      'integration.request.header.schedule_time': 'method.request.header.schedule_time',
      'integration.request.header.schedule_date': 'method.request.header.schedule_date'


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
        worksman_id: "$util.escapeJavaScript($input.params('worksman_id'))",
        schedule_day: "$util.escapeJavaScript($input.params('schedule_day'))",
        schedule_time: "$util.escapeJavaScript($input.params('schedule_time'))",
        schedule_date: "$util.escapeJavaScript($input.params('schedule_date'))"
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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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

  DeleteWorkmanSchedule.addMethod(methodType, integration, {
    // We can mark the parameters as required
    requestParameters: {
      'method.request.querystring.worksmanId': true,
      'method.request.header.worksman_id': true,
      'method.request.header.schedule_day': true,
      'method.request.header.schedule_time': true,
      'method.request.header.schedule_date': true
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   requestValidatorName: 'parameters-validator',
    //   // validateRequestBody: true,
    //   validateRequestParameters: true
    // },
    methodResponses: responseMethods(api, "DeleteWorkmanScheduleResp", "DeleteWorkmanScheduleError")
  });
}


// UPDATE METHOD
export const UpdateWorksmanDetailsApiGateway = (api: any, lambdaFunctionName: any, methodType: string, authorizations: any) => {

  // 👇 add a /todos resource
  const UpdateWorksmanDetails = api.root.addResource('UpdateWorksmanDetailsApi');

  const UpdateWorksmanDetailsModel: apigateway.Model = api.addModel('UpdateWorksmanDetailsModel', {
    schema: {
      type: apigateway.JsonSchemaType.OBJECT,
      properties: {
        worksman_id: {
          type: apigateway.JsonSchemaType.STRING
        },
        email: {
          type: apigateway.JsonSchemaType.STRING
        },
        phone: {
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
          'method.response.header.Access-Control-Allow-Origin': "'*'",
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
      // 'method.request.querystring.worksmanId': true,
    },
    requestModels: {
      'application/json': UpdateWorksmanDetailsModel
    },
    authorizer: authorizations,
    authorizationType: apigateway.AuthorizationType.COGNITO,
    // we can set request validator options like below
    // requestValidatorOptions: {
    //   // requestValidatorName: 'requestValidatorName',
    //   // validateRequestBody: true,
    //   // validateRequestParameters: true
    // },
    methodResponses: postresponseMethods(api, "UpdateWorksmanDetailsRes", "UpdateWorksmanDetailsError")
  });
}




