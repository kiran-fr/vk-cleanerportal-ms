import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/WorksmanEligibilityDbConnection"
import { WorksmanEligibilityQuery } from "../query/WorksmanEligibilityQuery"

export const WorksmanEligibilityServices = async() => {
    try {
        connectDB();
        await sequelizeConnection.query(WorksmanEligibilityQuery(),{
            type:QueryTypes.INSERT
        })
    } catch (exception) {
        console.log(`WorksmanEligibilityServices ${exception}`)
    }
}