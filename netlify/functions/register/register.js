const handler = async (event) => {
  return {
    statusCode: 200,
    body: `Hello ${event.name}`
  }
}

module.exports = {handler}