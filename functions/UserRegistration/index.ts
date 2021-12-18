import { UserRegistrationServices } from "./services/UserRegistrationServices"

exports.UserRegistrationHanlder = async() =>{
   const data = UserRegistrationServices()
   return data
}