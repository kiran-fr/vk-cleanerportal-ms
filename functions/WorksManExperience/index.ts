import { WorksManExperienceServices, getWorkManIdService } from "./services/WorksManExperienceServices"

exports.WorksManExperienceHandler = async(event:any) => {
    try {
        
    const Worksman:any = await getWorkManIdService(event.worksman_email)
        console.log('worms mand id',Worksman)
        await WorksManExperienceServices(event,Worksman[0].worksman_id)
       return {
        statusCode: 200,
          headers: {},
          body: JSON.stringify('Success' + event)
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