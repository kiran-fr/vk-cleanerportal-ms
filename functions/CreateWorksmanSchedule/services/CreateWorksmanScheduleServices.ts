import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { CreateWorksmanScheduleQuery, GetWorkmanScheduleQuery, UpdateWorkmanScheduleQuery } from "../query/CreateWorksmanScheduleQuery";

export const CreateWorksmnaScheduleServices = async (event: any) => {
    console.log("This is service create worksman schedule", event)

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



export const GetWorkmanScheduleService = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetWorkmanScheduleQuery(event), {
            type: QueryTypes.SELECT
        })
        return data
    } catch (exception) {
        console.log(`DeleteWorkmanScheduleService Error ${exception}`)
        throw exception
    }
}

export const UpdateWorkmanScheduleService = async (event:any,time: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(UpdateWorkmanScheduleQuery(event,time), {
            type: QueryTypes.UPDATE
        })
        return data
    } catch (exception) {
        console.log(`DeleteWorkmanScheduleService Error ${exception}`)
        throw exception
    }
}
