import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetAllPostcodesQuery } from "../query/GetAllPostcodesQuery";

export const GetAllPostcodesServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetAllPostcodesQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetAllPostcodesServices ${exception}`)
        throw exception
    }
}

