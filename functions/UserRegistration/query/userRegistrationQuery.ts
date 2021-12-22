export const UserRegistrationQuery = (userAttributes:any) => {
console.warn("watch"+ userAttributes)
console.warn("watch1" + JSON.stringify(userAttributes))

// "userAttributes": {
//     "sub": "e0c272bb-610e-4dc1-9a70-d4eeea904efa",
//     "email_verified": "true",
//     "birthdate": "2013-05-09",
//     "cognito:user_status": "CONFIRMED",
//     "cognito:email_alias": "kiran.budipi@vrishkar.com",
//     "gender": "female",
//     "phone_number_verified": "false",
//     "given_name": "kiran",
//     "family_name": "kiranreddy",
//     "email": "kiran.budipi@vrishkar.com"
//   }
// console.log("watch1",userAttributes.cognito_userid)
console.log(`INSERT INTO user_registration (cognito_userid,first_name,last_name,email, phone,date_of_birth ) 
VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}','${userAttributes.phone_number}','${userAttributes.birthdate}')
`)
    return `INSERT INTO user_registration (cognito_userid,first_name,last_name,email, phone,date_of_birth ) 
    VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}','${userAttributes.phone_number}','${userAttributes.birthdate}')
    `

  

}


export const getUserRegistrationQuery = () =>{
    return `
        SELECT * FROM user_registration 
    `
}



 // VALUES (${userAttributes.cognito_userid},${userAttributes.first_name},${userAttributes.last_name},${userAttributes.email},${userAttributes.phone},${userAttributes.date_of_birth})
 
//  VALUES('cognito_userid','first_name','last_name','email', '70754782454','2013-08-25')