export const DeletePostcodesQuery = (event:any) => {
    return ` delete from worksman_postcodes where worksman_id ='${event.worksman_id}' and postcodes='${event.postcodes}'`
} 
