"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorksmanAddressQuery = exports.WorksManAddressQuery = exports.UserRegistrationQuery = void 0;
exports.UserRegistrationQuery = (userAttributes) => {
    return `INSERT INTO worksman_table (cognito_id,first_name,last_name,email, phone,date_of_birth ) 
         VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}','${userAttributes.phone_number}','${userAttributes.birthdate}')
       `;
};
exports.WorksManAddressQuery = (event) => {
    console.log('address query 1', event.address);
    return `INSERT INTO Worksman_Address_Table  (
        worksman_id,
        first_line,
        second_line,
        county ,
        city ,
        postcode 
        ) VALUES('${event.worksman_id}','${event.first_line}','${event.second_line}','${event.county}','${event.city}','${event.postcode}')`;
};
exports.getWorksmanAddressQuery = () => {
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEscUJBQXFCLEdBQUcsQ0FBQyxjQUFrQixFQUFFLEVBQUU7SUFDcEQsT0FBTztvQkFDSyxjQUFjLENBQUMsR0FBRyxNQUFNLGNBQWMsQ0FBQyxVQUFVLE1BQU0sY0FBYyxDQUFDLFdBQVcsTUFBTSxjQUFjLENBQUMsS0FBSyxNQUFNLGNBQWMsQ0FBQyxZQUFZLE1BQU0sY0FBYyxDQUFDLFNBQVM7UUFDdEwsQ0FBQTtBQUNSLENBQUMsQ0FBQTtBQUVZLFFBQUEsb0JBQW9CLEdBQUcsQ0FBQyxLQUFTLEVBQUUsRUFBRTtJQUNoRCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMxQyxPQUFPOzs7Ozs7O29CQU9TLEtBQUssQ0FBQyxXQUFXLE1BQU0sS0FBSyxDQUFDLFVBQVUsTUFBTSxLQUFLLENBQUMsV0FBVyxNQUFNLEtBQUssQ0FBQyxNQUFNLE1BQU0sS0FBSyxDQUFDLElBQUksTUFBTSxLQUFLLENBQUMsUUFBUSxJQUFJLENBQUE7QUFDNUksQ0FBQyxDQUFBO0FBR1ksUUFBQSx1QkFBdUIsR0FBRyxHQUFHLEVBQUU7QUFFNUMsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVzZXJSZWdpc3RyYXRpb25RdWVyeSA9ICh1c2VyQXR0cmlidXRlczphbnkpID0+IHtcclxuICAgICAgICByZXR1cm4gYElOU0VSVCBJTlRPIHdvcmtzbWFuX3RhYmxlIChjb2duaXRvX2lkLGZpcnN0X25hbWUsbGFzdF9uYW1lLGVtYWlsLCBwaG9uZSxkYXRlX29mX2JpcnRoICkgXHJcbiAgICAgICAgIFZBTFVFUyAoJyR7dXNlckF0dHJpYnV0ZXMuc3VifScsJyR7dXNlckF0dHJpYnV0ZXMuZ2l2ZW5fbmFtZX0nLCcke3VzZXJBdHRyaWJ1dGVzLmZhbWlseV9uYW1lfScsJyR7dXNlckF0dHJpYnV0ZXMuZW1haWx9JywnJHt1c2VyQXR0cmlidXRlcy5waG9uZV9udW1iZXJ9JywnJHt1c2VyQXR0cmlidXRlcy5iaXJ0aGRhdGV9JylcclxuICAgICAgIGAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXb3Jrc01hbkFkZHJlc3NRdWVyeSA9IChldmVudDphbnkpID0+IHtcclxuICBjb25zb2xlLmxvZygnYWRkcmVzcyBxdWVyeSAxJyxldmVudC5hZGRyZXNzKVxyXG4gICAgcmV0dXJuIGBJTlNFUlQgSU5UTyBXb3Jrc21hbl9BZGRyZXNzX1RhYmxlICAoXHJcbiAgICAgICAgd29ya3NtYW5faWQsXHJcbiAgICAgICAgZmlyc3RfbGluZSxcclxuICAgICAgICBzZWNvbmRfbGluZSxcclxuICAgICAgICBjb3VudHkgLFxyXG4gICAgICAgIGNpdHkgLFxyXG4gICAgICAgIHBvc3Rjb2RlIFxyXG4gICAgICAgICkgVkFMVUVTKCcke2V2ZW50LndvcmtzbWFuX2lkfScsJyR7ZXZlbnQuZmlyc3RfbGluZX0nLCcke2V2ZW50LnNlY29uZF9saW5lfScsJyR7ZXZlbnQuY291bnR5fScsJyR7ZXZlbnQuY2l0eX0nLCcke2V2ZW50LnBvc3Rjb2RlfScpYFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdvcmtzbWFuQWRkcmVzc1F1ZXJ5ID0gKCkgPT4ge1xyXG5cclxufSJdfQ==