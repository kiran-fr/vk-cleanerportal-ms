import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getUserRegistrationQuery, WorksManTermsAndConditionQuery } from "../query/WorksManTermsAndConditionQuery"

export const WorksManTermsAndConditionService = async() => {
    try {
        connectDB();
       const data = await sequelizeConnection.query(WorksManTermsAndConditionQuery(), {
            type: QueryTypes.INSERT
        })
        console.log('db connections WorksManTermsAndConditionService',data)
    } catch (exception) {
        console.log(`Works Man Terms And Condition Service Error ${exception}`)
    }
}