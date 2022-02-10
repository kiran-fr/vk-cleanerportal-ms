import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { getAllPostcodes, WorksmnaScheduleQuery } from "../query/WorksmnaScheduleQuery";

export const WorksmnaScheduleServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(WorksmnaScheduleQuery(event), {
            type: QueryTypes.INSERT
        })
    } catch (exception) {
        console.log(`WorksmnaScheduleServices Error ${exception}`)
        throw exception
    }
}

export const getPostCodesServices = async () => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(getAllPostcodes(), {
            type: QueryTypes.SELECT
        })
        return data
    } catch (exception) {
        console.log(`UserPostCodesServices Error ${exception}`)
        throw exception
    }
}

