const headers = {
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': '*'
  }
  
  export const formatJSONResponse = (status, response) => {
    if (status === 200) {
      return {
        statusCode: status,
        headers,
        body: JSON.stringify(response)
      }
    }
    return {
      statusCode: status,
      headers,
      body: JSON.stringify(response)
    }
  }