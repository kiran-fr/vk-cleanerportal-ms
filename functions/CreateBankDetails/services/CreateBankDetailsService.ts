import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { CreateBankDetailsQuery } from "../query/CreateBankDetailsQuery";

export const CreateBankDetailsService = async(event:any) => {
    console.log("CreateBankDetailsService",event)
    try {
        
        connectDB();
        return await sequelizeConnection.query(CreateBankDetailsQuery(event),{
            type:QueryTypes.INSERT
        })
        
    } catch (exception) {
        console.log("Error in CreateBankDetails service",exception)
        return exception
    }
}
