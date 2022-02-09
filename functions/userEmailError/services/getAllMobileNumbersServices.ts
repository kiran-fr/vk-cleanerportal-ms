import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getAllMobileNumbersQuery } from "../query/getAllMobileNumbersQuery";


export const getAllMobileNumbersService = async() => {
  try {
    connectDB()
    const data = await sequelizeConnection.query(getAllMobileNumbersQuery(),{
      type:QueryTypes.SELECT
    })
    console.log("This is user data",data)
    return data
  } catch (exception) {
    console.log('Get works man address id service Error',exception)
    throw exception
  }
}

