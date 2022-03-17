import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { CreateCustomerAddressQuery,getCreateCustomerId } from "../query/CreateCustomerAddressQuery";

export const CreateCustomerAddressService = async (customer_id:any,event: any) => {
    try {

        connectDB();
        return await sequelizeConnection.query(CreateCustomerAddressQuery(customer_id,event), {
            type: QueryTypes.INSERT
        })

    } catch (exception) {
        console.log("Error in create customer table service", exception)
        return exception
    }
}
export const getCustomerTableServiceId = async (event: any) => {
    try {

        connectDB();
        return await sequelizeConnection.query(getCreateCustomerId(event), {
            type: QueryTypes.SELECT
        })

    } catch (exception) {
        console.log("Error in create getCustomerTableServiceId", exception)
        return exception
    }
}
