import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { UpdateWorksmanEmailQuery, UpdateWorksmanPhoneQuery } from "../query/UpdateWorksmanDetailsQuery";

export const UpdateWorksmanEmailService = async (event: any) => {
    try {

        console.log("This is event", event)
        connectDB();
        return await sequelizeConnection.query(UpdateWorksmanEmailQuery(event), {
            type: QueryTypes.UPDATE
        })
        // console.log("this is some data",data)
        // return data

    } catch (exception) {
        console.log("Error in getStepRegistrationService", exception)
        return exception
    }
}

export const UpdateWorksmanPhoneService = async (event: any) => {
    try {

        console.log("This is event", event)
        connectDB();
        return await sequelizeConnection.query(UpdateWorksmanPhoneQuery(event), {
            type: QueryTypes.UPDATE
        })
        // console.log("this is some data",data)
        // return data

    } catch (exception) {
        console.log("Error in getStepRegistrationService", exception)
        return exception
    }
}
