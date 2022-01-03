"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorksManAddressQuery = exports.getUserRegistrationQuery = exports.UserRegistrationQuery = void 0;
exports.UserRegistrationQuery = (userAttributes) => {
    return `INSERT INTO worksman_table (cognito_id,first_name,last_name,email, phone,date_of_birth ) 
         VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}','${userAttributes.phone_number}','${userAttributes.birthdate}')
       `;
};
exports.getUserRegistrationQuery = () => {
    return `
        SELECT * FROM worksman_table 
    `;
};
exports.WorksManAddressQuery = (event) => {
    return `INSERT INTO Worksman_Address_Table  (
        worksman_id,
        first_line,
        second_line,
        county ,
        city ,
        postcode 
        ) VALUES('${event.worksman_id}','${event.first_line}','${event.second_line}','${event.county}','${event.city}','${event.postcode}')`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEscUJBQXFCLEdBQUcsQ0FBQyxjQUFrQixFQUFFLEVBQUU7SUFDcEQsT0FBTztvQkFDSyxjQUFjLENBQUMsR0FBRyxNQUFNLGNBQWMsQ0FBQyxVQUFVLE1BQU0sY0FBYyxDQUFDLFdBQVcsTUFBTSxjQUFjLENBQUMsS0FBSyxNQUFNLGNBQWMsQ0FBQyxZQUFZLE1BQU0sY0FBYyxDQUFDLFNBQVM7UUFDdEwsQ0FBQTtBQUNSLENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQ3pDLE9BQU87O0tBRU4sQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQUVZLFFBQUEsb0JBQW9CLEdBQUcsQ0FBQyxLQUFTLEVBQUUsRUFBRTtJQUM5QyxPQUFPOzs7Ozs7O29CQU9TLEtBQUssQ0FBQyxXQUFXLE1BQU0sS0FBSyxDQUFDLFVBQVUsTUFBTSxLQUFLLENBQUMsV0FBVyxNQUFNLEtBQUssQ0FBQyxNQUFNLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUE7QUFDNUksQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVzZXJSZWdpc3RyYXRpb25RdWVyeSA9ICh1c2VyQXR0cmlidXRlczphbnkpID0+IHtcbiAgICAgICAgcmV0dXJuIGBJTlNFUlQgSU5UTyB3b3Jrc21hbl90YWJsZSAoY29nbml0b19pZCxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCwgcGhvbmUsZGF0ZV9vZl9iaXJ0aCApIFxuICAgICAgICAgVkFMVUVTICgnJHt1c2VyQXR0cmlidXRlcy5zdWJ9JywnJHt1c2VyQXR0cmlidXRlcy5naXZlbl9uYW1lfScsJyR7dXNlckF0dHJpYnV0ZXMuZmFtaWx5X25hbWV9JywnJHt1c2VyQXR0cmlidXRlcy5lbWFpbH0nLCcke3VzZXJBdHRyaWJ1dGVzLnBob25lX251bWJlcn0nLCcke3VzZXJBdHRyaWJ1dGVzLmJpcnRoZGF0ZX0nKVxuICAgICAgIGAgICAgXG59XG5cbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVnaXN0cmF0aW9uUXVlcnkgPSAoKSA9PntcbiAgICByZXR1cm4gYFxuICAgICAgICBTRUxFQ1QgKiBGUk9NIHdvcmtzbWFuX3RhYmxlIFxuICAgIGBcbn1cblxuZXhwb3J0IGNvbnN0IFdvcmtzTWFuQWRkcmVzc1F1ZXJ5ID0gKGV2ZW50OmFueSkgPT4ge1xuICAgIHJldHVybiBgSU5TRVJUIElOVE8gV29ya3NtYW5fQWRkcmVzc19UYWJsZSAgKFxuICAgICAgICB3b3Jrc21hbl9pZCxcbiAgICAgICAgZmlyc3RfbGluZSxcbiAgICAgICAgc2Vjb25kX2xpbmUsXG4gICAgICAgIGNvdW50eSAsXG4gICAgICAgIGNpdHkgLFxuICAgICAgICBwb3N0Y29kZSBcbiAgICAgICAgKSBWQUxVRVMoJyR7ZXZlbnQud29ya3NtYW5faWR9JywnJHtldmVudC5maXJzdF9saW5lfScsJyR7ZXZlbnQuc2Vjb25kX2xpbmV9JywnJHtldmVudC5jb3VudHl9JywnJHtldmVudC5jaXR5fScsJyR7ZXZlbnQucG9zdGNvZGV9JylgXG59XG4iXX0=