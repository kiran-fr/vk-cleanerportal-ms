export const GetAllPostcodesQuery = (event:any) => {
    
    return `SELECT postcodes,worksman_id from worksman_postcodes where worksman_id ='${event.worksman_id}' `
} 
// card ,
// postcodes
// width of tick mark in terms and conditions
// worksman_id,worksman_day,workman_time,
// 2,thus,02:00pm-04:00pm
// 2,Thu,04:00pm-06:00pm
// 2,Mon,08:00am-10:00am
// 2,Tue,12:00pm-02:00pm