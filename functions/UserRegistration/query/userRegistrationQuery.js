"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorksmanAddressIdQuery = exports.WorksManAddressQuery = exports.UserRegistrationQuery = void 0;
exports.UserRegistrationQuery = (userAttributes) => {
    console.log('user registration query', userAttributes);
    return `INSERT INTO worksman_table (cognito_id,first_name,last_name,email, phone,date_of_birth,gender,nationality, current_step,iscompleted_registration_process ) 
         VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}',
         '${userAttributes.phone_number}','${userAttributes.birthdate}','${userAttributes.gender}','${userAttributes.locale}',
         'worksmanRegistration',${false})
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
        house_number,
        street,
        county ,
        city ,
        postcode 
        ) VALUES('${worksman_id}','${worksmanAdd[0]} ${worksmanAdd[1]}','${worksmanAdd[2]}','${worksmanAdd[3]}','${worksmanAdd[4]}','${worksmanAdd[5]}')`;
};
exports.getWorksmanAddressIdQuery = (email) => {
    console.warn('this is id get query', email);
    return `SELECT worksman_id from worksman_table WHERE email='${email}' `;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEscUJBQXFCLEdBQUcsQ0FBQyxjQUFrQixFQUFFLEVBQUU7SUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBQyxjQUFjLENBQUMsQ0FBQTtJQUMvQyxPQUFPO29CQUNLLGNBQWMsQ0FBQyxHQUFHLE1BQU0sY0FBYyxDQUFDLFVBQVUsTUFBTSxjQUFjLENBQUMsV0FBVyxNQUFNLGNBQWMsQ0FBQyxLQUFLO1lBQ25ILGNBQWMsQ0FBQyxZQUFZLE1BQU0sY0FBYyxDQUFDLFNBQVMsTUFBTSxjQUFjLENBQUMsTUFBTSxNQUFNLGNBQWMsQ0FBQyxNQUFNO2tDQUN6RixLQUFLO1FBQy9CLENBQUE7QUFDUixDQUFDLENBQUE7QUFFWSxRQUFBLG9CQUFvQixHQUFHLENBQUMsS0FBUyxFQUFDLFdBQWUsRUFBRSxFQUFFO0lBQ2hFLE9BQU8sQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRTdDLElBQUksT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUE7SUFDM0IsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDdkMsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUN0QyxPQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQzVCLE9BQU8sQ0FBQTtJQUNMLE9BQU87Ozs7Ozs7b0JBT1MsV0FBVyxNQUFNLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sV0FBVyxDQUFDLENBQUMsQ0FBQyxNQUFNLFdBQVcsQ0FBQyxDQUFDLENBQUMsTUFBTSxXQUFXLENBQUMsQ0FBQyxDQUFDLE1BQU0sV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7QUFDekosQ0FBQyxDQUFBO0FBR1ksUUFBQSx5QkFBeUIsR0FBRyxDQUFDLEtBQVMsRUFBRSxFQUFFO0lBQ3JELE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEMsT0FBTyx1REFBdUQsS0FBSyxJQUFJLENBQUE7QUFDM0UsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFVzZXJSZWdpc3RyYXRpb25RdWVyeSA9ICh1c2VyQXR0cmlidXRlczphbnkpID0+IHtcclxuICBjb25zb2xlLmxvZygndXNlciByZWdpc3RyYXRpb24gcXVlcnknLHVzZXJBdHRyaWJ1dGVzKVxyXG4gICAgICAgIHJldHVybiBgSU5TRVJUIElOVE8gd29ya3NtYW5fdGFibGUgKGNvZ25pdG9faWQsZmlyc3RfbmFtZSxsYXN0X25hbWUsZW1haWwsIHBob25lLGRhdGVfb2ZfYmlydGgsZ2VuZGVyLG5hdGlvbmFsaXR5LCBjdXJyZW50X3N0ZXAsaXNjb21wbGV0ZWRfcmVnaXN0cmF0aW9uX3Byb2Nlc3MgKSBcclxuICAgICAgICAgVkFMVUVTICgnJHt1c2VyQXR0cmlidXRlcy5zdWJ9JywnJHt1c2VyQXR0cmlidXRlcy5naXZlbl9uYW1lfScsJyR7dXNlckF0dHJpYnV0ZXMuZmFtaWx5X25hbWV9JywnJHt1c2VyQXR0cmlidXRlcy5lbWFpbH0nLFxyXG4gICAgICAgICAnJHt1c2VyQXR0cmlidXRlcy5waG9uZV9udW1iZXJ9JywnJHt1c2VyQXR0cmlidXRlcy5iaXJ0aGRhdGV9JywnJHt1c2VyQXR0cmlidXRlcy5nZW5kZXJ9JywnJHt1c2VyQXR0cmlidXRlcy5sb2NhbGV9JyxcclxuICAgICAgICAgJ3dvcmtzbWFuUmVnaXN0cmF0aW9uJywke2ZhbHNlfSlcclxuICAgICAgIGAgICAgXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBXb3Jrc01hbkFkZHJlc3NRdWVyeSA9IChldmVudDphbnksd29ya3NtYW5faWQ6YW55KSA9PiB7XHJcbiAgY29uc29sZS53YXJuKCdhZGRyZXNzIHF1ZXJ5IDEnLGV2ZW50LmFkZHJlc3MpXHJcblxyXG4gIGxldCBhZGRyZXNzID0gZXZlbnQuYWRkcmVzc1xyXG4gIGxldCBhZGRyZXNzMSA9IGV2ZW50LmFkZHJlc3Muc3BsaXQoXCIsXCIpXHJcbiAgY29uc3Qgd29ya3NtYW5BZGQgPSBhZGRyZXNzLnNwbGl0KFwiLFwiKVxyXG4gIGNvbnNvbGUud2Fybih3b3Jrc21hbkFkZFsyXSlcclxuICBjb25zb2xlXHJcbiAgICByZXR1cm4gYElOU0VSVCBJTlRPIHdvcmtzbWFuX2FkZHJlc3NfdGFibGUgIChcclxuICAgICAgICB3b3Jrc21hbl9pZCxcclxuICAgICAgICBob3VzZV9udW1iZXIsXHJcbiAgICAgICAgc3RyZWV0LFxyXG4gICAgICAgIGNvdW50eSAsXHJcbiAgICAgICAgY2l0eSAsXHJcbiAgICAgICAgcG9zdGNvZGUgXHJcbiAgICAgICAgKSBWQUxVRVMoJyR7d29ya3NtYW5faWR9JywnJHt3b3Jrc21hbkFkZFswXX0gJHt3b3Jrc21hbkFkZFsxXX0nLCcke3dvcmtzbWFuQWRkWzJdfScsJyR7d29ya3NtYW5BZGRbM119JywnJHt3b3Jrc21hbkFkZFs0XX0nLCcke3dvcmtzbWFuQWRkWzVdfScpYFxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFdvcmtzbWFuQWRkcmVzc0lkUXVlcnkgPSAoZW1haWw6YW55KSA9PiB7XHJcbiAgY29uc29sZS53YXJuKCd0aGlzIGlzIGlkIGdldCBxdWVyeScsZW1haWwpXHJcbiAgICByZXR1cm4gYFNFTEVDVCB3b3Jrc21hbl9pZCBmcm9tIHdvcmtzbWFuX3RhYmxlIFdIRVJFIGVtYWlsPScke2VtYWlsfScgYFxyXG59XHJcbiJdfQ==