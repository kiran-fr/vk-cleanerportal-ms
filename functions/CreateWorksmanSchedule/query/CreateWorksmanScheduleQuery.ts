export const CreateWorksmanScheduleQuery = (event: any) => {

        return  `INSERT INTO worksman_schedule_table 
        (worksman_id,worksman_schedule_date,worksman_schedule_time)
         VALUES
         ${event.map((Evv:any)=> `('${Evv.worksman_id}','${Evv.worksman_schedule_date}','${Evv.worksman_schedule_time}')` )}             
         RETURNING *
         `
}