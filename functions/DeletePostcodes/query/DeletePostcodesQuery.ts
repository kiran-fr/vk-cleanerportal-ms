export const DeletePostcodesQuery = (event:any) => {
    return ` DELETE FROM worksman_postcodes
    WHERE postcodes = '${event.postcodes}'`
} 
