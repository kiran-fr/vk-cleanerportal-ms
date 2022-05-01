export const DeleteWorkmanScheduleQuery = (event: any) => {
    return `
     DELETE from worksman_schedule_table where schedule_id = '${event.schedule_id}'
    `
}
