import { CreateReviewsService} from "./services/CreateReviewsService"

exports.CreateReviewsHandler  = async(event:any) => {
    try {

        const data = JSON.parse(event)
        console.warn("This is worksmand id",data)
        await CreateReviewsService(data)
            
         return {
             statusCode:200,
             body: data
         }
    } catch (exception) {
        console.log("CreateReviews step error",exception)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}

