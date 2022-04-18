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
        is_user_active_status BOOLEAN
        created_on TIMESTAMP not null default current_timestamp
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
                created_on TIMESTAMP not null default current_timestamp
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
        created_on TIMESTAMP not null default current_timestamp
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
        created_on TIMESTAMP not null default current_timestamp
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
        created_on TIMESTAMP not null default current_timestamp
        )
        `
}
const worksman_postcodes = () => {
        return `        
        DROP TABLE IF EXISTS worksman_postcodes ;

        CREATE TABLE worksman_postcodes (
                postcodes_id BIGSERIAL PRIMARY KEY,
                worksman_id  VARCHAR (255) NOT NULL,
                postcodes VARCHAR(255) NOT NULL,
                district VARCHAR(255) NOT NULL,
                created_on TIMESTAMP not null default current_timestamp
             )
        `
}
const worksman_schedule_table = () => {
        return `        
        DROP TABLE IF EXISTS worksman_schedule_table ;
      
CREATE TABLE worksman_schedule_table(
            worksman_schedule_id BIGSERIAL PRIMARY KEY,
            worksman_id VARCHAR(225) NOT NULL,
            worksman_schedule_date VARCHAR(225) NOT NULL,
            worksman_schedule_time VARCHAR(225) NOT NULL,
            created_on TIMESTAMP not null default current_timestamp
    )
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
                          created_on TIMESTAMP not null default current_timestamp
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
                bank_name VARCHAR(255) UNIQUE NOT NULL,
                created_on TIMESTAMP not null default current_timestamp
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
                 created_on TIMESTAMP not null default current_timestamp
                    );
        `
}

const cutomer_table = () => {
        return `        
        DROP TABLE IF EXISTS cutomer_table ;

        CREATE TABLE cutomer_table (
                customer_id SERIAL PRIMARY KEY,
                customer_name VARCHAR(255) NOT NULL,
                customer_email VARCHAR(255) UNIQUE NOT NULL,
                customer_phone_number VARCHAR(255) UNIQUE NOT NULL,
                created_on TIMESTAMP not null default current_timestamp
                )
        `
}

const customer_address_table = () => {
        return `        
        DROP TABLE IF EXISTS customer_address_table ;

        CREATE TABLE customer_address_table (
                customer_address_id BIGSERIAL PRIMARY KEY,
                customer_id VARCHAR(225) NOT NULL ,
                street VARCHAR(225) NOT NULL ,
                post_code VARCHAR(225) NOT NULL ,
                country VARCHAR(225) NOT NULL,
                created_on TIMESTAMP not null default current_timestamp
        )
				
        `
}


const jobs_table = () => {
        return `        
        DROP TABLE IF EXISTS jobs_table ;

        CREATE TABLE jobs_table (
                job_id BIGSERIAL PRIMARY KEY,
                worksman_id VARCHAR(225) NOT NULL,
                customer_id VARCHAR(225) NOT NULL,
                job_title VARCHAR(225) NOT NULL,
                job_description VARCHAR(225) NOT NULL,
                job_hours VARCHAR(225) NOT NULL,
                job_time VARCHAR(225) NOT NULL,
                job_date VARCHAR(225) NOT NULL,
                job_status VARCHAR(225) NOT NULL,
                created_on TIMESTAMP not null default current_timestamp
                )
				
        `
}
const review_table = () => {
        return `        
        DROP TABLE IF EXISTS review_table ;

        CREATE TABLE review_table (
                reviwe_id BIGSERIAL PRIMARY KEY,
                job_id VARCHAR(225) NOT NULL,
                workman_id VARCHAR(225) NOT NULL,
                customer_review VARCHAR(225) NOT NULL,
                customer_rating VARCHAR(225) NOT NULL,
                created_on TIMESTAMP not null default current_timestamp
                )
				
        `
}


const payment_table = () => {
        return `        
        DROP TABLE IF EXISTS payment_table ;

        CREATE TABLE worksman_payment_table (
                payment_id BIGSERIAL PRIMARY KEY,
                worksman_id VARCHAR(225) NOT NULL,
                payment_date VARCHAR(225) NOT NULL,
                payment_status VARCHAR(225) NOT NULL,
                payment_period_end VARCHAR(225) NOT NULL,
                payment_netpay VARCHAR(225) NOT NULL,
                payment_tip VARCHAR(225) NOT NULL,
                payment_material_cost VARCHAR(225) NOT NULL,
                payment_total VARCHAR(225) NOT NULL,
                created_on TIMESTAMP not null default current_timestamp
                )
                

                INSERT INTO worksman_payment_table (
                        worksman_id,
        payment_date ,
        payment_status ,
        payment_period_end ,
        payment_netpay ,
        payment_tip ,
        payment_material_cost ,
        payment_total 
        ) VALUES ('45','21-03-2022','Done','1.03.2022 - 21.03.2022','310','150','50','510')
                
                
                `
}



const workman_payment_history_table = () => {
        return `        
        DROP TABLE IF EXISTS workman_payment_history_table ;
        
        CREATE TABLE workman_payment_history_table (
                payment_history_id BIGSERIAL PRIMARY KEY,
                payment_id VARCHAR(225) NOT NULL,
                job_id VARCHAR(225) NOT NULL,
                payment_history_date VARCHAR(225) NOT NULL,
                payment_history_amount VARCHAR(225) NOT NULL,
                payment_history_material_cost VARCHAR(225) NOT NULL,
                payment_history_tip VARCHAR(225) NOT NULL,
                payment_history_total VARCHAR(225) NOT NULL,
                created_on TIMESTAMP not null default current_timestamp
                )		
        `
}

// insertion

const district_postcodes = () => {
        return `INSERT INTO worksman_dstricts_postcode (
                district ,
                postcode
        ) VALUES ('Dartford', 'BR8'),
                ('Dartford', 'DA1'),
                ('Dartford','DA10'),
                ('Dartford','DA11'),
                ('Dartford','DA13'),   
                ('Dartford','DA14'),
                ('Dartford','DA17'),
                ('Dartford','DA2'),
                ('Dartford','DA3'),
                ('Dartford', 'DA4'),
                ('Dartford', 'DA5'),
                ('Dartford', 'DA9'),
                ('Sevenoaks', 'BR6'),
                ('Sevenoaks', 'BR8'),
                ('Sevenoaks','DA13'),
                ('Sevenoaks','DA2'),
                ('Sevenoaks','DA3'),   
                ('Sevenoaks','DA4'),
                ('Sevenoaks','TN11'),
                ('Sevenoaks','TN13'),
                ('Sevenoaks','TN14'),
                ('Sevenoaks', 'TN15'),
                ('Sevenoaks', 'TN16'),
                ('Sevenoaks', 'TN3'),
                ('Sevenoaks','TN8')
                ('Gravesham', 'DA11'),
                ('Gravesham', 'DA12'),
                ('Gravesham','DA13'),
                ('Gravesham','DA3'),
                ('Gravesham','ME2'),   
                ('Gravesham','ME3'),
                ('Gravesham','TN15'),
                ('Tonbridge and Malling', 'DA13'),
                ('Tonbridge and Malling', 'ME1'),
                ('Tonbridge and Malling', 'ME16'),
                ('Tonbridge and Malling', 'ME18'),
                ('Tonbridge and Malling', 'ME19'),
                ('Tonbridge and Malling', 'ME2'),
                ('Tonbridge and Malling', 'ME20'),
                ('Tonbridge and Malling', 'ME5'),
                ('Tonbridge and Malling', 'ME6'),
                ('Tonbridge and Malling', 'TN1'),
                ('Tonbridge and Malling', 'TN10'),
                ('Tonbridge and Malling', 'TN11'),
                ('Tonbridge and Malling', 'TN12'),
                ('Tonbridge and Malling', 'TN15'),
                ('Tonbridge and Malling', 'TN2'),
                ('Tonbridge and Malling', 'TN3'),
                ('Tonbridge and Malling', 'TN4'),
                ('Tonbridge and Malling', 'TN5'),
                ('Tonbridge and Malling', 'TN9'),
                ('Medway', 'ME1'),
                ('Medway', 'ME2'),
                ('Medway', 'ME3'),
                ('Medway', 'ME4'),
                ('Medway', 'ME5'),
                ('Medway', 'ME7'),
                ('Medway', 'ME8'),
                ('Medway', 'ME9'),
                ('Medway', 'ME99'),
                ('Maidstone', 'ME13'),
                ('Maidstone', 'ME14'),
                ('Maidstone', 'ME15'),
                ('Maidstone', 'ME16'),
                ('Maidstone', 'ME17'),
                ('Maidstone', 'ME18'),
                ('Maidstone', 'ME20'),
                ('Maidstone', 'ME5'),
                ('Maidstone', 'ME7'),
                ('Maidstone', 'ME9'),
                ('Maidstone', 'ME99'),
                ('Maidstone', 'TN12'),
                ('Maidstone', 'TN17'),
                ('Maidstone', 'TN27'),
                ('Tunbridge Wells', 'TN1'),
                ('Tunbridge Wells', 'TN11'),
                ('Tunbridge Wells', 'TN12'),
                ('Tunbridge Wells', 'TN17'),
                ('Tunbridge Wells', 'TN18'),
                ('Tunbridge Wells', 'TN2'),
                ('Tunbridge Wells', 'TN20'),
                ('Tunbridge Wells', 'TN27'),
                ('Tunbridge Wells', 'TN3'),
                ('Tunbridge Wells', 'TN4'),
                ('Tunbridge Wells', 'TN5'),
                ('Swale', 'CT2'),
                ('Swale', 'ME10'),
                ('Swale', 'ME11'),
                ('Swale', 'ME12'),
                ('Swale', 'ME13'),
                ('Swale', 'ME8'),
                ('Swale', 'ME9'),
                ('Swale', 'TN24'),
                ('Swale', 'TN27'),
                ('Ashford', 'CT4'),
                ('Ashford', 'ME13'),
                ('Ashford', 'ME17'),
                ('Ashford', 'TN17'),
                ('Ashford', 'TN18'),
                ('Ashford', 'TN23'),
                ('Ashford', 'TN24'),
                ('Ashford', 'TN25'),
                ('Ashford', 'TN26'),
                ('Ashford', 'TN27'),
                ('Ashford', 'TN30'),
                ('Canterbury', 'CT1'),
                ('Canterbury', 'CT2'),
                ('Canterbury', 'CT3'),
                ('Canterbury', 'CT4'),
                ('Canterbury', 'CT5'),
                ('Canterbury', 'CT6'),
                ('Canterbury', 'CT7'),
                ('Folkestone and Hythe', 'CT15'),
                ('Folkestone and Hythe', 'CT16'),
                ('Folkestone and Hythe', 'CT18'),
                ('Folkestone and Hythe', 'CT19'),
                ('Folkestone and Hythe', 'CT20'),
                ('Folkestone and Hythe', 'CT21'),
                ('Folkestone and Hythe', 'CT4'),
                ('Folkestone and Hythe', 'CT50'),
                ('Folkestone and Hythe', 'TN25'),
                ('Folkestone and Hythe', 'TN26'),
                ('Folkestone and Hythe', 'TN28'),
                ('Folkestone and Hythe', 'TN29'),
                ('Folkestone and Hythe', 'TN31'),
                ('Thanet', 'CT10'),
                ('Thanet', 'CT11'),
                ('Thanet', 'CT12'),
                ('Thanet', 'CT13'),
                ('Thanet', 'CT7'),
                ('Thanet', 'CT8'),
                ('Thanet', 'CT9'),
                ('Dover', 'CT13'),
                ('Dover', 'CT14'),
                ('Dover', 'CT15'),
                ('Dover', 'CT16'),
                ('Dover', 'CT17'),
                ('Dover', 'CT18'),
                ('Dover', 'CT2'),
                ('Dover', 'CT3'),
                ('Dover', 'CT4')
                `
                
}




// CREATE TABLE workman_payment_history_table (
//         payment_history_id BIGSERIAL PRIMARY KEY,
//         payment_id VARCHAR(225) NOT NULL,
//         job_id VARCHAR(225) NOT NULL,
//         payment_history_date VARCHAR(225) NOT NULL,
//         payment_history_amount VARCHAR(225) NOT NULL,
//         payment_history_material_cost VARCHAR(225) NOT NULL,
//         payment_history_tip VARCHAR(225) NOT NULL,
//         payment_history_total VARCHAR(225) NOT NULL,
//         created_on TIMESTAMP not null default current_timestamp
//         )



// INSERT INTO workman_payment_history_table (
//         payment_id ,
//         job_id ,
//         payment_history_date ,
//         payment_method ,
//         payment_history_amount ,
//         payment_history_material_cost ,
//         payment_history_tip ,
//         payment_history_total 
//         ) VALUES ('1','1','8-02-2022','Phone Pay','250','50','20','320')