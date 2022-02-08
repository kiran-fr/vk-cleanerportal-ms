export const UserPostCodesQuery = (event:any) => {
    return `INSERT INTO worksman_postcodes (worksman_id,postcodes )
                 VALUES('${event.worksman_id}','${event.postcodes}')
    `
} 
