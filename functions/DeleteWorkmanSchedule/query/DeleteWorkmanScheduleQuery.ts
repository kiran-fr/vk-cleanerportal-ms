export const DeleteWorkmanScheduleQuery = (event: any) => {
    return `
    delete from worksman_schedule_table where worksman_schedule_id = '${event.worksman_schedule_id}'
    `
}