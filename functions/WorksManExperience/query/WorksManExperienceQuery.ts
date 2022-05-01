export const WorksManExperienceQuery = (event: any) => {
    return `INSERT INTO worksman_experience_table ( worksman_id, years_of_cleaning_exp, Have_end_of_tendency,
        Have_hotel_cleaning, Have_house_cleaning, Have_hospital_cleaning, Have_office_cleaning,
        Have_other_cleaning, Have_Right_to_Work, Have_UK_BankAccount, Have_Criminal_Records )
                 VALUES('${event.worksman_id}','${event.years_of_cleaning_exp}','${event.Have_end_of_tendency}',
                '${event.Have_hotel_cleaning}','${event.Have_house_cleaning}','${event.Have_hospital_cleaning}',
                '${event.Have_office_cleaning}','${event.Have_other_cleaning}', '${event.Have_Right_to_Work}',
                '${event.Have_UK_BankAccount}','${event.Have_Criminal_Records}'
           )
    `
}

export const WorksmanEligibilityQuery = (event: any) => {
    console.warn("This is worksman eligibility", event)
    return `
        INSERT INTO worksman_eligibility_table ( worksman_id , Have_Right_to_Work, Have_UK_BankAccount, Have_Criminal_Records ) 
        VALUES('${event.worksman_id}','${event.Have_Right_to_Work}','${event.Have_UK_BankAccount}','${event.Have_Criminal_Records}')
    `
}


export const WorksmanExperienceStepQuery = (worksmanId: any) => {
    console.warn(worksmanId)
    return ` UPDATE worksman_table SET current_step ='worksmanexperience' WHERE worksman_id = '${worksmanId}'; `
}