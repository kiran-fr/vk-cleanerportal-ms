
export const WorksManTermsAndConditionQuery = () => {
    return `
        INSERT INTO worksman_terms_and_conditions_table (worksman_id,isWatched_howVrishkar_Works,isUnderstand_Worksman_Will_SelfEmployeed,isUnderstand_Vrishkar_isnot_responsible)
        VALUES ('2','YES I WATCHED','YES I UNDERSTAND','YES VRISHKAR NOT RESPONSIBLE')
    `
}

export const getUserRegistrationQuery = () =>{
    return `
        SELECT * FROM worksman_table 
    `
}