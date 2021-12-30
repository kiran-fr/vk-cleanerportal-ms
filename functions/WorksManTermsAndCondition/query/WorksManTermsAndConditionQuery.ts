
export const WorksManTermsAndConditionQuery = (event:any) => {
    console.log('this is event',event)
    return `
        INSERT INTO worksman_terms_and_conditions_table (worksman_id,isWatched_howVrishkar_Works,isUnderstand_Worksman_Will_SelfEmployeed,isUnderstand_Vrishkar_isnot_responsible)
        VALUES ('${event.worksman_id}','${event.isWatched_howVrishkar_Works}','${event.isUnderstand_Worksman_Will_SelfEmployeed}','${event.isUnderstand_Vrishkar_isnot_responsible}')
    `
}

export const getUserRegistrationQuery = () =>{
    return `
        SELECT * FROM worksman_table 
    `
}