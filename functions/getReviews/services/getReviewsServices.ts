import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { getReviewsQuery } from "../query/getReviewsQuery";

export const getReviewsServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(getReviewsQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetMessages ${exception}`)
        throw exception
    }
}

