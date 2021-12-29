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
