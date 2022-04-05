import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetDistrictWisePostCodesQuery } from "../query/GetDistrictWisePostCodesQuery";

export const GetDistrictWisePostCodesServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetDistrictWisePostCodesQuery(event), {
            type: QueryTypes.SELECT
        })
        
        return data
    } catch (exception) {
        console.log(`GetDistrictWisePostCodes services ${exception}`)
        throw exception
    }
}

