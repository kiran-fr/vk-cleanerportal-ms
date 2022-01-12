import { GetWorksmanCurrentStatusService } from "./services/GetWorksmanCurrentStatusService"

exports.GetWorksmanCurrentStatusHandler  = async(event:any) => {
    try {
         await GetWorksmanCurrentStatusService(event) 
         console.log(event)
         return {
             statusCode:200,
             headers:{},
             body: `success ${event}`
         }
    } catch (exception) {
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}

