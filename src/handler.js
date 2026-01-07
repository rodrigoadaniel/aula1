const { getHttpMethod, createHeaders, createResponse, getPathParameter, getQueryParameter } = require('./utils/http');
const { handleCorsPreflight } = require('./utils/cors');
const { searchCep } = require('./utils/cep');

exports.hello = async (event) => {
  const method = getHttpMethod(event);
  const headers = createHeaders();

  if (method === 'OPTIONS') {
    return handleCorsPreflight(headers);
  }

  try {
    const cep = getPathParameter(event, 'cep') || getQueryParameter(event, 'cep');
    console.log(event);
    if (!cep) {
      return createResponse(400, headers, {
        error: 'CEP é obrigatório',
        message: 'Informe o CEP no path (/cep/{cep}) ou query string (?cep={cep})'
      });
    }

    const cepData = await searchCep(cep);

    return createResponse(200, headers, {
      success: true,
      data: cepData
    });
  } catch (error) {
    return createResponse(400, headers, {
      success: false,
      error: error.message
    });
  }
};
exports.buscacep = async (event) => {
  const method = getHttpMethod(event);
  const headers = createHeaders();

  if (method === 'OPTIONS') {
    return handleCorsPreflight(headers);
  }

  try {
    console.log(event.body);

    const body = JSON.parse(event.body);
    const cep = body.cep;
    if (!body.cep) {
      return createResponse(500, headers, {
        success: false,
        error: 'CEP é obrigatório'
      });
    }
    const cepData = await searchCep(cep);

    if (!cepData) {
      return createResponse(400, headers, {
        success: false,
        error: 'CEP não encontrado'
      });
    }


    if (cepData && cepData.ddd != body.ddd) {
      return createResponse(400, headers, {
        success: false,
        error: 'DDD não é válido'
      });
    }

    return createResponse(200, headers, {
      success: true,
      data: cepData
    });
  } catch (error) {
    return createResponse(400, headers, {
      success: false,
      error: error.message
    });
  }
};