"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApigatewayDataConstants = void 0;
exports.ApigatewayDataConstants = () => {
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
            allowOrigins: ['http://localhost:3000']
        },
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBpR2F0ZXdheUNvbnN0YW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiQXBpR2F0ZXdheUNvbnN0YW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEsdUJBQXVCLEdBQUcsR0FBRyxFQUFFO0lBQzVDLE9BQU87UUFDSCxXQUFXLEVBQUUsK0JBQStCO1FBQzVDLGFBQWEsRUFBRTtZQUNiLFNBQVMsRUFBRSxLQUFLO1NBQ2pCO1FBQ0QsaUJBQWlCO1FBQ2pCLDJCQUEyQixFQUFFO1lBQzNCLFlBQVksRUFBRTtnQkFDWixjQUFjO2dCQUNkLFlBQVk7Z0JBQ1osZUFBZTtnQkFDZixXQUFXO2FBQ1o7WUFDRCxZQUFZLEVBQUUsQ0FBQyxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFFBQVEsQ0FBQztZQUNsRSxnQkFBZ0IsRUFBRSxJQUFJO1lBQ3RCLFlBQVksRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3hDO0tBQ0YsQ0FBQTtBQUNILENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBBcGlnYXRld2F5RGF0YUNvbnN0YW50cyA9ICgpID0+IHtcbnJldHVybiB7XG4gICAgZGVzY3JpcHRpb246ICdVc2VyIFJlZ2lzdHJhdGlvbiBhcGkgZ2F0ZXdheScsXG4gICAgZGVwbG95T3B0aW9uczoge1xuICAgICAgc3RhZ2VOYW1lOiAnZGV2JyxcbiAgICB9LFxuICAgIC8vIPCfkYcgZW5hYmxlIENPUlNcbiAgICBkZWZhdWx0Q29yc1ByZWZsaWdodE9wdGlvbnM6IHtcbiAgICAgIGFsbG93SGVhZGVyczogW1xuICAgICAgICAnQ29udGVudC1UeXBlJyxcbiAgICAgICAgJ1gtQW16LURhdGUnLFxuICAgICAgICAnQXV0aG9yaXphdGlvbicsXG4gICAgICAgICdYLUFwaS1LZXknLFxuICAgICAgXSxcbiAgICAgIGFsbG93TWV0aG9kczogWydPUFRJT05TJywgJ0dFVCcsICdQT1NUJywgJ1BVVCcsICdQQVRDSCcsICdERUxFVEUnXSxcbiAgICAgIGFsbG93Q3JlZGVudGlhbHM6IHRydWUsXG4gICAgICBhbGxvd09yaWdpbnM6IFsnaHR0cDovL2xvY2FsaG9zdDozMDAwJ11cbiAgICB9LFxuICB9XG59Il19