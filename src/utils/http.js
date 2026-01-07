const getHttpMethod = (event) => {
  return event.httpMethod || event.requestContext?.http?.method || 'GET';
};

const createHeaders = () => {
  return {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  };
};

const createResponse = (statusCode, headers, data) => {
  return {
    statusCode,
    headers,
    body: JSON.stringify(data)
  };
};

const getPathParameter = (event, paramName) => {
  return event.pathParameters?.[paramName] || null;
};

const getQueryParameter = (event, paramName) => {
  if (!event.queryStringParameters) {
    return null;
  }
  return event.queryStringParameters[paramName] || null;
};

module.exports = {
  getHttpMethod,
  createHeaders,
  createResponse,
  getPathParameter,
  getQueryParameter
};
