
export const CreateMessagesQuery  = (event:any) => {
    console.warn(event)
    return `INSERT INTO worksman_jobs  (
        worksman_id,
        user_id,
        chatting_person,
        chatting_person_name ,
        chat_message 
        ) VALUES('${event.worksman_id}','${event.user_id}','${event.chatting_person}',
        '${event.job_time}','${event.chatting_person_name}')`

}
