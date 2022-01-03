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

const worksman_Table = () =>{
        return `
        DROP TABLE IF EXISTS worksman_Table;

        CREATE TABLE worksman_table (
        worksman_id SERIAL PRIMARY KEY,
        cognito_id  VARCHAR (255) NOT NULL,
        first_name VARCHAR(255) NOT NULL,
        last_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        phone VARCHAR(255) UNIQUE NOT NULL,
        date_of_birth VARCHAR(255) NOT NULL,
        current_step VARCHAR(255),
        iscompleted_registration_process VARCHAR(255),
        created_on DATE not null default CURRENT_DATE
        )
        `
}

const Worksman_terms_and_conditions_table = () =>{
        return `
        DROP TABLE IF EXISTS worksman_terms_and_conditions_table;

        CREATE TABLE worksman_terms_and_conditions_table (
                terms_and_conditions_id SERIAL PRIMARY KEY,
                worksman_id VARCHAR(255) UNIQUE NOT NULL,
                isWatched_howVrishkar_Works VARCHAR(255) NOT NULL,
                isUnderstand_Worksman_Will_SelfEmployeed VARCHAR(255) NOT NULL,
                isUnderstand_Vrishkar_isnot_responsible VARCHAR(255) NOT NULL,
                created_on DATE not null default CURRENT_DATE
                )
        `
}

const worksman_experience_table = () => {
        return `
        DROP TABLE IF EXISTS worksman_experience_table;

        CREATE TABLE worksman_experience_table (
        worksman_exp_id SERIAL PRIMARY KEY,
        worksman_id  VARCHAR (255) UNIQUE NOT NULL,
        years_of_cleaning_exp VARCHAR(255) NOT NULL,
        Have_house_cleaning_exp VARCHAR(255) NOT NULL,
        Have_deep_cleaning_exp VARCHAR(255) NOT NULL,
        Have_office_cleaning_exp VARCHAR(255) NOT NULL,
        Have_oven_cleaning_exp VARCHAR(255) NOT NULL,
        Have_gardening_exp VARCHAR(255) NOT NULL,
        Have_building_cleaning_exp VARCHAR(255) NOT NULL,
        Have_hotel_cleaning_exp VARCHAR(255) NOT NULL,
        Have_hospital_cleaning_exp VARCHAR(255) NOT NULL,
        Have_retail_cleaning_exp VARCHAR(255) NOT NULL,
        other_cleaning VARCHAR(255) NOT NULL,
        created_on DATE not null default CURRENT_DATE
        )
        
        `
}

const worksman_eligibility_table = () => {
        return `
        DROP TABLE IF EXISTS worksman_eligibility_table;

        CREATE TABLE worksman_eligibility_table (
        worksman_eligibulity_id SERIAL PRIMARY KEY,
        worksman_id  VARCHAR (255) NOT NULL,
        Have_Right_to_Work VARCHAR(255) NOT NULL,
        Have_UK_BankAccount VARCHAR(255) NOT NULL,
        Have_Criminal_Records VARCHAR(255) NOT NULL,
        created_on DATE not null default CURRENT_DATE
        )
        `
}


const Worksman_Address_Table = () => {
        return `        
        DROP TABLE IF EXISTS Worksman_Address_Table ;

        CREATE TABLE Worksman_Address_Table  (
        Address_id SERIAL PRIMARY KEY,
        worksman_id  VARCHAR (255) NOT NULL,
        first_line VARCHAR(255) NOT NULL,
        second_line VARCHAR(255) NOT NULL,
        county VARCHAR(255) NOT NULL,
        city VARCHAR(255) NOT NULL,
        postcode VARCHAR(255) NOT NULL,
        created_on DATE not null default CURRENT_DATE
        )
        `
}


// select * from worksman_table where email='kiran.budipi@vrishkar.com';