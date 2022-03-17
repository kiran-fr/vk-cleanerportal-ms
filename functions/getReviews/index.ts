import { getReviewsServices } from "./services/getReviewsServices"

exports.getReviewsHandler = async (event: any) => {
    try {
        const getMessages = await getReviewsServices(event)
        return {
            statusCode: 200,
            headers: {},
            body: getMessages
        }
    } catch (exception) {
        console.log(`getReviews Error 1 ${exception}`,event)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}