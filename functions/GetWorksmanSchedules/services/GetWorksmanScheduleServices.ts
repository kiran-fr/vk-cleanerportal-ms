import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetWorksmanScheduleQuery } from "../query/GetWorksmanScheduleQuery";

export const GetWorksmanScheduleServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetWorksmanScheduleQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetWorksmanSchedulesServices ${exception}`)
        throw exception
    }
}

