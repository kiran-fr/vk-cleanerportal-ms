import { UserPostCodesServices } from "./services/UserPostCodesServices"

exports.UserPostCodesHandler = async (event: any) => {
    try {
        const data = JSON.parse(event)
        await UserPostCodesServices(data)
        
        console.warn(data)
        return {
            statusCode: 200,
            headers: {},
            body: data
        }
    } catch (exception) {
        console.log(`UserPostCodesHandler Error 1 ${exception}`)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}