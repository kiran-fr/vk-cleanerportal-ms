export const GetListOfJobsBasedOnMonthQuery = (event:any) => {
    
    return `SELECT * FROM worksman_jobs_table 
    INNER JOIN customer_table
    INNER JOIN customer_address_table
    ON CAST ( customer_address_table.customer_id AS INTEGER)  = customer_table.customer_id 
    ON customer_table.customer_id = CAST( worksman_jobs_table.customer_id AS INTEGER) 
    WHERE worksman_id='${event.worksman_id}' and job_mon_year='${event.job_mon_year}' `
} 
