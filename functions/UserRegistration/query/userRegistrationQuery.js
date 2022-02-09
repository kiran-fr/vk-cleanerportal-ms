"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorksmanAddressIdQuery = exports.WorksManAddressQuery = exports.UserRegistrationQuery = void 0;
exports.UserRegistrationQuery = (userAttributes) => {
    console.log('user registration query', userAttributes);
    return `INSERT INTO worksman_table (cognito_id,first_name,last_name,email, phone,date_of_birth,gender,nationality, current_step ) 
         VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}',
         '${userAttributes.phone_number}','${userAttributes.birthdate}','${userAttributes.gender}','${userAttributes.locale}',
         'worksmanRegistration')
       `;
};
exports.WorksManAddressQuery = (event, worksman_id) => {
    console.warn('address query 1', event.address);
    let address = event.address;
    let address1 = event.address.split(",");
    const worksmanAdd = address.split(",");
    console.warn(worksmanAdd[2]);
    console;
    return `INSERT INTO worksman_address_table  (
        worksman_id,
        first_line,
        second_line,
        county ,
        city ,
        postcode 
        ) VALUES('${worksman_id}','${worksmanAdd[0]} ${worksmanAdd[1]}','${worksmanAdd[2]}','${worksmanAdd[3]}','${worksmanAdd[4]}','${worksmanAdd[5]}')`;
};
exports.getWorksmanAddressIdQuery = (email) => {
    console.warn('this is id get query', email);
    return `SELECT worksman_id from worksman_table WHERE email='${email}' `;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEscUJBQXFCLEdBQUcsQ0FBQyxjQUFrQixFQUFFLEVBQUU7SUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBQyxjQUFjLENBQUMsQ0FBQTtJQUMvQyxPQUFPO29CQUNLLGNBQWMsQ0FBQyxHQUFHLE1BQU0sY0FBYyxDQUFDLFVBQVUsTUFBTSxjQUFjLENBQUMsV0FBVyxNQUFNLGNBQWMsQ0FBQyxLQUFLO1lBQ25ILGNBQWMsQ0FBQyxZQUFZLE1BQU0sY0FBYyxDQUFDLFNBQVMsTUFBTSxjQUFjLENBQUMsTUFBTSxNQUFNLGNBQWMsQ0FBQyxNQUFNOztRQUVuSCxDQUFBO0FBQ1IsQ0FBQyxDQUFBO0FBRVksUUFBQSxvQkFBb0IsR0FBRyxDQUFDLEtBQVMsRUFBQyxXQUFlLEVBQUUsRUFBRTtJQUNoRSxPQUFPLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUU3QyxJQUFJLE9BQU8sR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFBO0lBQzNCLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQ3ZDLE1BQU0sV0FBVyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDdEMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUM1QixPQUFPLENBQUE7SUFDTCxPQUFPOzs7Ozs7O29CQU9TLFdBQVcsTUFBTSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFBO0FBQ3pKLENBQUMsQ0FBQTtBQUdZLFFBQUEseUJBQXlCLEdBQUcsQ0FBQyxLQUFTLEVBQUUsRUFBRTtJQUNyRCxPQUFPLENBQUMsSUFBSSxDQUFDLHNCQUFzQixFQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3hDLE9BQU8sdURBQXVELEtBQUssSUFBSSxDQUFBO0FBQzNFLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBVc2VyUmVnaXN0cmF0aW9uUXVlcnkgPSAodXNlckF0dHJpYnV0ZXM6YW55KSA9PiB7XHJcbiAgY29uc29sZS5sb2coJ3VzZXIgcmVnaXN0cmF0aW9uIHF1ZXJ5Jyx1c2VyQXR0cmlidXRlcylcclxuICAgICAgICByZXR1cm4gYElOU0VSVCBJTlRPIHdvcmtzbWFuX3RhYmxlIChjb2duaXRvX2lkLGZpcnN0X25hbWUsbGFzdF9uYW1lLGVtYWlsLCBwaG9uZSxkYXRlX29mX2JpcnRoLGdlbmRlcixuYXRpb25hbGl0eSwgY3VycmVudF9zdGVwICkgXHJcbiAgICAgICAgIFZBTFVFUyAoJyR7dXNlckF0dHJpYnV0ZXMuc3VifScsJyR7dXNlckF0dHJpYnV0ZXMuZ2l2ZW5fbmFtZX0nLCcke3VzZXJBdHRyaWJ1dGVzLmZhbWlseV9uYW1lfScsJyR7dXNlckF0dHJpYnV0ZXMuZW1haWx9JyxcclxuICAgICAgICAgJyR7dXNlckF0dHJpYnV0ZXMucGhvbmVfbnVtYmVyfScsJyR7dXNlckF0dHJpYnV0ZXMuYmlydGhkYXRlfScsJyR7dXNlckF0dHJpYnV0ZXMuZ2VuZGVyfScsJyR7dXNlckF0dHJpYnV0ZXMubG9jYWxlfScsXHJcbiAgICAgICAgICd3b3Jrc21hblJlZ2lzdHJhdGlvbicpXHJcbiAgICAgICBgICAgIFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgV29ya3NNYW5BZGRyZXNzUXVlcnkgPSAoZXZlbnQ6YW55LHdvcmtzbWFuX2lkOmFueSkgPT4ge1xyXG4gIGNvbnNvbGUud2FybignYWRkcmVzcyBxdWVyeSAxJyxldmVudC5hZGRyZXNzKVxyXG5cclxuICBsZXQgYWRkcmVzcyA9IGV2ZW50LmFkZHJlc3NcclxuICBsZXQgYWRkcmVzczEgPSBldmVudC5hZGRyZXNzLnNwbGl0KFwiLFwiKVxyXG4gIGNvbnN0IHdvcmtzbWFuQWRkID0gYWRkcmVzcy5zcGxpdChcIixcIilcclxuICBjb25zb2xlLndhcm4od29ya3NtYW5BZGRbMl0pXHJcbiAgY29uc29sZVxyXG4gICAgcmV0dXJuIGBJTlNFUlQgSU5UTyB3b3Jrc21hbl9hZGRyZXNzX3RhYmxlICAoXHJcbiAgICAgICAgd29ya3NtYW5faWQsXHJcbiAgICAgICAgZmlyc3RfbGluZSxcclxuICAgICAgICBzZWNvbmRfbGluZSxcclxuICAgICAgICBjb3VudHkgLFxyXG4gICAgICAgIGNpdHkgLFxyXG4gICAgICAgIHBvc3Rjb2RlIFxyXG4gICAgICAgICkgVkFMVUVTKCcke3dvcmtzbWFuX2lkfScsJyR7d29ya3NtYW5BZGRbMF19ICR7d29ya3NtYW5BZGRbMV19JywnJHt3b3Jrc21hbkFkZFsyXX0nLCcke3dvcmtzbWFuQWRkWzNdfScsJyR7d29ya3NtYW5BZGRbNF19JywnJHt3b3Jrc21hbkFkZFs1XX0nKWBcclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXb3Jrc21hbkFkZHJlc3NJZFF1ZXJ5ID0gKGVtYWlsOmFueSkgPT4ge1xyXG4gIGNvbnNvbGUud2FybigndGhpcyBpcyBpZCBnZXQgcXVlcnknLGVtYWlsKVxyXG4gICAgcmV0dXJuIGBTRUxFQ1Qgd29ya3NtYW5faWQgZnJvbSB3b3Jrc21hbl90YWJsZSBXSEVSRSBlbWFpbD0nJHtlbWFpbH0nIGBcclxufVxyXG4iXX0=