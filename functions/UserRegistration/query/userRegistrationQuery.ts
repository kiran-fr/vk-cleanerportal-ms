export const UserRegistrationQuery = (userAttributes:any) => {
console.warn("watch"+ userAttributes)
console.warn("watch1" + JSON.stringify(userAttributes))
    return `INSERT INTO user_registration (cognito_userid,first_name,last_name,email, phone,date_of_birth ) 
    VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}','${userAttributes.phone_number}','${userAttributes.birthdate}')
   `  
}

export const getUserRegistrationQuery = () =>{
    return `
        SELECT * FROM user_registration
    `
}
