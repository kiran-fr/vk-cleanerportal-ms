import { GetWorkmanTableDetailsService,GetWorksmanAddressDetailsService } from "./services/GetWorksmanDetailsService"

exports.GetWorksmanDetailsHandler  = async(event:any) => {
    try {
        console.warn("This status event",event.worksman_id)
        console.warn("This status event",event)
        
        const useDetails:any = await GetWorkmanTableDetailsService(event.worksman_id)

        const addressDetails:any = await GetWorksmanAddressDetailsService(event.worksman_id)
                 
        console.warn("This is status",addressDetails)

         console.log(event)
         
         return {
             statusCode:200,
             body: {addressDetails:addressDetails,useDetails:useDetails}
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

