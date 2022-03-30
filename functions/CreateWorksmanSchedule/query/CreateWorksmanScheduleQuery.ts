export const CreateWorksmanScheduleQuery = (event: any) => {
    return `INSERT INTO worksman_schedule_table 
    (worksman_id,worksman_schedule_date,worksman_schedule_time)
                 VALUES('${event.worksman_id}','${event.worksman_schedule_date}','${event.worksman_schedule_time}') `
}
