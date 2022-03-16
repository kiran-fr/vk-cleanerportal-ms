
export const CreateMessagesQuery  = (event:any) => {
    console.warn(event)
    return `INSERT INTO chatting_table  (
        worksman_id,
        user_id,
        chatting_person,
        chatting_person_name,
        chat_message 
        ) VALUES('${event.worksman_id}','${event.user_id}','${event.chatting_person}',
        '${event.chatting_person_name}','${event.chat_message}')`

}
