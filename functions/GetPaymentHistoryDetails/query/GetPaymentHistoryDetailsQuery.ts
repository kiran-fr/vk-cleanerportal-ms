export const GetPaymentHistoryDetailsQuery = (event: any) => {

    return `
    SELECT * FROM workman_payment_history_table 
    left JOIN jobs_table    
	INNER JOIN customer_table	
	INNER JOIN customer_address_table
    ON customer_table.customer_id = CAST (customer_address_table.customer_id AS INTEGER) 
	ON customer_table.customer_id = CAST (jobs_table.customer_id AS INTEGER) 
    ON jobs_table.job_id = CAST (workman_payment_history_table.job_id AS INTEGER) 
    WHERE workman_payment_history_table.worksman_id ='${event.worksman_id}' and jobs_table.worksman_id ='${event.worksman_id}'
    `
}