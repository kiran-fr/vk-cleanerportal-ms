import { GetPaymentHistoryDetailsServices } from "./services/GetPaymentHistoryDetailsServices"

exports.GetPaymentHistoryDetailsHandler = async (event: any) => {
    try {
        const getPaymentDetails = await GetPaymentHistoryDetailsServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: getPaymentDetails
        }
    } catch (exception) {
        console.log(`GetMessages Error 1 ${exception}`,event)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}