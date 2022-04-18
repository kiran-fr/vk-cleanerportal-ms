import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetListOfJobsBasedOnMonthQuery } from "../query/GetListOfJobsBasedOnMonthQuery";

export const GetListOfJobsBasedOnMonthServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetListOfJobsBasedOnMonthQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetListOfJobsBasedOnMonth Service ${exception}`)
        throw exception
    }
}

