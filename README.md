# aula1

## Projeto Lambda - Consulta de CEP

Projeto AWS Lambda em Node.js com endpoint para consulta de CEP usando a API ViaCEP.

### Estrutura do Projeto

```
aula1/
├── src/
│   ├── handler.js      # Handler principal da Lambda
│   └── utils/
│       ├── http.js     # Utilitários HTTP
│       ├── cors.js     # Utilitários CORS
│       ├── request.js  # Utilitários de requisição
│       └── cep.js      # Função de busca de CEP
├── serverless.yml      # Configuração do Serverless Framework
├── package.json        # Dependências do projeto
└── README.md           # Documentação do projeto
```

### Instalação

```bash
npm install
```

### Rodar Localmente

Para executar o servidor localmente na porta 3000:

```bash
npm run start
# ou
npm run dev
```

O servidor estará disponível em: `http://localhost:3000`

**Testar endpoints localmente:**

**GET /cep/{cep}** - Consulta CEP pelo path
```bash
curl http://localhost:3000/dev/cep/01310100
```

**GET /cep?cep={cep}** - Consulta CEP pela query string
```bash
curl http://localhost:3000/dev/cep?cep=01310100
```

### Deploy

```bash
npm run deploy
```

### Teste Local (invoke direto)

```bash
npm run invoke
```

### Endpoints HTTP (Produção)

Após o deploy, os seguintes endpoints estarão disponíveis:

**GET /cep/{cep}** - Consulta CEP pelo path
```bash
curl https://[api-id].execute-api.[region].amazonaws.com/dev/cep/01310100
```

**GET /cep?cep={cep}** - Consulta CEP pela query string
```bash
curl https://[api-id].execute-api.[region].amazonaws.com/dev/cep?cep=01310100
```

**Resposta exemplo (sucesso):**
```json
{
  "success": true,
  "data": {
    "cep": "01310-100",
    "logradouro": "Avenida Paulista",
    "complemento": "",
    "bairro": "Bela Vista",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
  }
}
```

**Resposta exemplo (erro):**
```json
{
  "success": false,
  "error": "CEP não encontrado"
}
```

Todos os endpoints suportam CORS e estão configurados para aceitar requisições de qualquer origem.

---

## Comandos Git Básicos

## comando de abrir pasta       
    rodrigo.daniel@SPONB003402 MINGW64 ~
    $ explorer .

## criar pasta
    rodrigo.daniel@SPONB003402 MINGW64 ~
    $ mkdir projetos

## entrar na pasta
    rodrigo.daniel@SPONB003402 MINGW64 ~
    $ cd projetos

## listar conteudo da pasta
    rodrigo.daniel@SPONB003402 MINGW64 ~/projetos
    $ ls

## clonar projeto do git
    rodrigo.daniel@SPONB003402 MINGW64 ~/projetos
    $ git clone https://github.com/rodrigoadaniel/aula1.git
    Cloning into 'aula1'...
    remote: Enumerating objects: 5, done.
    remote: Counting objects: 100% (5/5), done.
    remote: Compressing objects: 100% (4/4), done.
    remote: Total 5 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
    Receiving objects: 100% (5/5), done.

## abrir o cursor com o projeto clonado
    rodrigo.daniel@SPONB003402 MINGW64 ~/projetos/aula1 (main)
    $ cursor .
