import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getUserRegistrationQuery, UserRegistrationQuery } from "../query/userRegistrationQuery";

export const UserRegistrationServices = async (userAttributes:any) => {
    connectDB();
    // return sequelizeConnection.query('SELECT * FROM users' , {
    //     type:QueryTypes.SELECT
    // })

    // return sequelizeConnection.query("INSERT INTO users (user_id, username,password ) VALUES(3, 'krishna','kiran@11')",{
    //     type:QueryTypes.INSERT
    // })

    return sequelizeConnection.query(UserRegistrationQuery(userAttributes), {
        type: QueryTypes.INSERT
    })
}

