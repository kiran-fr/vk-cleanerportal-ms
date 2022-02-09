export const UserRegistrationQuery = (userAttributes:any) => {
  console.log('user registration query',userAttributes)
        return `INSERT INTO worksman_table (cognito_id,first_name,last_name,email, phone,date_of_birth,gender,nationality, current_step ) 
         VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}',
         '${userAttributes.phone_number}','${userAttributes.birthdate}','${userAttributes.gender}','${userAttributes.locale}',
         'worksmanRegistration')
       `    
}

export const WorksManAddressQuery = (event:any,worksman_id:any) => {
  console.warn('address query 1',event.address)

  let address = event.address
  let address1 = event.address.split(",")
  const worksmanAdd = address.split(",")
  console.warn(worksmanAdd[2])
  console
    return `INSERT INTO worksman_address_table  (
        worksman_id,
        first_line,
        second_line,
        county ,
        city ,
        postcode 
        ) VALUES('${worksman_id}','${worksmanAdd[0]} ${worksmanAdd[1]}','${worksmanAdd[2]}','${worksmanAdd[3]}','${worksmanAdd[4]}','${worksmanAdd[5]}')`
}


export const getWorksmanAddressIdQuery = (email:any) => {
  console.warn('this is id get query',email)
    return `SELECT worksman_id from worksman_table WHERE email='${email}' `
}
