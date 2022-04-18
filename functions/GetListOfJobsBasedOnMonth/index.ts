import { GetListOfJobsBasedOnMonthServices } from "./services/GetListOfJobsBasedOnMonthServices"

exports.GetListOfJobsBasedOnMonthHandler = async (event: any) => {
    try {
        const getMessages = await GetListOfJobsBasedOnMonthServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: getMessages
        }
    } catch (exception) {
        console.log(`GetListOfJobsBasedOnMonth handler  ${exception}`,event)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}