import { getWorksManIdService, WorksManTermsAndConditionService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async(event:any) =>{
   try {
       console.log('This is worksman terms and conditions',event)
       const Worksman_id  = getWorksManIdService(event.email)
       await WorksManTermsAndConditionService(event, Worksman_id)
       console.log('Data inserted succesfulle')

   } catch (exception) {
       console.log(`WorksManTermsAndConditionHandler Error ${exception}`)
   }
}