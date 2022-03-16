
export const WorksmanjobsCreateQuery  = (event:any) => {
    console.warn(event)
    return `INSERT INTO worksman_jobs  (
        worksman_id,
        user_id,
        customer_name,
        job_title,
        job_hours,
        job_time ,
        address ,
        service,
        sub_services,
        job_status,
        payment_status,
        customer_reviews,
        customer_ratings 
        ) VALUES('${event.worksman_id}','${event.user_id}','${event.customer_name}','${event.job_title}','${event.job_hours}',
        '${event.job_time}','${event.address}','${event.service}','${event.sub_services}','${event.job_status}',
        '${event.payment_status}', '${event.customer_reviews}','${event.customer_ratings}')`

}