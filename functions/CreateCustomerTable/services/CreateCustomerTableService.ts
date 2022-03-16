import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { CreateCustomerTableQuery } from "../query/CreateCustomerTableQuery";

export const CreateCustomerTableService = async(event:any) => {
    try {
        
        connectDB();
        return await sequelizeConnection.query(CreateCustomerTableQuery(event),{
            type:QueryTypes.INSERT
        })
        
    } catch (exception) {
        console.log("Error in create customer table service",exception)
        return exception
    }
}
