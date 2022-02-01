import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { getCurrentAccountStatusId, UpdateWorksmanDetailsQuery } from "../query/UpdateWorksmanDetailsQuery";

export const UpdateWorksmanDetailsService = async(event:any) => {
    try {
        
        console.log("This is event",event)
        connectDB();
        return await sequelizeConnection.query(UpdateWorksmanDetailsQuery(event),{
            type:QueryTypes.UPDATE
        })
        // console.log("this is some data",data)
        // return data
        
    } catch (exception) {
        console.log("Error in getStepRegistrationService",exception)
        return exception
    }
}
