import { CreateCustomerAddressService } from "./services/CreateCustomerAddressService"

exports.CreateCustomerAddressHandler = async (event: any) => {
    try {

        // const data = JSON.parse(event)
        console.warn("This is worksmand id", event)
        await CreateCustomerAddressService(event)
        return {
            statusCode: 200,
            body: event
        }
    } catch (exception) {
        console.log("create customer tabler handler step error", exception)
        return {
            statusCode: 500,
            headers: {},
            body: JSON.stringify(exception)
        }
    }
}

