import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { CreateWorksmanScheduleQuery } from "../query/CreateWorksmanScheduleQuery";

export const CreateWorksmnaScheduleServices = async (event: any) => {

    try {
        connectDB();
        await sequelizeConnection.query(CreateWorksmanScheduleQuery(event), {
            type: QueryTypes.INSERT
        })



    } catch (exception) {
        console.log(`CreateWorksmanScheduleService Error ${exception}`)
        throw exception
    }
}

