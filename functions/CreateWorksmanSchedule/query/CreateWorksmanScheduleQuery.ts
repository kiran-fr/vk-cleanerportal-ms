export const CreateWorksmanScheduleQuery = (event: any) => {

        console.log("This is create worksman schedule query", event)

        return `INSERT INTO worksman_schedule_table 
                (worksman_id,schedule_date,schedule_time,is_active)
                VALUES
                ${event.schedule_time.map((time: any) => `('${event.worksman_id}',
                '${event.schedule_date}','${time}',${event.is_active})`)}             
                RETURNING *
`
}


export const GetWorkmanScheduleQuery = (event: any) => {
        return `
        SELECT * from worksman_schedule_table where worksman_id = '${event.worksman_id}';
        `
}


export const UpdateWorkmanScheduleQuery = (event:any,time: any) => {
        console.warn("update data",event)
        console.warn("update data",time)
        return `
        UPDATE worksman_schedule_table SET is_active='${0}' WHERE 
        worksman_id = '${event.worksman_id}' and schedule_time = '${time}' and 
        schedule_date= '${event.date}' and is_active=${1};
        `
}
