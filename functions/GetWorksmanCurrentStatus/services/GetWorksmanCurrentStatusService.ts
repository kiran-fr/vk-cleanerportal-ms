import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { GetWorksmanCurrentStatusQuery } from "../query/GetWorksmanCurrentStatusQuery";

export const GetWorksmanCurrentStatusService = async(event:any) => {
    try {
        
        console.log("This is event",event)
        connectDB();
        let data = await sequelizeConnection.query(GetWorksmanCurrentStatusQuery(event.worksmanId),{
            type:QueryTypes.SELECT
        })
        console.log("thisis some data",data)
        return data
        
    } catch (exception) {
        console.log("Error in getStepRegistrationService",exception)
        return exception
    }
}