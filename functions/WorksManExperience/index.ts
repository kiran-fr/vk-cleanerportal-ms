import { WorksManExperienceServices } from "./services/WorksManExperienceServices"

exports.WorksManExperienceHandler = async(event:any) => {
    try {
       const data = await WorksManExperienceServices(event)
       console.log(data)
    } catch (exception) {
        console.log(`work man experience handler Error ${exception}`)
    }
}