export const Schema = () =>{
    return `
                DROP TABLE IF EXISTS user_registration;

                CREATE TABLE user_registration (
                user_id SERIAL PRIMARY KEY,
                cognito_userid  VARCHAR (255),
                first_name VARCHAR(255) NOT NULL,
                last_name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                phone VARCHAR(255) UNIQUE NOT NULL,
                date_of_birth DATE NOT NULL,
                created_on DATE not null default CURRENT_DATE
                )
        `
}