export const GetJobsQuery = (event: any) => {
    return `SELECT * from jobs_table where worksman_id ='${event.worksman_id}'`
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