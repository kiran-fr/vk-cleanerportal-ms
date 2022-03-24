import { GetPaymentDetailsServices } from "./services/GetPaymentDetailsServices"

exports.GetPaymentDetailsHandler = async (event: any) => {
    try {
        const getPaymentDetails = await GetPaymentDetailsServices(event)
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