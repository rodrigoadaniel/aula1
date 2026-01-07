const parseRequestBody = (method, body) => {
  if (method !== 'POST' || !body) {
    return {};
  }

  try {
    return JSON.parse(body);
  } catch (e) {
    return {};
  }
};

module.exports = {
  parseRequestBody
};
