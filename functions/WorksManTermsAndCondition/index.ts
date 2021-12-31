import { getWorksManIdService, WorksManTermsAndConditionService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async(event:any) =>{
   try {
       console.log('This is worksman terms and conditions',event)
    //    const Worksman_id  = await getWorksManIdService(event.worksman_email)
       await WorksManTermsAndConditionService(event)
       console.log('Data inserted')
    //    console.log("getWorksManIdService",Worksman_id)
 
   } catch (exception) {
       console.log(`WorksManTermsAndConditionHandler Error ${exception}`)
   }
}