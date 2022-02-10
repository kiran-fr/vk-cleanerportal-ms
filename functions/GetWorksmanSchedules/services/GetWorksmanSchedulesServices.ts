import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetWorksmanSchedulesQuery } from "../query/GetWorksmanSchedulesQuery";

export const GetWorksmanSchedulesServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetWorksmanSchedulesQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetWorksmanSchedulesServices ${exception}`)
        throw exception
    }
}

