
export const CreateReviewsQuery  = (event:any) => {
    console.warn(event)
    return `INSERT INTO review_table  (
        job_id,
        workman_id,
        customer_review,
        customer_rating,
        ) VALUES('${event.job_id}','${event.workman_id}','${event.customer_review}',
        '${event.customer_rating}')`

}
