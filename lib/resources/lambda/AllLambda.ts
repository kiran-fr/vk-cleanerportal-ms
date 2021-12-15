
import * as lambda from "@aws-cdk/aws-lambda"
// import {} from "../../../function/services/singUp"

export const signUpLambda = () =>{
    return {
        code:lambda.Code.fromAsset('./function'),
        functionName:'signup',
        handler:'index.handler',
        memorySize:1024,
        runtime:lambda.Runtime.NODEJS_14_X
    }
}