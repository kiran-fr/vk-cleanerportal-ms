export const WorksManAddressQuery = () => {
    return `INSERT INTO Worksman_Address_Table  (
        worksman_id,
        first_line,
        second_line,
        county ,
        city ,
        postcode 
        ) VALUES('WORKMAN1','FIRST LINE ADDRESS','SECOND LINEADD','INDIA','VIJAYAWADA','521228')`
}
