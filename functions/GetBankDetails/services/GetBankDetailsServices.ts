import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetBankDetailsQuery } from "../query/GetBankDetailsQuery";

export const GetBankDetailsServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetBankDetailsQuery(event), {
            type: QueryTypes.SELECT
        })

        return data
    } catch (exception) {
        console.log(`GetBankDetailsServices ${exception}`)
        throw exception
    }
}

