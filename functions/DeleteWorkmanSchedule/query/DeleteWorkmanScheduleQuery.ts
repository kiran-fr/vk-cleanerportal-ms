export const DeleteWorkmanScheduleQuery = (event: any) => {
    return `
    delete from worksman_schedule_table where worksman_id='42' and worksman_schedule_date='${event.worksman_schedule_date}' and 
worksman_schedule_time = '${event.worksman_schedule_time}'
    `
}