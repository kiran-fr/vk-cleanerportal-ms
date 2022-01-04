import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { WorksmanEligibilityQuery, WorksManExperienceQuery, getWorksManExperienceIdQuery } from "../query/WorksManExperienceQuery";

export const WorksManExperienceServices = async (event: any, worksman_id: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(WorksManExperienceQuery(event, worksman_id), {
            type: QueryTypes.INSERT
        })
    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
        throw exception
    }
}

export const WorksManEligibilityServices = async (event: any, worksman_id: any) => {
    try {
        connectDB();
        const eligibility = await sequelizeConnection.query(WorksmanEligibilityQuery(event, worksman_id), {
            type: QueryTypes.INSERT
        })

    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
        throw exception
    }
}

export const getWorkManIdService = async (email: any) => {
    try {
        connectDB()
        return sequelizeConnection.query(getWorksManExperienceIdQuery(email), {
            type: QueryTypes.SELECT
        })
    } catch (exception) {
        console.log('Get work man Experience Service error', exception)
        throw exception
    }
}