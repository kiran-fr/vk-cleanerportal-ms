import * as apigateway from "@aws-cdk/aws-apigateway"
import { postresponseMethods } from "../ResponseModel";

export const CreateJobsApiGateway = (
    api: any,
    lambdaFunctionName: any,
    methodType: string,
    authorizations: any
  ) => {
    // 👇 add a todos resource
    const CreateJobs = api.root.addResource("CreateJobsApi");
  
    const CreateJobsModel: apigateway.Model = api.addModel(
      "CreateJobsModel",
      {
        schema: {
          type: apigateway.JsonSchemaType.OBJECT,
          properties: {
            worksman_id: {
              type: apigateway.JsonSchemaType.STRING,
            },
            user_id: {
              type: apigateway.JsonSchemaType.STRING,
            },
            customer_name: {
              type: apigateway.JsonSchemaType.STRING,
            },
            job_title: {
              type: apigateway.JsonSchemaType.STRING,
            },
            job_hours: {
              type: apigateway.JsonSchemaType.STRING,
            },
            job_time: {
              type: apigateway.JsonSchemaType.STRING,
            },
            address: {
              type: apigateway.JsonSchemaType.STRING,
            },
            service: {
              type: apigateway.JsonSchemaType.STRING,
            },
            sub_services: {
              type: apigateway.JsonSchemaType.STRING,
            },
            job_status: {
              type: apigateway.JsonSchemaType.STRING,
            },
            payment_status: {
              type: apigateway.JsonSchemaType.STRING,
            },
            customer_reviews: {
              type: apigateway.JsonSchemaType.STRING,
            },
            customer_ratings: {
              type: apigateway.JsonSchemaType.STRING,
            },
          },
          required: ["worksman_id"],
        },
      }
    );
  
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
        "application/json": JSON.stringify("$util.escapeJavaScript($input.body)"),
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
            "application/json": JSON.stringify({
              state: "ok",
              data: "$util.escapeJavaScript($input.body)",
            }),
          },
          responseParameters: {
            // We can map response parameters
            // - Destination parameters (the key) are the response parameters (used in mappings)
            // - Source parameters (the value) are the integration response parameters or expressions
            "method.response.header.Content-Type": "'application/json'",
            "method.response.header.Access-Control-Allow-Origin": "'*'",
            "method.response.header.Access-Control-Allow-Credentials": "'true'",
            "method.response.header.Access-Control-Allow-Headers": "'*'",
          },
        },
        {
          // For errors, we check if the error message is not empty, get the error data
          selectionPattern: "(\n|.)+",
          // We will set the response status code to 200
          statusCode: "400",
          responseTemplates: {
            "application/json": JSON.stringify({
              state: "error",
              message: "$util.escapeJavaScript($input.path('$.errorMessage'))",
            }),
          },
          responseParameters: {
            "method.response.header.Content-Type": "'application/json'",
            "method.response.header.Access-Control-Allow-Origin": "'*'",
            "method.response.header.Access-Control-Allow-Credentials": "'true'",
            "method.response.header.Access-Control-Allow-Headers": "'*'",
          },
        },
      ],
    });
  
    CreateJobs.addMethod(methodType, integration, {
      // We can mark the parameters as required
      requestParameters: {
        // 'method.request.querystring.worksmanId': true,
        // 'method.request.header.Authorization': true
      },
      requestModels: {
        "application/json": CreateJobsModel,
      },
      authorizer: authorizations,
      authorizationType: apigateway.AuthorizationType.COGNITO,
      // we can set request validator options like below
      // requestValidatorOptions: {
      //   requestValidatorName: 'requestValidatorName',
      //   validateRequestBody: true,
      //   validateRequestParameters: true
      // },
      methodResponses: postresponseMethods(
        api,
        "CreateJobsResponse",
        "CreateJobsError"
      ),
    });
  };