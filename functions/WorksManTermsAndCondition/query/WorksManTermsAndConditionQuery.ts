
export const WorksManTermsAndConditionQuery = (event:any, Worksman_id: any) => {
    console.log('this is event',event)
    // console.log('this is EMAIL',email)
    return `
        INSERT INTO worksman_terms_and_conditions_table (worksman_id,isWatched_howVrishkar_Works,isUnderstand_Worksman_Will_SelfEmployeed,isUnderstand_Vrishkar_isnot_responsible)
        VALUES ('${Worksman_id}','${event.isWatched_howVrishkar_Works}','${event.isUnderstand_Worksman_Will_SelfEmployeed}','${event.isUnderstand_Vrishkar_isnot_responsible}')
    `
}
 
export const getWorksManTermsIdQuery = (email:any) =>{
  
    return `
        SELECT worksman_id from worksman_table WHERE email='${email}'
    `
}


