export const DeleteWorkmanScheduleQuery = (event:any) => {
    return ` DELETE from worksman_schedule WHERE
    worksman_id ='${event.worksman_id}' 
    AND schedule_day='${event.schedule_day}' 
    AND schedule_time='${event.schedule_time}'
    AND schedule_date='${event.schedule_date}'
    `
} 
