import { getCustomerAddressDetailsService, getCustomerDetailsService, GetJobsServices, GetReviewsServices } from "./services/GetJobsServices"

exports.GetJobsHandler = async (event: any) => {
    try {
        const getJobs = await GetJobsServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: getJobs
        }
    } catch (exception) {
        console.log(`GetMessages Error 1 ${exception}`, event)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}