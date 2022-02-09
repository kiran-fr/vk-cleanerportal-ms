import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { GetWorkmanTableDetailsQuery,GetWorksmanAddressDetailsQuery } from "../query/GetWorksmanDetailsQuery";

export const GetWorkmanTableDetailsService = async(worksmanId:any) => {
    try {
        
        console.log("This is event",worksmanId)
        connectDB();
        return await sequelizeConnection.query(GetWorkmanTableDetailsQuery(worksmanId),{
            type:QueryTypes.SELECT
        })
        
    } catch (exception) {
        console.log("Error in getStepRegistrationService",exception)
        return exception
    }
}

export const GetWorksmanAddressDetailsService = async(worksmanId:any) => {
    try {
        
        console.log("This is GetWorksmanAddressDetailsService",worksmanId)
        connectDB();
        return await sequelizeConnection.query(GetWorksmanAddressDetailsQuery(worksmanId),{
            type:QueryTypes.SELECT
        })
        
    } catch (exception) {
        console.log("Error in getStepRegistrationService",exception)
        return exception
    }
}
