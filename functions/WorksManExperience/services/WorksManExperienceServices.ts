import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { WorksManExperienceQuery } from "../query/WorksManExperienceQuery";

export const WorksManExperienceServices = async() => {
    try {
        connectDB();
       const data = await sequelizeConnection.query(WorksManExperienceQuery(),{
           type:QueryTypes.INSERT
       })
       console.log(data)
    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
    }
}