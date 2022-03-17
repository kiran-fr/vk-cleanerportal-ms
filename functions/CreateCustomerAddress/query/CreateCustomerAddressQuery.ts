
export const CreateCustomerAddressQuery = (customer_id: any, event: any) => {
    console.warn(event)
    return `INSERT INTO customer_address_table  (
            customer_id ,
            street ,
            post_code  ,
            country 
        ) VALUES('${customer_id}','${event.street}','${event.post_code}','${event.country}')`

}

export const getCreateCustomerId = (email: any) => {
    console.warn(email)
    return `SELECT customer_id from customer_table WHERE customer_email = '${email}' `

}
