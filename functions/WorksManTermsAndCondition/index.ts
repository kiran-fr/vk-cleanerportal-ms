import { MessageChannel } from "worker_threads"
import { WorksManTermsAndConditionService, WorksmanTermsAndConditionStepService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async (event: any) => {
   try {
      const data = JSON.parse(event)
      await WorksManTermsAndConditionService(data)

      await WorksmanTermsAndConditionStepService(data.worksman_id)
      console.warn("this is even of workdsn terms and conditi event",data)
      return {
         statusCode: 200,
         headers: {},
         body: JSON.stringify('Sucesss' + data)
      }

   } catch (exception) {      
      return {
         statusCode: 500,
         headers: {},
         body: JSON.stringify(exception)
      }
   }
}