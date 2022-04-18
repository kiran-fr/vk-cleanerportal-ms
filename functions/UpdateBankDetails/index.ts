import { UpdateBankDetailsService } from "./services/UpdateBankDetailsService"

exports.UpdateBankDetailsHandler = async (event: any) => {
    console.warn(event)
    try {

        const data = JSON.parse(event)

        // console.warn("This status datadatadata", data)

       
            const email: any = await UpdateBankDetailsService(data)
            console.warn("This is email", email)

        console.log(event)
        return {
            statusCode: 200,
             body: event
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

