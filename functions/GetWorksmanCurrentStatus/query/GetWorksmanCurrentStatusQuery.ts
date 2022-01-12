
export const GetWorksmanCurrentStatusQuery  = (worksmanId:any) => {
    console.warn(worksmanId)
    return ` SELECT current_step FROM worksman_table WHERE worksman_id = ${worksmanId}`
}