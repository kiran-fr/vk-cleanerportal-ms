
export const CreateMessagesQuery = (event: any) => {
    console.warn(event)
    return `INSERT INTO worksman_jobs_table  (
        worksman_id,
        customer_id,
        job_title,
        job_description,
        job_hours,
        job_time,
        job_date,
        job_status,
        ) VALUES('${event.worksman_id}','${event.customer_id}','${event.job_title}',
        '${event.job_description}','${event.job_hours}','${event.job_time}','${event.job_date}',
        '${event.job_status}' )`

}
