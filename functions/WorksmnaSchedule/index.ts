import { getPostCodesServices, WorksmnaScheduleServices } from "./services/WorksmnaScheduleServices"

exports.WorksmnaScheduleHandler = async (event: any) => {
    try {
        const data = JSON.parse(event)
        console.log("This is eventevent",event)
        await WorksmnaScheduleServices(data)

        return {
            statusCode: 200,
            headers: {},
            body: data
        }
    } catch (exception) {
        console.log(`WorksmnaScheduleHandler Error 1 ${exception}`)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}