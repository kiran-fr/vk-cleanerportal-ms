import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { WorksManExperienceQuery } from "../query/WorksManExperienceQuery";

export const WorksManExperienceServices = async(event:any) => {
    try {
        connectDB();
       const data = await sequelizeConnection.query(WorksManExperienceQuery(event),{
           type:QueryTypes.INSERT
       })
       console.log(data)
    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
    }
}