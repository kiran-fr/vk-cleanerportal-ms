import { MessageChannel } from "worker_threads"
import { getWorksManIdService, WorksManTermsAndConditionService, WorksmanTermsAndConditionStepService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async (event: any) => {
   try {

      const data = JSON.parse(event)
      const Worksman: any = await getWorksManIdService(data.worksman_email);

      await WorksManTermsAndConditionService(data, Worksman[0].worksman_id)

      await WorksmanTermsAndConditionStepService(Worksman[0].worksman_id)
      return {
         statusCode: 200,
         headers: {},
         body: JSON.stringify('Sucesss' + event)
      }

   } catch (exception) {
      console.warn(`WorksManTermsAndConditionHandler Error ${JSON.stringify(exception)}`)
      console.warn(`WorksManTermsAndConditionHandler Error ${JSON.stringify(event)}`)
      console.warn("This 1",JSON.parse(event))
      
      const data = JSON.parse(event)
      console.warn("Step2",data)
      return {
         statusCode: 500,
         headers: {},
         body: JSON.stringify(exception)
      }
   }
}