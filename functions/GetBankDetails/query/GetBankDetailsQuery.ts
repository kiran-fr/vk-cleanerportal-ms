export const GetBankDetailsQuery = (event:any) => {
    
    return `SELECT * from bank_details_table where worksman_id ='${event.worksman_id}' `
} 
