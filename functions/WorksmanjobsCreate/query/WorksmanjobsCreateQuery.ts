
export const WorksmanjobsCreateQuery  = (event:any) => {
    console.warn(event)
    return `INSERT INTO worksman_jobs  (
        worksman_id,
        job_title,
        job_hours,
        job_time ,
        job_date ,
        job_month ,
        job_year ,
        job_status ,
        customer_reviews ,
        customer_ratings 
        ) VALUES('${event.worksman_id}','${event.job_title} ${event.job_hours}','${event.job_time}','${event.job_date}',
        '${event.job_month}','${event.job_year}','${event.job_status}','${event.customer_reviews}','${event.customer_ratings}')`

}

export const getCurrentAccountStatusId = (email:any) =>{  
    return `
        SELECT worksman_id from worksman_table WHERE email='${email}'
    `
}

