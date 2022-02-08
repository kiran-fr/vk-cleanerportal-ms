import { DeletePostcodesService } from "./services/DeletePostcodesService"

exports.DeletePostcodesHandler = async (event: any) => {
    try {
        // const data = JSON.parse(event)
        console.log('worms mand id', event)
        await DeletePostcodesService(event)
        
        console.warn(event)
        return {
            statusCode: 200,
            headers: {},
            body: event
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