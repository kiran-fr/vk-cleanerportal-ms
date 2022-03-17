export const ApigatewayDataConstants = (apigateway: any) => {
  return {
    description: 'User Registration api gateway',
    deployOptions: {
      stageName: 'dev',
    },
    defaultCorsPreflightOptions: {
      allowOrigins: apigateway.Cors.ALL_ORIGINS,
      allowMethods: apigateway.Cors.ALL_METHODS, // this is also the default
      allowHeaders: [
        'Content-Type',
        'X-Amz-Date',
        'Authorization',
        'X-Api-Key',
        'worksmanIdHeader',
        'email',
        'worksman_id',
        'postcodes',
        'schedule_day',
        'schedule_time',
        'schedule_date',
        'user_id'
      ]
    }
  }
}


export const ApiGateWayResponseMethod = () => {
  return {
    integrationResponses: [
      {
        responseParameters: {
          'method.response.header.Access-Control-Allow-Origin': "'*'",
        },

        statusCode: '200',
      },
    ],
    proxy: false

  }
}