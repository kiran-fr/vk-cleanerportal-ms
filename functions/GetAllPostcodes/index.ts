import { GetAllPostcodesServices } from "./services/GetAllPostcodesServices"

exports.GetAllPostcodesHandler = async (event: any) => {
    console.log("This postcode handlers",event)
    try {
        // const data = JSON.parse(event)
        // console.log('worms mand id', data)
        const allPostcode = await GetAllPostcodesServices(event)
        
        // console.warn("This is all postcodes",data)
        console.warn("This is all postcodes",event)
        console.warn("This is all postcodes",allPostcode)
        return {
            statusCode: 200,
            headers: {},
            body: allPostcode
        }
    } catch (exception) {
        console.log(`GetAllPostcodesHandler Error 1 ${exception}`,event)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}