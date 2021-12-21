"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const UserRegistrationServices_1 = require("./services/UserRegistrationServices");
exports.UserRegistrationHanlder = async (event, context, callback) => {
    console.log("step1", event);
    const data = await UserRegistrationServices_1.UserRegistrationServices(event);
    return {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Headers": "Content-Type",
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PATCH",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": true // Required for cookies, authorization headers with HTTPS 
        },
        body: JSON.stringify(data)
    };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLGtGQUErRTtBQUUvRSxPQUFPLENBQUMsdUJBQXVCLEdBQUcsS0FBSyxFQUFDLEtBQVMsRUFBQyxPQUFXLEVBQUMsUUFBWSxFQUFFLEVBQUU7SUFDMUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDMUIsTUFBTSxJQUFJLEdBQUcsTUFBTSxtREFBd0IsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVuRCxPQUFPO1FBQ0gsVUFBVSxFQUFDLEdBQUc7UUFDZCxPQUFPLEVBQUU7WUFDUiw4QkFBOEIsRUFBRyxjQUFjO1lBQy9DLDhCQUE4QixFQUFFLHdCQUF3QjtZQUN4RCw2QkFBNkIsRUFBRyxHQUFHO1lBQ25DLGtDQUFrQyxFQUFHLElBQUksQ0FBQywwREFBMEQ7U0FDdkc7UUFDRSxJQUFJLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUM7S0FDNUIsQ0FBQTtBQUVKLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiYXdzLXNkay9jbGllbnRzL2F1dG9zY2FsaW5nXCI7XG5pbXBvcnQgeyBFdmVudCB9IGZyb20gXCJhd3Mtc2RrL2NsaWVudHMvaW90d2lyZWxlc3NcIjtcbmltcG9ydCB7IFVzZXJSZWdpc3RyYXRpb25TZXJ2aWNlcyB9IGZyb20gXCIuL3NlcnZpY2VzL1VzZXJSZWdpc3RyYXRpb25TZXJ2aWNlc1wiO1xuXG5leHBvcnRzLlVzZXJSZWdpc3RyYXRpb25IYW5sZGVyID0gYXN5bmMoZXZlbnQ6YW55LGNvbnRleHQ6YW55LGNhbGxiYWNrOmFueSkgPT57XG4gICAgY29uc29sZS5sb2coXCJzdGVwMVwiLGV2ZW50KVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBVc2VyUmVnaXN0cmF0aW9uU2VydmljZXMoZXZlbnQpXG5cbiAgIHJldHVybiB7XG4gICAgICAgc3RhdHVzQ29kZToyMDAsXG4gICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnNcIiA6IFwiQ29udGVudC1UeXBlXCIsXG4gICAgICAgIFwiQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kc1wiOiBcIk9QVElPTlMsUE9TVCxHRVQsUEFUQ0hcIixcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW5cIiA6IFwiKlwiLCAvLyBSZXF1aXJlZCBmb3IgQ09SUyBzdXBwb3J0IHRvIHdvcmtcbiAgICAgICAgXCJBY2Nlc3MtQ29udHJvbC1BbGxvdy1DcmVkZW50aWFsc1wiIDogdHJ1ZSAvLyBSZXF1aXJlZCBmb3IgY29va2llcywgYXV0aG9yaXphdGlvbiBoZWFkZXJzIHdpdGggSFRUUFMgXG4gICAgfSxcbiAgICAgICBib2R5OkpTT04uc3RyaW5naWZ5KGRhdGEpXG4gICB9XG5cbn1cblxuXG4iXX0=