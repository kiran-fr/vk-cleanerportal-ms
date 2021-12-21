export const UserRegistrationQuery = (event:any) => {
    return `INSERT INTO user_registration ( cognito_userid,first_name,last_name,email, phone,date_of_birth ) VALUES (${event.cognito_userid},${event.first_name},${event.last_name},${event.email},${event.phone},${event.date_of_birth})`
}

export const getUserRegistrationQuery = () =>{
    return `
        SELECT * FROM user_registration
    `
}