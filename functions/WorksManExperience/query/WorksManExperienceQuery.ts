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



// delete from  worksman_experience_table