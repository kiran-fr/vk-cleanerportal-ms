import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { GetWorksmanDetailsQuery } from "../query/GetWorksmanDetailsQuery";

export const GetWorksmanDetailsService = async(worksmanId:any) => {
    try {
        
        console.log("This is event",worksmanId)
        connectDB();
        return await sequelizeConnection.query(GetWorksmanDetailsQuery(worksmanId),{
            type:QueryTypes.SELECT
        })
        
    } catch (exception) {
        console.log("Error in getStepRegistrationService",exception)
        return exception
    }
}
