"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationQuery = void 0;
exports.UserRegistrationQuery = () => {
    return `
        INSERT INTO user_registration (
        cognito_userid,
        first_name,
        last_name,
        email,
        phone,
        date_of_birth ) VALUES ('V244','KIRAN','REDDY','KIRAN@GMAIL.COM','70754758244','2013-05-1')
    `;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlclJlZ2lzdHJhdGlvblF1ZXJ5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFhLFFBQUEscUJBQXFCLEdBQUcsR0FBRyxFQUFFO0lBQ3RDLE9BQU87Ozs7Ozs7O0tBUU4sQ0FBQTtBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBVc2VyUmVnaXN0cmF0aW9uUXVlcnkgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgIElOU0VSVCBJTlRPIHVzZXJfcmVnaXN0cmF0aW9uIChcclxuICAgICAgICBjb2duaXRvX3VzZXJpZCxcclxuICAgICAgICBmaXJzdF9uYW1lLFxyXG4gICAgICAgIGxhc3RfbmFtZSxcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwaG9uZSxcclxuICAgICAgICBkYXRlX29mX2JpcnRoICkgVkFMVUVTICgnVjI0NCcsJ0tJUkFOJywnUkVERFknLCdLSVJBTkBHTUFJTC5DT00nLCc3MDc1NDc1ODI0NCcsJzIwMTMtMDUtMScpXHJcbiAgICBgXHJcbn0iXX0=