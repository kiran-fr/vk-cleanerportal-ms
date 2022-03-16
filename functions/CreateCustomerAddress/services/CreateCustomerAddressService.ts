import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { CreateCustomerAddressQuery } from "../query/CreateCustomerAddressQuery";

export const CreateCustomerAddressService = async (event: any) => {
    try {

        connectDB();
        return await sequelizeConnection.query(CreateCustomerAddressQuery(event), {
            type: QueryTypes.INSERT
        })

    } catch (exception) {
        console.log("Error in create customer table service", exception)
        return exception
    }
}
