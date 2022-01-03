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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEscUJBQXFCLEdBQUcsQ0FBQyxjQUFrQixFQUFFLEVBQUU7SUFDcEQsT0FBTztvQkFDSyxjQUFjLENBQUMsR0FBRyxNQUFNLGNBQWMsQ0FBQyxVQUFVLE1BQU0sY0FBYyxDQUFDLFdBQVcsTUFBTSxjQUFjLENBQUMsS0FBSyxNQUFNLGNBQWMsQ0FBQyxZQUFZLE1BQU0sY0FBYyxDQUFDLFNBQVM7UUFDdEwsQ0FBQTtBQUNSLENBQUMsQ0FBQTtBQUVZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQ3pDLE9BQU87O0tBRU4sQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQUVZLFFBQUEsb0JBQW9CLEdBQUcsQ0FBQyxLQUFTLEVBQUUsRUFBRTtJQUM5QyxPQUFPOzs7Ozs7O29CQU9TLEtBQUssQ0FBQyxXQUFXLE1BQU0sS0FBSyxDQUFDLFVBQVUsTUFBTSxLQUFLLENBQUMsV0FBVyxNQUFNLEtBQUssQ0FBQyxNQUFNLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUE7QUFDNUksQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVzZXJSZWdpc3RyYXRpb25RdWVyeSA9ICh1c2VyQXR0cmlidXRlczphbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gYElOU0VSVCBJTlRPIHdvcmtzbWFuX3RhYmxlIChjb2duaXRvX2lkLGZpcnN0X25hbWUsbGFzdF9uYW1lLGVtYWlsLCBwaG9uZSxkYXRlX29mX2JpcnRoICkgXHJcbiAgICAgICAgIFZBTFVFUyAoJyR7dXNlckF0dHJpYnV0ZXMuc3VifScsJyR7dXNlckF0dHJpYnV0ZXMuZ2l2ZW5fbmFtZX0nLCcke3VzZXJBdHRyaWJ1dGVzLmZhbWlseV9uYW1lfScsJyR7dXNlckF0dHJpYnV0ZXMuZW1haWx9JywnJHt1c2VyQXR0cmlidXRlcy5waG9uZV9udW1iZXJ9JywnJHt1c2VyQXR0cmlidXRlcy5iaXJ0aGRhdGV9JylcclxuICAgICAgIGAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyUmVnaXN0cmF0aW9uUXVlcnkgPSAoKSA9PntcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgU0VMRUNUICogRlJPTSB3b3Jrc21hbl90YWJsZSBcclxuICAgIGBcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFdvcmtzTWFuQWRkcmVzc1F1ZXJ5ID0gKGV2ZW50OmFueSkgPT4ge1xyXG4gICAgcmV0dXJuIGBJTlNFUlQgSU5UTyBXb3Jrc21hbl9BZGRyZXNzX1RhYmxlICAoXHJcbiAgICAgICAgd29ya3NtYW5faWQsXHJcbiAgICAgICAgZmlyc3RfbGluZSxcclxuICAgICAgICBzZWNvbmRfbGluZSxcclxuICAgICAgICBjb3VudHkgLFxyXG4gICAgICAgIGNpdHkgLFxyXG4gICAgICAgIHBvc3Rjb2RlIFxyXG4gICAgICAgICkgVkFMVUVTKCcke2V2ZW50LndvcmtzbWFuX2lkfScsJyR7ZXZlbnQuZmlyc3RfbGluZX0nLCcke2V2ZW50LnNlY29uZF9saW5lfScsJyR7ZXZlbnQuY291bnR5fScsJyR7ZXZlbnQuY2l0eX0nLCcke2V2ZW50LnBvc3Rjb2RlfScpYFxyXG59XHJcbiJdfQ==