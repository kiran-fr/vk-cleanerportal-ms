import { DeleteWorkmanScheduleService } from "./services/DeleteWorkmanScheduleService"

exports.DeleteWorkmanScheduleHandler = async (event: any) => {
    try {
        // await DeleteWorkmanScheduleService(event)  
        console.warn(event)
        return {
            statusCode: 200,
            headers: {},
            body: event
        }
    } catch (exception) {
        console.log(`DeleteWorkmanScheduleHandler Error 1 ${exception}`)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}