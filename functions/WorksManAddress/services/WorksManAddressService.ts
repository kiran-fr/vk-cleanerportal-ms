import {connectDB,sequelizeConnection} from "../helpers/DbConnection"
import {WorksManAddressQuery} from "../query/WorksManAddressQuery"
import {QueryTypes} from "sequelize/dist"

export const WorksManAddressService = async() => {
    try {
        connectDB()
        await sequelizeConnection.query(WorksManAddressQuery(),{
            type:QueryTypes.INSERT
        })
    } catch (exception) {
        console.log(`Works mand address service Error ${exception}`)
    }
}