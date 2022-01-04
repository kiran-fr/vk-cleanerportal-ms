import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getWorksmanAddressIdQuery, UserRegistrationQuery, WorksManAddressQuery } from "../query/userRegistrationQuery";

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

export const WorksManAddressService = async (userAttributes: any,worksman_id:any) => {
  try {
    connectDB();
    console.log('This is works man address services',userAttributes)
    await sequelizeConnection.query(WorksManAddressQuery(userAttributes,worksman_id),{
      type:QueryTypes.INSERT
    })

  } catch (exception) {
    console.log(`User Registration Service Error ${exception}`)
    throw exception
  }
}

export const getWorksmanAddressIdService = async(email:any) => {
  try {
    connectDB()
    await sequelizeConnection.query(getWorksmanAddressIdQuery(email),{
      type:QueryTypes.SELECT
    })
  } catch (exception) {
    console.log('Get works man address id service Error',exception)
    throw exception
  }
}