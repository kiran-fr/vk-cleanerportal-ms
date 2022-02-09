import { getAllMobileNumbersService } from "./services/getAllMobileNumbersServices"


exports.getAllMobileNumbersHanlder = async () => {
  try {
    let data = await getAllMobileNumbersService()
    console.log("This is handler data",data)
    return {
      statusCode: 200,
      headers: {},
      body: data
    }

  }
  catch (exception) {
    console.warn('Error is at UserRegistrationHanlder' + JSON.stringify(exception));
    return {
      statusCode: 500,
      headers: {},
      body: JSON.stringify(exception)
    }
  }
}


