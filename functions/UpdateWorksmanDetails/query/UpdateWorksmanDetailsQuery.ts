
export const UpdateWorksmanDetailsQuery  = (event:any) => {
    console.warn(event)
    return ` UPDATE worksman_table SET phone=${event.phone},email=${event.email} WHERE worksman_id = ${event.worksman_id}`
}

export const getCurrentAccountStatusId = (email:any) =>{  
    return `
        SELECT worksman_id from worksman_table WHERE email='${email}'
    `
}
