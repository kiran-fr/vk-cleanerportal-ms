import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { CreatePaymentHistoryDetailsQuery } from "../query/CreatePaymentHistoryDetailsQuery";

export const CreatePaymentHistoryDetailsService = async(event:any) => {
    console.log('warn1',event)
    try {
        
        connectDB();
        return await sequelizeConnection.query(CreatePaymentHistoryDetailsQuery(event),{
            type:QueryTypes.INSERT
        })
        
    } catch (exception) {
        console.log("Error in CreatePaymentHistoryDetails service",exception)
        return exception
    }
}
