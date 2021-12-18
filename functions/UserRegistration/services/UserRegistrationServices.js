"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationServices = void 0;
const dist_1 = require("sequelize/dist");
const DbConnectionHelpers_1 = require("../helpers/DbConnectionHelpers");
const userRegistrationQuery_1 = require("../query/userRegistrationQuery");
exports.UserRegistrationServices = async () => {
    DbConnectionHelpers_1.connectDB();
    // return sequelizeConnection.query('SELECT * FROM users' , {
    //     type:QueryTypes.SELECT
    // })
    // return sequelizeConnection.query("INSERT INTO users (user_id, username,password ) VALUES(3, 'krishna','kiran@11')",{
    //     type:QueryTypes.INSERT
    // })
    return DbConnectionHelpers_1.sequelizeConnection.query(userRegistrationQuery_1.UserRegistrationQuery(), {
        type: dist_1.QueryTypes.INSERT
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlclJlZ2lzdHJhdGlvblNlcnZpY2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiVXNlclJlZ2lzdHJhdGlvblNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHlDQUE0QztBQUM1Qyx3RUFBK0U7QUFDL0UsMEVBQXVFO0FBRTFELFFBQUEsd0JBQXdCLEdBQUcsS0FBSyxJQUFJLEVBQUU7SUFDL0MsK0JBQVMsRUFBRSxDQUFDO0lBQ1osNkRBQTZEO0lBQzdELDZCQUE2QjtJQUM3QixLQUFLO0lBRUwsdUhBQXVIO0lBQ3ZILDZCQUE2QjtJQUM3QixLQUFLO0lBRUwsT0FBTyx5Q0FBbUIsQ0FBQyxLQUFLLENBQUMsNkNBQXFCLEVBQUUsRUFBRTtRQUN0RCxJQUFJLEVBQUUsaUJBQVUsQ0FBQyxNQUFNO0tBQzFCLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXJ5VHlwZXMgfSBmcm9tIFwic2VxdWVsaXplL2Rpc3RcIjtcclxuaW1wb3J0IHsgY29ubmVjdERCLCBzZXF1ZWxpemVDb25uZWN0aW9uIH0gZnJvbSBcIi4uL2hlbHBlcnMvRGJDb25uZWN0aW9uSGVscGVyc1wiXHJcbmltcG9ydCB7IFVzZXJSZWdpc3RyYXRpb25RdWVyeSB9IGZyb20gXCIuLi9xdWVyeS91c2VyUmVnaXN0cmF0aW9uUXVlcnlcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBVc2VyUmVnaXN0cmF0aW9uU2VydmljZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25uZWN0REIoKTtcclxuICAgIC8vIHJldHVybiBzZXF1ZWxpemVDb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHVzZXJzJyAsIHtcclxuICAgIC8vICAgICB0eXBlOlF1ZXJ5VHlwZXMuU0VMRUNUXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIC8vIHJldHVybiBzZXF1ZWxpemVDb25uZWN0aW9uLnF1ZXJ5KFwiSU5TRVJUIElOVE8gdXNlcnMgKHVzZXJfaWQsIHVzZXJuYW1lLHBhc3N3b3JkICkgVkFMVUVTKDMsICdrcmlzaG5hJywna2lyYW5AMTEnKVwiLHtcclxuICAgIC8vICAgICB0eXBlOlF1ZXJ5VHlwZXMuSU5TRVJUXHJcbiAgICAvLyB9KVxyXG5cclxuICAgIHJldHVybiBzZXF1ZWxpemVDb25uZWN0aW9uLnF1ZXJ5KFVzZXJSZWdpc3RyYXRpb25RdWVyeSgpLCB7XHJcbiAgICAgICAgdHlwZTogUXVlcnlUeXBlcy5JTlNFUlRcclxuICAgIH0pXHJcbn1cclxuXHJcbiJdfQ==