const https = require('https');

const searchCep = async (cep) => {
  const cleanCep = cep.replace(/\D/g, '');

  if (cleanCep.length !== 8) {
    throw new Error('CEP deve conter 8 dígitos');
  }

  return new Promise((resolve, reject) => {
    const url = `https://viacep.com.br/ws/${cleanCep}/json/`;

    https.get(url, (res) => {
      let data = '';

      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          
          if (result.erro) {
            reject(new Error('CEP não encontrado'));
            return;
          }

          resolve(result);
        } catch (error) {
          reject(new Error('Erro ao processar resposta da API'));
        }
      });
    }).on('error', (error) => {
      reject(new Error('Erro ao consultar CEP'));
    });
  });
};

module.exports = {
  searchCep
};
