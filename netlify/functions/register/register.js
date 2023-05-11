const handler = async (event) => {
  if (!event.name) {
    return {
      statusCode: 400,
    }
  }
  return {
    statusCode: 200,
    body: `Hello ${event.name}`
  }
}

module.exports = {handler}