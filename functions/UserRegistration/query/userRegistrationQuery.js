"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorksmanAddressIdQuery = exports.WorksManAddressQuery = exports.UserRegistrationQuery = void 0;
exports.UserRegistrationQuery = (userAttributes) => {
    return `INSERT INTO worksman_table (cognito_id,first_name,last_name,email, phone,date_of_birth ) 
         VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}','${userAttributes.phone_number}','${userAttributes.birthdate}')
       `;
};
exports.WorksManAddressQuery = (event, worksman_id) => {
    console.log('address query 1', event.address);
    return `INSERT INTO Worksman_Address_Table  (
        worksman_id,
        first_line,
        second_line,
        county ,
        city ,
        postcode 
        ) VALUES('${worksman_id}','${event.first_line}','${event.second_line}','${event.county}','${event.city}','${event.postcode}')`;
};
exports.getWorksmanAddressIdQuery = (email) => {
    return `SELECT worksman_id from worksman_table WHERE email='${email}`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEscUJBQXFCLEdBQUcsQ0FBQyxjQUFrQixFQUFFLEVBQUU7SUFDcEQsT0FBTztvQkFDSyxjQUFjLENBQUMsR0FBRyxNQUFNLGNBQWMsQ0FBQyxVQUFVLE1BQU0sY0FBYyxDQUFDLFdBQVcsTUFBTSxjQUFjLENBQUMsS0FBSyxNQUFNLGNBQWMsQ0FBQyxZQUFZLE1BQU0sY0FBYyxDQUFDLFNBQVM7UUFDdEwsQ0FBQTtBQUNSLENBQUMsQ0FBQTtBQUVZLFFBQUEsb0JBQW9CLEdBQUcsQ0FBQyxLQUFTLEVBQUMsV0FBZSxFQUFFLEVBQUU7SUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDMUMsT0FBTzs7Ozs7OztvQkFPUyxXQUFXLE1BQU0sS0FBSyxDQUFDLFVBQVUsTUFBTSxLQUFLLENBQUMsV0FBVyxNQUFNLEtBQUssQ0FBQyxNQUFNLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUE7QUFDdEksQ0FBQyxDQUFBO0FBR1ksUUFBQSx5QkFBeUIsR0FBRyxDQUFDLEtBQVMsRUFBRSxFQUFFO0lBQ25ELE9BQU8sdURBQXVELEtBQUssRUFBRSxDQUFBO0FBQ3pFLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBVc2VyUmVnaXN0cmF0aW9uUXVlcnkgPSAodXNlckF0dHJpYnV0ZXM6YW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBJTlNFUlQgSU5UTyB3b3Jrc21hbl90YWJsZSAoY29nbml0b19pZCxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCwgcGhvbmUsZGF0ZV9vZl9iaXJ0aCApIFxyXG4gICAgICAgICBWQUxVRVMgKCcke3VzZXJBdHRyaWJ1dGVzLnN1Yn0nLCcke3VzZXJBdHRyaWJ1dGVzLmdpdmVuX25hbWV9JywnJHt1c2VyQXR0cmlidXRlcy5mYW1pbHlfbmFtZX0nLCcke3VzZXJBdHRyaWJ1dGVzLmVtYWlsfScsJyR7dXNlckF0dHJpYnV0ZXMucGhvbmVfbnVtYmVyfScsJyR7dXNlckF0dHJpYnV0ZXMuYmlydGhkYXRlfScpXHJcbiAgICAgICBgICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV29ya3NNYW5BZGRyZXNzUXVlcnkgPSAoZXZlbnQ6YW55LHdvcmtzbWFuX2lkOmFueSkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKCdhZGRyZXNzIHF1ZXJ5IDEnLGV2ZW50LmFkZHJlc3MpXHJcbiAgICByZXR1cm4gYElOU0VSVCBJTlRPIFdvcmtzbWFuX0FkZHJlc3NfVGFibGUgIChcclxuICAgICAgICB3b3Jrc21hbl9pZCxcclxuICAgICAgICBmaXJzdF9saW5lLFxyXG4gICAgICAgIHNlY29uZF9saW5lLFxyXG4gICAgICAgIGNvdW50eSAsXHJcbiAgICAgICAgY2l0eSAsXHJcbiAgICAgICAgcG9zdGNvZGUgXHJcbiAgICAgICAgKSBWQUxVRVMoJyR7d29ya3NtYW5faWR9JywnJHtldmVudC5maXJzdF9saW5lfScsJyR7ZXZlbnQuc2Vjb25kX2xpbmV9JywnJHtldmVudC5jb3VudHl9JywnJHtldmVudC5jaXR5fScsJyR7ZXZlbnQucG9zdGNvZGV9JylgXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0V29ya3NtYW5BZGRyZXNzSWRRdWVyeSA9IChlbWFpbDphbnkpID0+IHtcclxuICAgIHJldHVybiBgU0VMRUNUIHdvcmtzbWFuX2lkIGZyb20gd29ya3NtYW5fdGFibGUgV0hFUkUgZW1haWw9JyR7ZW1haWx9YFxyXG59Il19