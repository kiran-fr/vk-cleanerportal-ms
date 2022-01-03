import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getUserRegistrationQuery, UserRegistrationQuery, WorksManAddressQuery } from "../query/userRegistrationQuery";

export const UserRegistrationServices = async(userAttributes:any) => {
  try {
    connectDB();
    await sequelizeConnection.query(UserRegistrationQuery(userAttributes), {
        type: QueryTypes.INSERT
    })
    await sequelizeConnection.query(WorksManAddressQuery(userAttributes))
    return {
      statusCode: 200,
        headers: {},
        body: JSON.stringify('Success'+userAttributes)
    }
  } catch (exception) {
      console.log(`User Registration Service Error ${exception}`)
      return {
        statusCode: 500,
          headers: {},
          body: JSON.stringify(exception)
      }
  }
  
}



