
export const GetWorkmanTableDetailsQuery  = (worksmanId:any) => {
    console.warn(worksmanId)
    return ` SELECT first_name,last_name,email,date_of_birth,nationality,gender,phone FROM worksman_table WHERE worksman_id = ${worksmanId}`
}
export const GetWorksmanAddressDetailsQuery  = (worksmanId:any) => {
    console.warn("GetWorksmanAddressDetailsQuery",worksmanId)
    return `SELECT first_line,second_line,county,city,postcode FROM worksman_address_table WHERE worksman_id = '${worksmanId}'`
}
