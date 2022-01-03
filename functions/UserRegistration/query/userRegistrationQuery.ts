export const UserRegistrationQuery = (userAttributes:any) => {
        return `INSERT INTO worksman_table (cognito_id,first_name,last_name,email, phone,date_of_birth ) 
         VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}','${userAttributes.phone_number}','${userAttributes.birthdate}')
       `    
}

export const getUserRegistrationQuery = () =>{
    return `
        SELECT * FROM worksman_table 
    `
}

export const WorksManAddressQuery = (event:any) => {
    return `INSERT INTO Worksman_Address_Table  (
        worksman_id,
        first_line,
        second_line,
        county ,
        city ,
        postcode 
        ) VALUES('${event.worksman_id}','${event.first_line}','${event.second_line}','${event.county}','${event.city}','${event.postcode}')`
}
