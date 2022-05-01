import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { DeleteWorkmanScheduleQuery } from "../query/DeleteWorkmanScheduleQuery";

export const DeleteWorkmanScheduleService = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(DeleteWorkmanScheduleQuery(event), {
            type: QueryTypes.DELETE
        })
        return data
    } catch (exception) {
        console.log(`DeleteWorkmanScheduleService Error ${exception}`)
        throw exception
    }
}


