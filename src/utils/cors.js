const handleCorsPreflight = (headers) => {
  return {
    statusCode: 200,
    headers,
    body: ''
  };
};

module.exports = {
  handleCorsPreflight
};
