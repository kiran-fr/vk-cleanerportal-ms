export const GetWorksmanSchedulesQuery = (event:any) => {
    
    return `SELECT worksman_id,schedule_time,schedule_date,schedule_day,schedule_month,schedule_year from worksman_schedule where worksman_id ='${event.worksman_id}' `
} 