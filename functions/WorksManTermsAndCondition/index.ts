import { getWorksManIdService, WorksManTermsAndConditionService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async(event: any) =>{
   try {
       console.log('This is worksman terms and conditions',event)
       const Worksman_id: any  = await getWorksManIdService(event.worksman_email)
       console.log(Worksman_id)
       await WorksManTermsAndConditionService(event, Worksman_id[0].worksman_id)
       console.log('Data inserted')
    //    console.log("getWorksManIdService",Worksman_id)
 
   } catch (exception) {
       console.log(`WorksManTermsAndConditionHandler Error ${exception}`)
   }
}