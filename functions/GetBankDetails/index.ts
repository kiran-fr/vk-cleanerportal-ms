import { GetBankDetailsServices } from "./services/GetBankDetailsServices"

exports.GetBankDetailsHandler = async (event: any) => {
    try {
        const getBankDetails = await GetBankDetailsServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: getBankDetails
        }
    } catch (exception) {
        console.log(`GetBankDetailsHandler Error 1 ${exception}`,event)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}