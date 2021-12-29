import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getUserRegistrationQuery, UserRegistrationQuery } from "../query/userRegistrationQuery";

export const UserRegistrationServices = async(userAttributes:any) => {
  try {
    connectDB();
    await sequelizeConnection.query(UserRegistrationQuery(userAttributes), {
        type: QueryTypes.INSERT
    })
    // await sequelizeConnection.query(getUserRegistrationQuery(),{
    //   type:QueryTypes.SELECT
    // })
  } catch (exception) {
      console.log(`User Registration Service Error ${exception}`)
  }
  
}

