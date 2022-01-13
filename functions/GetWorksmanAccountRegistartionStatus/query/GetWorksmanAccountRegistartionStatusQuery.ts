
export const GetWorksmanAccountRegistartionStatusQuery  = (worksmanId:any) => {
    console.warn(worksmanId)
    return ` SELECT current_step FROM worksman_table WHERE worksman_id = ${worksmanId}`
}

export const getCurrentAccountStatusId = (email:any) =>{  
    return `
        SELECT worksman_id from worksman_table WHERE email='${email}'
    `
}