import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetPaymentDetailsQuery } from "../query/GetPaymentDetailsQuery";

export const GetPaymentDetailsServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetPaymentDetailsQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetMessages ${exception}`)
        throw exception
    }
}

