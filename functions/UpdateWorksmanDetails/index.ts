import { UpdateWorksmanDetailsService } from "./services/UpdateWorksmanDetailsService"

exports.UpdateWorksmanDetailsHandler  = async(event:any) => {
    try {
        console.warn("This status event",event)
       
        
        const data:any = await UpdateWorksmanDetailsService(event)
         

        console.warn("This is status",data)

         console.log(event)
         return {
             statusCode:200,
             body: data
         }
    } catch (exception) {
        console.log("step error",exception)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}

