import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { WorksmanEligibilityQuery ,WorksManExperienceQuery } from "../query/WorksManExperienceQuery";

export const WorksManExperienceServices = async(event:any) => {
    try {
        connectDB();
       const data = await sequelizeConnection.query(WorksManExperienceQuery(event),{
           type:QueryTypes.INSERT
       })
       const eligibility = await  sequelizeConnection.query(WorksmanEligibilityQuery(event),{
           type:QueryTypes.INSERT
       })
       console.log(data,eligibility)
    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
    }
}