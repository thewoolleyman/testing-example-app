const handler = async (event) => {
  try {
    const name = event.queryStringParameters.name;

    if (!name) {
      return {
        statusCode: 400,
        body: 'Name is required',
      }
    }

    return {
      statusCode: 200,
      body: `Hello ${name}`,
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: error.toString(),
    }
  }

}

module.exports = {handler}