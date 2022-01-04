import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { UserRegistrationQuery, WorksManAddressQuery } from "../query/userRegistrationQuery";

export const UserRegistrationServices = async (userAttributes: any) => {
  try {
    connectDB();
    await sequelizeConnection.query(UserRegistrationQuery(userAttributes), {
      type: QueryTypes.INSERT
    })

  } catch (exception) {
    console.log(`User Registration Service Error ${exception}`)
    throw exception
  }
}

export const getWorksManAddressService = async (userAttributes: any) => {
  try {
    connectDB();
    console.log('This is works man address services',userAttributes)
    await sequelizeConnection.query(WorksManAddressQuery(userAttributes))

  } catch (exception) {
    console.log(`User Registration Service Error ${exception}`)
    throw exception
  }
}