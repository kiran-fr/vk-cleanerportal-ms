export const WorksmanEligibilityQuery = () => {
    return `
        INSERT INTO worksman_eligibility_table (
        worksman_id ,
        Have_Right_to_Work,
        Have_UK_BankAccount,
        Have_Criminal_Records
        ) VALUES('1','Have_Right_to_Work','Have_UK_BankAccount','Have_Criminal_Records')
    `
}