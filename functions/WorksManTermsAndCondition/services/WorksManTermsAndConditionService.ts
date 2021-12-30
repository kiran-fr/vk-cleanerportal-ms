import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getUserRegistrationQuery, WorksManTermsAndConditionQuery } from "../query/WorksManTermsAndConditionQuery"

export const WorksManTermsAndConditionService = async(event:any) => {
    try {
        console.log('WorksManTermsAndConditionService',event)
        connectDB();
       const data = await sequelizeConnection.query(WorksManTermsAndConditionQuery(event), {
            type: QueryTypes.INSERT
        })
        console.log('db connections WorksManTermsAndConditionService',data)
    } catch (exception) {
        console.log(`Works Man Terms And Condition Service Error ${exception}`)
    }
}