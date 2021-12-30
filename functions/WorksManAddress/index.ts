import { WorksManAddressService } from "./services/WorksManAddressService"

exports.WorksManAddressHandler = async() => {
    try {
        
        const data = await WorksManAddressService()
        console.log(`Data inserted succesfully ${data}`)
    } catch (exception) {
        console.log(`WorksManAddress Hanlder Error ${exception}`)
    }
}