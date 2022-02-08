import { UserPostCodesServices } from "./services/UserPostCodesServices"

exports.UserPostCodesHandler = async (event: any) => {
    try {
        const data = JSON.parse(event)
        console.log('worms mand id', data)
        await UserPostCodesServices(data)
        
        console.warn(data)
        return {
            statusCode: 200,
            headers: {},
            body: data
        }
    } catch (exception) {
        console.log(`work man experience handler Error 1 ${exception}`)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}