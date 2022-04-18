import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { UpdateBankDetailsQuery } from "../query/UpdateBankDetailsQuery";

export const UpdateBankDetailsService = async (event: any) => {
    try {

        console.log("This is event", event)
        connectDB();
        return await sequelizeConnection.query(UpdateBankDetailsQuery(event), {
            type: QueryTypes.UPDATE
        })
        // console.log("this is some data",data)
        // return data

    } catch (exception) {
        console.log("Error in UpdateBankDetails", exception)
        return exception
    }
}

