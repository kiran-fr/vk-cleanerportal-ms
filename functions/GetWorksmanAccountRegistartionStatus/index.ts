import { GetWorksmanAccountRegistartionStatusService, getWorksManAccountStatusService } from "./services/GetWorksmanAccountRegistartionStatusService"

exports.GetWorksmanAccountRegistartionStatusHandler  = async(event:any) => {
    try {
        const Worksman: any = await getWorksManAccountStatusService(event.email)        
        console.warn("This is worksmand id",Worksman)
        const data:any = await GetWorksmanAccountRegistartionStatusService(Worksman[0].worksman_id)
         

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

