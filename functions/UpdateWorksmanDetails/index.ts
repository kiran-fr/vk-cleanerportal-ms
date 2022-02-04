import { UpdateWorksmanEmailService, UpdateWorksmanPhoneService } from "./services/UpdateWorksmanDetailsService"

exports.UpdateWorksmanDetailsHandler = async (event: any) => {
    try {

        const data = JSON.parse(event)

        console.warn("This status datadatadata", data)

        if (data.email !== undefined) {
            const email: any = await UpdateWorksmanEmailService(data)
            console.warn("This is email", email)
        }

        if(data.phone !==undefined){
            const phone: any = await UpdateWorksmanPhoneService(data)
            console.warn("This is phone", phone)
        }

        console.log(event)
        return {
            statusCode: 200,
             body: 'SUCCESS'
        }
    } catch (exception) {
        console.log("step error", exception)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}

