import { MessageChannel } from "worker_threads"
import { getWorksManIdService, WorksManTermsAndConditionService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async (event: any) => {
   try {
      const Worksman: any = await getWorksManIdService(event.worksman_email);
      console.log('step1 worksman ',Worksman)
      await WorksManTermsAndConditionService(event, Worksman[0].worksman_id)
      
      console.log(Worksman,"This is WorksManTermsAndConditionHandler")
      return {
         statusCode: 200,
           headers: {},
           body: JSON.stringify('Sucesss' +  event)
       }

   } catch (exception) {
      console.log(`WorksManTermsAndConditionHandler Error ${JSON.stringify(exception)}`)
      console.log(`WorksManTermsAndConditionHandler Error ${JSON.stringify(event)}`)
      return {
         statusCode: 500,
           headers: {},
           body: JSON.stringify(exception)
       }
   }
}