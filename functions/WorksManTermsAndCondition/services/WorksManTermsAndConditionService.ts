import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { getUserRegistrationQuery, getWorksManTermsIdQuery, WorksManTermsAndConditionQuery } from "../query/WorksManTermsAndConditionQuery"

export const WorksManTermsAndConditionService = async(event:any, Worksman_id:any) => {
    try {
        console.log('WorksManTermsAndConditionService',event)
        connectDB();
       const data = await sequelizeConnection.query(WorksManTermsAndConditionQuery(event, Worksman_id), {
            type: QueryTypes.INSERT
        })
        console.log('db connections WorksManTermsAndConditionService',data)
    } catch (exception) {
        console.log(`Works Man Terms And Condition Service Error ${exception}`)
    }
}

export const getWorksManIdService = async(email:any) => {
    try {
        console.log('WorksManTermsAndConditionService in getWorksManIdService',email)
        connectDB();
       const data = await sequelizeConnection.query(getWorksManTermsIdQuery(email), {
            type: QueryTypes.INSERT
        })
        console.log('db connections WorksManTermsAndConditionService getWorksManIdService',data)
    } catch (exception) {
        console.log(`Works Man Terms And Condition Service Error ${exception}`)
    }
}