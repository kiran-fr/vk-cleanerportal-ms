import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getWorksmanAddressIdQuery, UserRegistrationQuery, WorksManAddressQuery } from "../query/userRegistrationQuery";

export const UserRegistrationServices = async (userAttributes: any) => {
  try {
    connectDB();
    const data = await sequelizeConnection.query(UserRegistrationQuery(userAttributes), {
      type: QueryTypes.INSERT
    })
    console.log("user registration services",data)
    return data;
  } catch (exception) {
    console.log(`User Registration Service Error ${exception}`)
    throw exception
  }
}

export const WorksManAddressService = async (userAttributes: any,worksman_id:any) => {
  try {
    connectDB();
    console.log('This is works man address services',userAttributes)
   const data = await sequelizeConnection.query(WorksManAddressQuery(userAttributes,worksman_id),{
      type:QueryTypes.INSERT
    })
    return data
  } catch (exception) {
    console.log(`User Registration Service Error ${exception}`)
    throw exception
  }
}

export const getWorksmanAddressIdService = async(email:any) => {
  try {
    connectDB()
    console.warn('This is worksman address id email', email)
    const data = await sequelizeConnection.query(getWorksmanAddressIdQuery(email),{
      type:QueryTypes.SELECT
    })
    return data
  } catch (exception) {
    console.log('Get works man address id service Error',exception)
    throw exception
  }
}

