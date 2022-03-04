export const WorksmnaScheduleQuery = (event:any) => {
    return `INSERT INTO worksman_schedule 
    (worksman_id,schedule_time,schedule_date,schedule_day,schedule_month,schedule_year)
                 VALUES('${event.worksman_id}','${event.schedule_time}','${event.schedule_date}',
                 '${event.schedule_day}','${event.schedule_month}','${event.schedule_year}')
    `
} 

export const getAllPostcodes = () => {
    return `SELECT * FROM worksman_postcodes`
}