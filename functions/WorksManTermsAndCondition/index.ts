import { MessageChannel } from "worker_threads"
import { getWorksManIdService, WorksManTermsAndConditionService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async (event: any) => {
   try {
      const eventBody = JSON.parse(event.body);
      const Worksman: any = await getWorksManIdService(eventBody.worksman_email)
      await WorksManTermsAndConditionService(eventBody, Worksman[0].worksman_id)
      return {
         statusCode: 200,
           headers: {},
           body: JSON.stringify('Sucesss')
       }

   } catch (exception) {
      console.log(`WorksManTermsAndConditionHandler Error ${exception}`)
      console.log(`WorksManTermsAndConditionHandler Error ${event}`)
      return {
         statusCode: 400,
           headers: {},
           body: JSON.stringify(exception)
       }
   }
}