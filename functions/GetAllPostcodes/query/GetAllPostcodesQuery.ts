export const GetAllPostcodesQuery = (event:any) => {
    
    return `SELECT postcodes,worksman_id from worksman_postcodes where worksman_id ='${event.worksman_id}' `
} 
