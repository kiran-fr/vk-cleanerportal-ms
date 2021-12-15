import { signUp } from "./services/singUp";


exports.handler = async (event:any) => {
    const data = await signUp();
    console.log(data);
    // return data;
     // console.log(event);
       return {
         statusCode: 200,
         headers: { "Content-Type": "text/json" },
         body: JSON.stringify({ message: `Lambda FExample run successfullyi` })
       };
     };
   