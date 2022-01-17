export const ApigatewayDataConstants = (apigateway:any) => {
  return {
    description: 'User Registration api gateway',
    deployOptions: {
      stageName: 'dev',
    }
    // defaultCorsPreflightOptions: {
    //   allowOrigins: apigateway.Cors.ALL_ORIGINS,
    //   allowMethods: apigateway.Cors.ALL_METHODS // this is also the default
    // },
    // 👇 enable CORS
    
      // allowHeaders: [
      //   '*'
      // ],
      // allowMethods: ['*'],
      // allowCredentials: true,
      // allowOrigins: ['*']
    
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