import { WorksManTermsAndConditionService } from "./services/WorksManTermsAndConditionService"

exports.WorksManTermsAndConditionHandler = async() =>{
   try {
       await WorksManTermsAndConditionService()
       console.log('Data inserted succesfulle')

   } catch (exception) {
       console.log(`WorksManTermsAndConditionHandler Error ${exception}`)
   }
}