export const GetMessagesQuery = (event:any) => {
    
    return `SELECT * from chatting_table where worksman_id ='${event.worksman_id}' 
    and user_id = '${event.user_id}' `
} 
