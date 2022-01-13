import { WorksManExperienceServices, getWorkManIdService, WorksManEligibilityServices, WorksmanExperienceStepService } from "./services/WorksManExperienceServices"

exports.WorksManExperienceHandler = async (event: any) => {
    try {
        const Worksman: any = await getWorkManIdService(event.worksman_email)
        console.log('worms mand id', Worksman)
        await WorksManExperienceServices(event, Worksman[0].worksman_id)
        await WorksManEligibilityServices(event,Worksman[0].worksman_id)
        const status = await WorksmanExperienceStepService(Worksman[0].worksman_id)
        console.warn(event)
        return {
            statusCode: 200,
            headers: {},
            body: JSON.stringify(status)
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