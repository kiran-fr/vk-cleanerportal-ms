import { GetWorksmanAccountRegistartionStatusService, getWorksManAccountStatusService } from "./services/GetWorksmanAccountRegistartionStatusService"

exports.GetWorksmanAccountRegistartionStatusHandler  = async(event:any) => {
    try {

        console.log(event.headers.email)
        const Worksman: any = await getWorksManAccountStatusService(event.headers.email)
        
        // const data:any = await GetWorksmanAccountRegistartionStatusService(Worksman[0].worksman_id)
         
        const data:any = await GetWorksmanAccountRegistartionStatusService(Worksman[0].worksman_id) 

        console.log("This is status",data)

         console.log(event)
         return {
             statusCode:200,
             body: data
         }
    } catch (exception) {
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}

