import { GetWorksmanDetailsService } from "./services/GetWorksmanDetailsService"

exports.GetWorksmanDetailsHandler  = async(event:any) => {
    try {
        console.warn("This status event",event.worksman_id)
        console.warn("This status event",event)
        
        const data:any = await GetWorksmanDetailsService(event.worksman_id)
         
        // const data:any = await GetWorksmanAccountRegistartionStatusService(Worksman[0].worksman_id) 
        
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

