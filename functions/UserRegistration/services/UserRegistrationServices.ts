import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getUserRegistrationQuery, UserRegistrationQuery } from "../query/userRegistrationQuery";

export const UserRegistrationServices = async (userAttributes:any) => {
    try {
        connectDB();
        await sequelizeConnection.query(UserRegistrationQuery(userAttributes), {
            type: QueryTypes.INSERT
        })
    } catch (exception) {
        console.log(`User Registration service Error ${exception}`)
    }
    

    
}

