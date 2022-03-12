import { GetBankDetailsServices } from "./services/GetBankDetailsServices"

exports.GetBankDetailsHandler = async (event: any) => {
    try {
        const allPostcode = await GetBankDetailsServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: allPostcode
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