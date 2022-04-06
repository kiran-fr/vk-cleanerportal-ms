export const GetAllPostcodesQuery = (event: any) => {

    return `SELECT * from worksman_postcodes where worksman_id ='${event.worksman_id}' `
} 
