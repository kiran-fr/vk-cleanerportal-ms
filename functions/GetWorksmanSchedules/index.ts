import { GetWorksmanSchedulesServices } from "./services/GetWorksmanSchedulesServices"

exports.GetWorksmanSchedulesHandler = async (event: any) => {
    try {
        const getSchedules = await GetWorksmanSchedulesServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: getSchedules
        }
    } catch (exception) {
        console.log(`GetWorksmanSchedulesHandler Error 1 ${exception}`,event)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}