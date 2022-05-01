
export const CreateBankDetailsQuery  = (event:any) => {
    return `INSERT INTO bank_details_table  (
        worksman_id,
        account_name,
        sort_code,
        account_number ,
        bank_name 
        ) VALUES('${event.worksman_id}','${event.account_name}' ,'${event.sort_code}',
        '${event.account_number}','${event.bank_name}')`

}
