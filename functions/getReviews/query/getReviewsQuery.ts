export const getReviewsQuery = (event:any) => {
    
    return `SELECT * from review_table where worksman_id ='${event.worksman_id}' 
    and user_id = '${event.user_id}' `
} 
