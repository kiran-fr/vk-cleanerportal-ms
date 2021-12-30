export const WorksManExperienceQuery = () => {
    return `INSERT INTO worksman_experience_table (
            worksman_id ,
            Have_house_cleaning_exp,
            Have_deep_cleaning_exp,
            Have_office_cleaning_exp,
            Have_oven_cleaning_exp,
            Have_gardening_exp ,
            Have_building_cleaning_exp,
            Have_hotel_cleaning_exp,
            Have_hospital_cleaning_exp,
            other_cleaning)
                 VALUES('worksman_experience_table_1','HOUE CLENAING EXP','HAVE DEEP CLEANING EXPT',
                'HAVE OFFICE CLEAN EXP','HAVE OVER CLENAING EXP',
                'HAVE GARDENING EXPT','HAVE BUILDING CLEANING EXP',
                'HAVE HOTEL CLEANING EXP','HAVE HOSPITAL CLENAING EXP',
                'OTHER CLEANING'
           )
    `
} 



// delete from  worksman_experience_table