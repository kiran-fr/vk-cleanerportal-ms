export const UserPostCodesQuery = (events: any) => {
    return `INSERT INTO worksman_postcodes (worksman_id,postcodes,district )
                 VALUES 
                 ${events.map((event: any, index: any) => `('${event.worksman_id}','${event.postcodes}','${event.district}')`)} `
}

export const getAllPostcodes = () => {
    return `SELECT * FROM worksman_postcodes`
}