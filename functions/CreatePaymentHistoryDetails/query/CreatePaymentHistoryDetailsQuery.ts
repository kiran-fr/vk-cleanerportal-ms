
export const CreatePaymentHistoryDetailsQuery = (event: any) => {
    console.log('warn2',event)
    return `INSERT INTO workman_payment_history_table  (
        worksman_id,
        job_id ,
        payment_id ,
        payment_history_date ,
        payment_method ,
        payment_history_amount ,
        payment_history_material_cost ,
        payment_history_tip,
        payment_history_total 
        ) VALUES('${event.worksman_id}','${event.job_id}','${event.payment_id}',
        '${event.payment_history_date}','${event.payment_method}','${event.payment_history_amount}',
        '${event.payment_history_material_cost}','${event.payment_history_tip}',
        '${parseInt(event.payment_history_amount)+parseInt(event.payment_history_material_cost)+parseInt(event.payment_history_tip)}' )`

}
