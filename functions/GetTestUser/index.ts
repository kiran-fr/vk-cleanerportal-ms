exports.handler = async (event: any) => {
    try {
    console.log('step 1' +  JSON.stringify(event))
    const response = {
        statusCode: 200,
        body: JSON.stringify({"id":"1","name":"venki test 3"})
    };
    return response;
}catch (exception) {
    throw exception
}
};