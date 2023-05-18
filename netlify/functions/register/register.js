const handler = async (event) => {
  const name = event.queryStringParameters.name;
  if (!name) {
    return {
      statusCode: 400,
      body: 'Name is required',
    }
  }
  return {
    statusCode: 200,
    body: `Hello ${name}`
  }
}

module.exports = {handler}