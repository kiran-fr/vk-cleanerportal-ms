import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { UserPostCodesQuery } from "../query/UserPostCodesQuery";

export const UserPostCodesServices = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(UserPostCodesQuery(event), {
            type: QueryTypes.INSERT
        })
    } catch (exception) {
        console.log(`work man experience service Error ${exception}`)
        throw exception
    }
}

