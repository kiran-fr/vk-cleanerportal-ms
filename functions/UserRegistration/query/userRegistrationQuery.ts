export const UserRegistrationQuery = () => {
    return `
        INSERT INTO user_registration (
        cognito_userid,
        first_name,
        last_name,
        email,
        phone,
        date_of_birth ) VALUES ('V244','KIRAN','REDDY','KIRAN@GMAIL.COM','70754758244','2013-05-1')
    `
}