import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { GetAllPostcodesQuery } from "../query/GetAllPostcodesQuery";

export const GetAllPostcodesServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(GetAllPostcodesQuery(event), {
            type: QueryTypes.SELECT
        })
        
        console.log("This is getall postcodes",data)
        return data
    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
        throw exception
    }
}

