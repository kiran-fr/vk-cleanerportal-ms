import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetWorksmanjobsQuery } from "../query/GetWorksmanjobsQuery";

export const GetWorksmanjobsServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetWorksmanjobsQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetAllPostcodesServices ${exception}`)
        throw exception
    }
}

