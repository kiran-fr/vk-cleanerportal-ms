export const GetWorksmanScheduleQuery = (event: any) => {

        return `SELECT * from worksman_schedule_table 
        WHERE worksman_id ='${event.worksman_id}' 
        AND schedule_date='${event.schedule_date}' `
} 