
export const UpdateBankDetailsQuery = (event: any) => {
    console.warn(event)
    
    return  `UPDATE bank_details_table
     SET account_number = '${event.account_number}', account_name = '${event.account_name}', 
     sort_code = '${event.sort_code}', bank_name = '${event.bank_name}'
     WHERE worksman_id = '${event.worksman_id}' AND bank_detail_id=${event.bank_detail_id}`
}



