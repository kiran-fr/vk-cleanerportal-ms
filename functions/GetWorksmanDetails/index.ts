import { GetWorksmanDetailsService } from "./services/GetWorksmanDetailsService"

exports.GetWorksmanDetailsHandler  = async(event:any) => {
    try {
        console.warn("This status event",event.worksmanId)
        
        const data:any = await GetWorksmanDetailsService(event.worksmanId)
         
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

