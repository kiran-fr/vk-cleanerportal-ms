import { WorksManExperienceServices } from "./services/WorksManExperienceServices"

exports.WorksManExperienceHandler = async() => {
    try {
       const data = await WorksManExperienceServices()
       console.log(data)
    } catch (exception) {
        console.log(`work man experience handler Error ${exception}`)
    }
}