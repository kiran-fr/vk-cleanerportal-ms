export const GetJobsQuery = (event: any) => {
    return `SELECT * FROM worksman_jobs_table 
    INNER JOIN customer_table
    INNER JOIN customer_address_table
    ON CAST ( customer_address_table.customer_id AS INTEGER)  = customer_table.customer_id 
    ON customer_table.customer_id = CAST( worksman_jobs_table.customer_id AS INTEGER) WHERE worksman_id='${event.worksman_id}'`
}

export const GetReviewsQuery = (worksman_id: any) => {
    return `SELECT * from review_table where worksman_id ='${worksman_id}' `
}

export const  getCustomerDetails = () => {
    return ` SELECT * from customer_table `
}

export const getCustomerAddress = () => {
    return ` SELECT * from customer_address_table `
}