import { Sequelize } from "sequelize"


export const sequelizeConnection = new Sequelize('VrishKarServices','postgres','mydevinstance',{
    host: 'vriskardevinstance.ccti2qfk3j7d.us-east-1.rds.amazonaws.com',
    dialect: 'postgres'
}) 

export const connectDB = async() =>{
    try {
        await sequelizeConnection.authenticate();
        console.log("Successfully connected")

    } catch (error) {
        console.log("Connection error")
    }
}