import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetMessagesQuery } from "../query/GetMessagesQuery";

export const GetMessagesServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetMessagesQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetMessages ${exception}`)
        throw exception
    }
}

