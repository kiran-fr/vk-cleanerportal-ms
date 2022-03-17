import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { getCustomerAddress, getCustomerDetails, GetJobsQuery, GetReviewsQuery } from "../query/GetJobsQuery";

export const GetJobsServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetJobsQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetMessages ${exception}`)
        throw exception
    }
}
export const GetReviewsServices = async (worksman_id:any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetReviewsQuery(worksman_id), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetReviewsServices ${exception}`)
        throw exception
    }
}
export const getCustomerDetailsService = async () => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(getCustomerDetails(), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`getCustomerDetails ${exception}`)
        throw exception
    }
}
export const getCustomerAddressDetailsService = async () => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(getCustomerAddress(), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`getCustomerAddress ${exception}`)
        throw exception
    }
}

