import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { CreateReviewsQuery } from "../query/CreateReviewsQuery";

export const CreateReviewsService = async(event:any) => {
    try {
        
        connectDB();
        return await sequelizeConnection.query(CreateReviewsQuery(event),{
            type:QueryTypes.INSERT
        })
        
    } catch (exception) {
        console.log("Error in CreateReviews service",exception)
        return exception
    }
}
