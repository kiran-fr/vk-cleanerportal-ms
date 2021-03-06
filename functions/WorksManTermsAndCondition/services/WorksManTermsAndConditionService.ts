import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnectionHelpers"
import { WorksManTermsAndConditionQuery, WorksmanTermsAndConditionStepQuery } from "../query/WorksManTermsAndConditionQuery"

export const WorksManTermsAndConditionService = async (event: any) => {
    console.warn("This is worksmanterms and condition servie",event)
    try {
        connectDB();
        const data = await sequelizeConnection.query(WorksManTermsAndConditionQuery(event), {
            type: QueryTypes.INSERT
        })

    } catch (exception) {
        console.log(`Works Man Terms And Condition Service Error ${exception}`)
        throw exception;
    }
}



export const WorksmanTermsAndConditionStepService = (worksmanId: any) => {
    try {
        connectDB();
        return sequelizeConnection.query(WorksmanTermsAndConditionStepQuery(worksmanId), {
            type: QueryTypes.UPDATE
        })
    } catch (exception) {
        console.log(`WorksmanTermsAndConditionStepService ${exception}`)
        throw exception;
    }
}