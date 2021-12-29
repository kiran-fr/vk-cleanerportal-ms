import { WorksmanEligibilityServices } from "./services/WorksmanEligibilityServices"

exports.WorksmanEligibilityHandler = async() => {
    try {        
        
        const data =  await WorksmanEligibilityServices()
        console.log('Work man eligiblity handler',data)

    } catch (exception) {
        console.log(`WorksmanEligibility hanlder error ${exception}`)
    }
}