import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { WorksmanEligibilityQuery, WorksManExperienceQuery, WorksmanExperienceStepQuery } from "../query/WorksManExperienceQuery";

export const WorksManExperienceServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(WorksManExperienceQuery(event), {
            type: QueryTypes.INSERT
        })
    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
        throw exception
    }
}

export const WorksManEligibilityServices = async (event: any) => {
    try {
        connectDB();
        const eligibility = await sequelizeConnection.query(WorksmanEligibilityQuery(event), {
            type: QueryTypes.INSERT
        })

    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
        throw exception
    }
}


export const WorksmanExperienceStepService = async (worksmanId: any) => {
    try {
        console.log("This is event", worksmanId)
        connectDB();
        return await sequelizeConnection.query(WorksmanExperienceStepQuery(worksmanId), {
            type: QueryTypes.UPDATE
        })

    } catch (exception) {
        console.log("Error in getStepRegistrationService", exception)
        throw exception
    }
}