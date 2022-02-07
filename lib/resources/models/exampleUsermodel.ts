
import * as apigateway from "@aws-cdk/aws-apigateway"
import { JsonSchemaType, JsonSchemaVersion } from "@aws-cdk/aws-apigateway";

export const userModel =(api:any) => {
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
    return userModel;
}