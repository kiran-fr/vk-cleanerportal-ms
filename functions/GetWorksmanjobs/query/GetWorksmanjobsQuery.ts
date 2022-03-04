export const GetWorksmanjobsQuery = (event:any) => {
    
    return `SELECT * from worksman_jobs where worksman_id='${event.worksman_id}' `
} 
