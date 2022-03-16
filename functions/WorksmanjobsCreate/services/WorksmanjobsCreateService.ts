import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { WorksmanjobsCreateQuery } from "../query/WorksmanjobsCreateQuery";

export const WorksmanjobsCreateService = async (event: any) => {
    try {

        console.log("This is event", event)
        connectDB();
        return await sequelizeConnection.query(WorksmanjobsCreateQuery(event), {
            type: QueryTypes.INSERT
        })

    } catch (exception) {
        console.log("Error in getStepRegistrationService", exception)
        return exception
    }
}
