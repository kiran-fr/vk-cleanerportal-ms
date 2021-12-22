"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserRegistrationQuery = exports.UserRegistrationQuery = void 0;
exports.UserRegistrationQuery = (userAttributes) => {
    console.warn("watch" + userAttributes);
    console.warn("watch1" + JSON.stringify(userAttributes));
    // "userAttributes": {
    //     "sub": "e0c272bb-610e-4dc1-9a70-d4eeea904efa",
    //     "email_verified": "true",
    //     "birthdate": "2013-05-09",
    //     "cognito:user_status": "CONFIRMED",
    //     "cognito:email_alias": "kiran.budipi@vrishkar.com",
    //     "gender": "female",
    //     "phone_number_verified": "false",
    //     "given_name": "kiran",
    //     "family_name": "kiranreddy",
    //     "email": "kiran.budipi@vrishkar.com"
    //   }
    // console.log("watch1",userAttributes.cognito_userid)
    console.log(`INSERT INTO user_registration (cognito_userid,first_name,last_name,email, phone,date_of_birth ) 
VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}','${userAttributes.phone_number}','${userAttributes.birthdate}')
`);
    return `INSERT INTO user_registration (cognito_userid,first_name,last_name,email, phone,date_of_birth ) 
    VALUES ('${userAttributes.sub}','${userAttributes.given_name}','${userAttributes.family_name}','${userAttributes.email}','${userAttributes.phone_number}','${userAttributes.birthdate}')
    `;
};
exports.getUserRegistrationQuery = () => {
    return `
        SELECT * FROM user_registration
    `;
};
// VALUES (${userAttributes.cognito_userid},${userAttributes.first_name},${userAttributes.last_name},${userAttributes.email},${userAttributes.phone},${userAttributes.date_of_birth})
//  VALUES('cognito_userid','first_name','last_name','email', '70754782454','2013-08-25')
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEscUJBQXFCLEdBQUcsQ0FBQyxjQUFrQixFQUFFLEVBQUU7SUFDNUQsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUUsY0FBYyxDQUFDLENBQUE7SUFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0lBRXZELHNCQUFzQjtJQUN0QixxREFBcUQ7SUFDckQsZ0NBQWdDO0lBQ2hDLGlDQUFpQztJQUNqQywwQ0FBMEM7SUFDMUMsMERBQTBEO0lBQzFELDBCQUEwQjtJQUMxQix3Q0FBd0M7SUFDeEMsNkJBQTZCO0lBQzdCLG1DQUFtQztJQUNuQywyQ0FBMkM7SUFDM0MsTUFBTTtJQUNOLHNEQUFzRDtJQUN0RCxPQUFPLENBQUMsR0FBRyxDQUFDO1dBQ0QsY0FBYyxDQUFDLEdBQUcsTUFBTSxjQUFjLENBQUMsVUFBVSxNQUFNLGNBQWMsQ0FBQyxXQUFXLE1BQU0sY0FBYyxDQUFDLEtBQUssTUFBTSxjQUFjLENBQUMsWUFBWSxNQUFNLGNBQWMsQ0FBQyxTQUFTO0NBQ3BMLENBQUMsQ0FBQTtJQUNFLE9BQU87ZUFDSSxjQUFjLENBQUMsR0FBRyxNQUFNLGNBQWMsQ0FBQyxVQUFVLE1BQU0sY0FBYyxDQUFDLFdBQVcsTUFBTSxjQUFjLENBQUMsS0FBSyxNQUFNLGNBQWMsQ0FBQyxZQUFZLE1BQU0sY0FBYyxDQUFDLFNBQVM7S0FDcEwsQ0FBQTtBQUlMLENBQUMsQ0FBQTtBQUdZLFFBQUEsd0JBQXdCLEdBQUcsR0FBRyxFQUFFO0lBQ3pDLE9BQU87O0tBRU4sQ0FBQTtBQUNMLENBQUMsQ0FBQTtBQUlBLHFMQUFxTDtBQUV0TCx5RkFBeUYiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgVXNlclJlZ2lzdHJhdGlvblF1ZXJ5ID0gKHVzZXJBdHRyaWJ1dGVzOmFueSkgPT4ge1xuY29uc29sZS53YXJuKFwid2F0Y2hcIisgdXNlckF0dHJpYnV0ZXMpXG5jb25zb2xlLndhcm4oXCJ3YXRjaDFcIiArIEpTT04uc3RyaW5naWZ5KHVzZXJBdHRyaWJ1dGVzKSlcblxuLy8gXCJ1c2VyQXR0cmlidXRlc1wiOiB7XG4vLyAgICAgXCJzdWJcIjogXCJlMGMyNzJiYi02MTBlLTRkYzEtOWE3MC1kNGVlZWE5MDRlZmFcIixcbi8vICAgICBcImVtYWlsX3ZlcmlmaWVkXCI6IFwidHJ1ZVwiLFxuLy8gICAgIFwiYmlydGhkYXRlXCI6IFwiMjAxMy0wNS0wOVwiLFxuLy8gICAgIFwiY29nbml0bzp1c2VyX3N0YXR1c1wiOiBcIkNPTkZJUk1FRFwiLFxuLy8gICAgIFwiY29nbml0bzplbWFpbF9hbGlhc1wiOiBcImtpcmFuLmJ1ZGlwaUB2cmlzaGthci5jb21cIixcbi8vICAgICBcImdlbmRlclwiOiBcImZlbWFsZVwiLFxuLy8gICAgIFwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkXCI6IFwiZmFsc2VcIixcbi8vICAgICBcImdpdmVuX25hbWVcIjogXCJraXJhblwiLFxuLy8gICAgIFwiZmFtaWx5X25hbWVcIjogXCJraXJhbnJlZGR5XCIsXG4vLyAgICAgXCJlbWFpbFwiOiBcImtpcmFuLmJ1ZGlwaUB2cmlzaGthci5jb21cIlxuLy8gICB9XG4vLyBjb25zb2xlLmxvZyhcIndhdGNoMVwiLHVzZXJBdHRyaWJ1dGVzLmNvZ25pdG9fdXNlcmlkKVxuY29uc29sZS5sb2coYElOU0VSVCBJTlRPIHVzZXJfcmVnaXN0cmF0aW9uIChjb2duaXRvX3VzZXJpZCxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCwgcGhvbmUsZGF0ZV9vZl9iaXJ0aCApIFxuVkFMVUVTICgnJHt1c2VyQXR0cmlidXRlcy5zdWJ9JywnJHt1c2VyQXR0cmlidXRlcy5naXZlbl9uYW1lfScsJyR7dXNlckF0dHJpYnV0ZXMuZmFtaWx5X25hbWV9JywnJHt1c2VyQXR0cmlidXRlcy5lbWFpbH0nLCcke3VzZXJBdHRyaWJ1dGVzLnBob25lX251bWJlcn0nLCcke3VzZXJBdHRyaWJ1dGVzLmJpcnRoZGF0ZX0nKVxuYClcbiAgICByZXR1cm4gYElOU0VSVCBJTlRPIHVzZXJfcmVnaXN0cmF0aW9uIChjb2duaXRvX3VzZXJpZCxmaXJzdF9uYW1lLGxhc3RfbmFtZSxlbWFpbCwgcGhvbmUsZGF0ZV9vZl9iaXJ0aCApIFxuICAgIFZBTFVFUyAoJyR7dXNlckF0dHJpYnV0ZXMuc3VifScsJyR7dXNlckF0dHJpYnV0ZXMuZ2l2ZW5fbmFtZX0nLCcke3VzZXJBdHRyaWJ1dGVzLmZhbWlseV9uYW1lfScsJyR7dXNlckF0dHJpYnV0ZXMuZW1haWx9JywnJHt1c2VyQXR0cmlidXRlcy5waG9uZV9udW1iZXJ9JywnJHt1c2VyQXR0cmlidXRlcy5iaXJ0aGRhdGV9JylcbiAgICBgXG5cbiAgXG5cbn1cblxuXG5leHBvcnQgY29uc3QgZ2V0VXNlclJlZ2lzdHJhdGlvblF1ZXJ5ID0gKCkgPT57XG4gICAgcmV0dXJuIGBcbiAgICAgICAgU0VMRUNUICogRlJPTSB1c2VyX3JlZ2lzdHJhdGlvblxuICAgIGBcbn1cblxuXG5cbiAvLyBWQUxVRVMgKCR7dXNlckF0dHJpYnV0ZXMuY29nbml0b191c2VyaWR9LCR7dXNlckF0dHJpYnV0ZXMuZmlyc3RfbmFtZX0sJHt1c2VyQXR0cmlidXRlcy5sYXN0X25hbWV9LCR7dXNlckF0dHJpYnV0ZXMuZW1haWx9LCR7dXNlckF0dHJpYnV0ZXMucGhvbmV9LCR7dXNlckF0dHJpYnV0ZXMuZGF0ZV9vZl9iaXJ0aH0pXG4gXG4vLyAgVkFMVUVTKCdjb2duaXRvX3VzZXJpZCcsJ2ZpcnN0X25hbWUnLCdsYXN0X25hbWUnLCdlbWFpbCcsICc3MDc1NDc4MjQ1NCcsJzIwMTMtMDgtMjUnKSJdfQ==