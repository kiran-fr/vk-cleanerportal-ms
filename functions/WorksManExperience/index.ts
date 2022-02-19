import { WorksManExperienceServices, WorksManEligibilityServices, WorksmanExperienceStepService } from "./services/WorksManExperienceServices"

exports.WorksManExperienceHandler = async (event: any) => {
    const fgfgf = JSON.parse(event)
    console.log("this is experience event",event)
    console.log("this is experience fgfgf",fgfgf)
    try {
        const data = JSON.parse(event)
        console.log('worms mand id', data)
        await WorksManExperienceServices(data)
        await WorksManEligibilityServices(data)
        const status = await WorksmanExperienceStepService(data.worksman_id)
        console.warn(data)
        return {
            statusCode: 200,
            headers: {},
            body: status
        }
    } catch (exception) {
        console.log(`work man experience handler Error 1 ${exception}`)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}