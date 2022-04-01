import { CreateWorksmnaScheduleServices } from "./services/CreateWorksmanScheduleServices"

exports.CreateWorksmanScheduleHandler = async (event: any) => {
    try {
        const data = JSON.parse(event)
        console.log("step-1",event)
        await CreateWorksmnaScheduleServices(data)

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