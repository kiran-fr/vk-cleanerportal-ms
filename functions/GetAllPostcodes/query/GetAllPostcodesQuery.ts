export const GetAllPostcodesQuery = (event:any) => {
    
    return `SELECT postcodes from worksman_postcodes where worksman_id ='${event.worksman_id}' `
} 
