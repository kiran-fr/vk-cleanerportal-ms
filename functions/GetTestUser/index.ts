exports.handler = async (event: any) => {
    console.log(JSON.stringify(event));
    const response = {
        statusCode: 200,
        body: JSON.stringify(event)
    };
    return response;
};