import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetPaymentHistoryDetailsQuery } from "../query/GetPaymentHistoryDetailsQuery";

export const GetPaymentHistoryDetailsServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetPaymentHistoryDetailsQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetMessages ${exception}`)
        throw exception
    }
}

