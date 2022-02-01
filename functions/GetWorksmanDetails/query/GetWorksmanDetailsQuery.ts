
export const GetWorksmanDetailsQuery  = (worksmanId:any) => {
    console.warn(worksmanId)
    return ` SELECT first_name,last_name,email,date_of_birth,nationality,gender FROM worksman_table WHERE worksman_id = ${worksmanId}`
}
