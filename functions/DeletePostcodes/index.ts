import { DeletePostcodesService } from "./services/DeletePostcodesService"

exports.DeletePostcodesHandler = async (event: any) => {
    try {
        await DeletePostcodesService(event)        
        console.warn(event)
        return {
            statusCode: 200,
            headers: {},
            body: event
        }
    } catch (exception) {
        console.log(`DeletePostcodesHandler Error 1 ${exception}`)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}