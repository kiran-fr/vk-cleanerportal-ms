export const WorksmnaScheduleQuery = (event:any) => {
    return `INSERT INTO worksman_schedule (worksman_id,schedule_day,schedule_time )
                 VALUES('${event.worksman_id}','${event.schedule_day}','${event.schedule_time}')
    `
} 

export const getAllPostcodes = () => {
    return `SELECT * FROM worksman_postcodes`
}