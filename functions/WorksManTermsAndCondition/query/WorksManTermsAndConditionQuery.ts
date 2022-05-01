
export const WorksManTermsAndConditionQuery = (event:any) => {
    return `
        INSERT INTO worksman_terms_and_conditions_table (worksman_id,isWatched_howVrishkar_Works,isUnderstand_Worksman_Will_SelfEmployeed,isUnderstand_Vrishkar_isnot_responsible)
        VALUES ('${event.worksman_id}','${event.isWatched_howVrishkar_Works}','${event.isUnderstand_Worksman_Will_SelfEmployeed}','${event.isUnderstand_Vrishkar_isnot_responsible}')
    `
}

export const WorksmanTermsAndConditionStepQuery  = (worksmanId:any) => {
    console.warn(worksmanId)
    return ` UPDATE worksman_table SET current_step='worksman-T&C' , is_user_active_status=${false} WHERE worksman_id = '${worksmanId}'; `
  }

