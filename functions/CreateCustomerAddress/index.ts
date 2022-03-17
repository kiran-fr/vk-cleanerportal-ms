import { CreateCustomerAddressService, getCustomerTableServiceId } from "./services/CreateCustomerAddressService"

exports.CreateCustomerAddressHandler = async (event: any) => {
    try {

        // const data = JSON.parse(event)
        const customer_id: any = await getCustomerTableServiceId(event.email)
        console.warn("customer_idcustomer_id", customer_id[0].customer_id)
        await CreateCustomerAddressService(customer_id[0].customer_id,event)
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

