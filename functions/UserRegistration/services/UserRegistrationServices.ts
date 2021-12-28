import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getUserRegistrationQuery, UserRegistrationQuery } from "../query/userRegistrationQuery";

export const UserRegistrationServices = (userAttributes:any) => {
    connectDB();
    return sequelizeConnection.query(UserRegistrationQuery(userAttributes), {
        type: QueryTypes.INSERT
    })
  
}

