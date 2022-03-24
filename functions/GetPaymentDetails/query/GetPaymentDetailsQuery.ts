export const GetPaymentDetailsQuery = (event:any) => {
    
    return `SELECT * FROM worksman_payment_table where worksman_id ='${event.worksman_id}' `
} 
