export const WorksManExperienceQuery = (event:any) => {
    return `INSERT INTO worksman_experience_table (
            worksman_id,
            years_of_cleaning_exp,
            Have_house_cleaning_exp,
            Have_deep_cleaning_exp,
            Have_office_cleaning_exp,
            Have_oven_cleaning_exp,
            Have_gardening_exp,
            Have_building_cleaning_exp,
            Have_hotel_cleaning_exp,
            Have_hospital_cleaning_exp,
            Have_retail_cleaning_exp,
            other_cleaning
            )
                 VALUES('${event.worksman_id}','${event.years_of_cleaning_exp}','${event.Have_house_cleaning_exp}',
                '${event.Have_deep_cleaning_exp}','${event.Have_office_cleaning_exp}',
                '${event.Have_oven_cleaning_exp}','${event.Have_gardening_exp}',
                '${event.Have_building_cleaning_exp}','${event.Have_hotel_cleaning_exp}','${event.Have_hospital_cleaning_exp}',
                '${event.Have_retail_cleaning_exp}','${event.other_cleaning}'
           )
    `
} 


export const WorksmanEligibilityQuery = (event:any) => {
    return `
        INSERT INTO worksman_eligibility_table (
        worksman_id ,
        Have_Right_to_Work,
        Have_UK_BankAccount,
        Have_Criminal_Records
        ) VALUES('${event.worksman_id}','${event.Have_Right_to_Work}','${event.Have_UK_BankAccount}','${event.Have_Criminal_Records}')
    `
}

// delete from  worksman_experience_table