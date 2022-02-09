import { QueryTypes } from "sequelize/dist";
import { connectDB, sequelizeConnection } from "../helpers/DbConnection"
import { DeletePostcodesQuery } from "../query/DeletePostcodesQuery";

export const DeletePostcodesService = async (event: any) => {
    try {
        connectDB();
        const data = await sequelizeConnection.query(DeletePostcodesQuery(event), {
            type: QueryTypes.DELETE
        })
        return data
    } catch (exception) {
        console.log(`DeletePostcodesService Error ${exception}`)
        throw exception
    }
}

