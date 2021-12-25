export const ApigatewayDataConstants = () => {
return {
    description: 'User Registration api gateway',
    deployOptions: {
      stageName: 'dev',
    },
    // 👇 enable CORS
    defaultCorsPreflightOptions: {
      allowHeaders: [
        'Content-Type',
        'X-Amz-Date',
        'Authorization',
        'X-Api-Key',
      ],
      allowMethods: ['OPTIONS', 'GET', 'POST', 'PUT', 'PATCH', 'DELETE'],
      allowCredentials: true,
      allowOrigins: ['http://localhost:3000'],
    },
  }
}