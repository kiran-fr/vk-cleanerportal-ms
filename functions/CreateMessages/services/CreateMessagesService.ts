import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers";
import { CreateMessagesQuery } from "../query/CreateMessagesQuery";

export const CreateMessagesService = async(event:any) => {
    try {
        
        connectDB();
        return await sequelizeConnection.query(CreateMessagesQuery(event),{
            type:QueryTypes.INSERT
        })
        
    } catch (exception) {
        console.log("Error in CreateMessages service",exception)
        return exception
    }
}
