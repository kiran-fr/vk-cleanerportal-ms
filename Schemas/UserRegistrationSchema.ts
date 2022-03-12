export const Schema = () => {
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

const worksman_Table = () => {
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
        gender VARCHAR(255) NOT NULL,
        nationality VARCHAR(255) NOT NULL,
        current_step VARCHAR(255),
        iscompleted_registration_process VARCHAR(255),
        created_on DATETIME DEFAULT CURRENT_TIMESTAMP
        )
        `
}

const Worksman_terms_and_conditions_table = () => {
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
        Have_end_of_tendency VARCHAR(255) NOT NULL,
        Have_hotel_cleaning VARCHAR(255) NOT NULL,
        Have_house_cleaning VARCHAR(255) NOT NULL,
        Have_hospital_cleaning VARCHAR(255) NOT NULL,
        Have_office_cleaning VARCHAR(255) NOT NULL,
        Have_other_cleaning VARCHAR(255) NOT NULL,
        Have_Right_to_Work VARCHAR(255) NOT NULL,
        Have_UK_BankAccount VARCHAR(255) NOT NULL,
        Have_Criminal_Records VARCHAR(255) NOT NULL,
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
const worksman_postcodes = () => {
        return `        
        DROP TABLE IF EXISTS worksman_postcodes ;

        CREATE TABLE worksman_postcodes (
                postcodes_id SERIAL PRIMARY KEY,
                worksman_id  VARCHAR (255) NOT NULL,
                postcodes VARCHAR(255) NOT NULL
             );
        `
}
const worksman_schedule = () => {
        return `        
        DROP TABLE IF EXISTS worksman_schedule ;

          CREATE TABLE worksman_schedule (
                          worksman_schedule_id SERIAL PRIMARY KEY,
                          worksman_id  VARCHAR (255) NOT NULL,
                          schedule_day VARCHAR(255) NOT NULL,
                	  schedule_time VARCHAR(255) NOT NULL
                              );
        `
}

const worksman_jobs = () => {
        return `        
        DROP TABLE IF EXISTS worksman_jobs ;

          CREATE TABLE worksman_jobs (
                          worksman_schedule_id SERIAL PRIMARY KEY,
                          worksman_id VARCHAR(255) NOT NULL,
                          job_title VARCHAR(255) NOT NULL,
                          job_hours VARCHAR(255) NOT NULL,
                          job_time VARCHAR(255) NOT NULL,
                          job_date VARCHAR(255) NOT NULL,
                          job_month VARCHAR(255) NOT NULL,
                          job_year VARCHAR(255) NOT NULL,
                          job_status VARCHAR(255) NOT NULL,
                          job_reg_date VARCHAR(255) NOT NULL,
                          customer_reviews VARCHAR(255) NOT NULL,
                          customer_ratings VARCHAR(255) NOT NULL
                          created_on DATE not null default CURRENT_DATE
                              );
        `
}
const bank_details = () => {
        return `        
        DROP TABLE IF EXISTS bank_details_table ;

        CREATE TABLE bank_details_table (
                bank_detail_id SERIAL PRIMARY KEY,
                worksman_id VARCHAR(255) NOT NULL,
                account_name VARCHAR(255) NOT NULL,
                sort_code VARCHAR(255) NOT NULL,
                account_number VARCHAR(255) NOT NULL,
                bank_name VARCHAR(255) NOT NULL,
                created_on DATE not null default CURRENT_DATE
                    );
        `
}
const chatting_table = () => {
        return `        
        DROP TABLE IF EXISTS chatting_table ;

        CREATE TABLE chatting_table (
                chatting_id SERIAL PRIMARY KEY,
                worksman_id VARCHAR(255) NOT NULL,
                user_id VARCHAR(255) NOT NULL,
                chatting_person VARCHAR(255) NOT NULL,
                chatting_person_name VARCHAR(255) NOT NULL,
	 	chat_message VARCHAR(255) NOT NULL,
                created_on DATE not null default CURRENT_DATE
                    );
        `
}

