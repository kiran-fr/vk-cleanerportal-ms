
export const UpdateWorksmanEmailQuery = (event: any) => {
    console.warn(event)

    return `UPDATE worksman_table
    SET email = '${event.email}'
    WHERE worksman_id = ${event.worksman_id}`
}

export const UpdateWorksmanPhoneQuery = (event: any) => {
    console.warn(event)
    return `UPDATE worksman_table
    SET phone='${event.phone}'
    WHERE worksman_id = ${event.worksman_id}`
}



