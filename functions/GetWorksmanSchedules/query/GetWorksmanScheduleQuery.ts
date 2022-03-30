export const GetWorksmanScheduleQuery = (event:any) => {
    
    return `SELECT * from worksman_schedule_table where worksman_id ='${event.worksman_id}' `
} 