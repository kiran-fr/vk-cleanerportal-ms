import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { CreateWorksmanScheduleQuery } from "../query/CreateWorksmanScheduleQuery";

export const CreateWorksmnaScheduleServices = async (events: any) => {
    try {
        connectDB();
        events.map(async (event: any) => await sequelizeConnection.query(CreateWorksmanScheduleQuery(event), {
            type: QueryTypes.INSERT
        }))

    } catch (exception) {
        console.log(`CreateWorksmanScheduleService Error ${exception}`)
        throw exception
    }
}

