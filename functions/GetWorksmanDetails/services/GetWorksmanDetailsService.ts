import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { getCurrentAccountStatusId, GetWorksmanAccountRegistartionStatusQuery } from "../query/GetWorksmanDetailsQuery";

export const GetWorksmanAccountRegistartionStatusService = async(worksmanId:any) => {
    try {
        
        console.log("This is event",worksmanId)
        connectDB();
        return await sequelizeConnection.query(GetWorksmanAccountRegistartionStatusQuery(worksmanId),{
            type:QueryTypes.SELECT
        })
        // console.log("this is some data",data)
        // return data
        
    } catch (exception) {
        console.log("Error in getStepRegistrationService",exception)
        return exception
    }
}

export const getWorksManAccountStatusService = async (email: any) => {
    try {
        connectDB()
        return sequelizeConnection.query(getCurrentAccountStatusId(email), {
            type: QueryTypes.SELECT
        })
    } catch (exception) {
        console.log('Get work man Experience Service error', exception)
        throw exception
    }
}