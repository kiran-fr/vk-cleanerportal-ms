export const GetWorksmanSchedulesQuery = (event:any) => {
    
    return `SELECT schedule_day,schedule_time from worksman_schedule where worksman_id ='${event.worksman_id}' `
} 