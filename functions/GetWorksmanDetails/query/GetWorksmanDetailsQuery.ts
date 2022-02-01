
export const GetWorksmanAccountRegistartionStatusQuery  = (worksmanId:any) => {
    console.warn(worksmanId)
    return ` SELECT first_name,last_name,email,date_of_birth FROM worksman_table WHERE worksman_id = ${worksmanId}`
}

export const getCurrentAccountStatusId = (email:any) =>{  
    return `
        SELECT worksman_id from worksman_table WHERE email='${email}'
    `
}