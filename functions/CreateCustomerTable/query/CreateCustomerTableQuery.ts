
export const CreateCustomerTableQuery = (event: any) => {
    console.warn(event)
    return `INSERT INTO cutomer_table  (
        customer_name ,
        customer_email ,
        customer_phone_number 
        ) VALUES('${event.customer_name}','${event.customer_email}','${event.customer_phone_number}')`

}
