import { GetAllPostcodesServices } from "./services/GetAllPostcodesServices"

exports.GetAllPostcodesHandler = async (event: any) => {
    try {
        const allPostcode = await GetAllPostcodesServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: allPostcode
        }
    } catch (exception) {
        console.log(`GetAllPostcodesHandler Error 1 ${exception}`,event)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}