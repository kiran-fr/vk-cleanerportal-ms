import { GetWorksmanAccountRegistartionStatusService, getWorksManAccountStatusService } from "./services/GetWorksmanAccountRegistartionStatusService"

exports.GetWorksmanAccountRegistartionStatusHandler  = async(event:any) => {
    try {
        console.warn("This status event",event)
        // console.log(event.headers.email)
<<<<<<< HEAD
        const Worksman: any = await getWorksManAccountStatusService(event.email)
=======
        const Worksman: any = await getWorksManAccountStatusService(event.headers.email)
>>>>>>> 6f4c0ffdf4595db889e67a2f29141606ad223643
        
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

