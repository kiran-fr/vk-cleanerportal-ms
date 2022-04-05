import { GetDistrictWisePostCodesServices } from "./services/GetDistrictWisePostCodesServices"

exports.GetDistrictWisePostCodesHandler = async (event: any) => {
    try {
        const getJobs = await GetDistrictWisePostCodesServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: getJobs
        }
    } catch (exception) {
        console.log(`GetDistrictWisePostCodesServices Error 1 ${exception}`, event)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}