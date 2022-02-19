import { MessageChannel } from "worker_threads"
import { WorksManTermsAndConditionService, WorksmanTermsAndConditionStepService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async (event: any) => {
   console.warn("this is even of workdsn terms and conditi",event)
   const dfdfd = JSON.parse(event)
   console.log("this is even of workdsn terms and conditi dfdfd",dfdfd)
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
      console.warn(`WorksManTermsAndConditionHandler Error ${JSON.stringify(exception)}`)
      console.warn(`WorksManTermsAndConditionHandler Error ${JSON.stringify(event)}`)
      console.warn("This 1",JSON.parse(event))
      
      // const data = JSON.parse(event)
      // console.warn("Step2",data)
      return {
         statusCode: 500,
         headers: {},
         body: JSON.stringify(exception)
      }
   }
}