export const UserRegistrationQuery = (event:any) => {
console.log("watch",event)
console.log("watch1",event.cognito_userid)
    return `INSERT INTO user_registration ( cognito_userid,first_name,last_name,email, phone,date_of_birth ) 
    VALUES (${event.cognito_userid},${event.first_name},${event.last_name},${event.email},${event.phone},${event.date_of_birth})
   `

}


export const getUserRegistrationQuery = () =>{
    return `
        SELECT * FROM user_registration
    `
}



 // VALUES (${event.cognito_userid},${event.first_name},${event.last_name},${event.email},${event.phone},${event.date_of_birth})
 
//  VALUES('cognito_userid','first_name','last_name','email', '70754782454','2013-08-25')