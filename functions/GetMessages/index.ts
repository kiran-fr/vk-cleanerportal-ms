import { GetMessagesServices } from "./services/GetMessagesServices"

exports.GetMessagesHandler = async (event: any) => {
    try {
        const getMessages = await GetMessagesServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: getMessages
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