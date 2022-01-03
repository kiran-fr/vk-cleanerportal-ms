import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { WorksmanEligibilityQuery ,WorksManExperienceQuery, getWorksManExperienceIdQuery } from "../query/WorksManExperienceQuery";

export const WorksManExperienceServices = async(event:any,worksman_id:any) => {
    try {
        connectDB();
       const data = await sequelizeConnection.query(WorksManExperienceQuery(event,worksman_id),{
           type:QueryTypes.INSERT
       })
       const eligibility = await  sequelizeConnection.query(WorksmanEligibilityQuery(event,worksman_id),{
           type:QueryTypes.INSERT
       })
       return {
        statusCode: 200,
          headers: {},
          body: JSON.stringify('Success'+event)
      }
    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
        return {
            statusCode: 500,
              headers: {},
              body: JSON.stringify(exception)
          }
    }
}

export const getWorkManIdService = async (email:any) => {
    try {
        connectDB()
        return sequelizeConnection.query(getWorksManExperienceIdQuery(email),{
            type:QueryTypes.SELECT
        })
    } catch (exception) {
        console.log('Get work man Experience Service error', exception)
        return exception
    }
}