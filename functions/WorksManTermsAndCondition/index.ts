import { WorksManTermsAndConditionService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async(event:any) =>{
   try {
       console.log('This is worksman terms and conditions',event)
       await WorksManTermsAndConditionService(event)
       console.log('Data inserted succesfulle')

   } catch (exception) {
       console.log(`WorksManTermsAndConditionHandler Error ${exception}`)
   }
}