# nodejs-turtle
Turtle CRUD Project - REST webservice criado em NodeJS

### Pré-requisitos
Para utilizar esse projeto, é necessário ter um ambiente com Node e MongoDB configurados.

#### Instalação e configuração
Links para download
```
Node: https://nodejs.org/en/download/
MongoDB: https://docs.mongodb.com/manual/administration/install-community/
```

Criar um banco no MongoDB, com os seguintes campos:
- Nome
- Telefone
- E-mail
- Idade

### Exemplo de criação do banco
Dentro do shell do MongoDB:
```
use turtle

db.turtle.insertOne({	
    "nome": "Matheus Alexandre de Souza",
    "telefone": "1234567890",
    "email": "matheus.de.souza@ibm.com",
    "idade": 23
});
```

## Utilizando o projeto
Clonar esse repositório
```
git clone https://github.ibm.com/Matheus-de-Souza/Turtle-NodeJS-lab.git
```

Pelo Prompted ou Terminal, dentro do diretório do projeto, instalar npm, dependencia para o NodeJS:
```
npm install
```

Executar o servidor:
```
node server.js
```

## Endpoints

```
GET: /registro
```
Retorna todos os registros do banco de dados, em formato JSON.

---

```
GET: /registro/:email
```
No parâmetro <email> informar o e-mail que deseja buscar o registro.

Retorna o registro que possue email igual ao parâmetro passado.

---

```
POST: /registro
```
Informar no corpo (body) da requisição, em estrutura JSON, o registro que deseja gravar.

Cria um novo registro no banco de dados.

---

```
PUT: /registro/:RegId
```
No parâmetro <RegId> informar o ID do registro que deseja alterar.

Informar no corpo (body) da requisição, em estrutura JSON, o registro que deseja alterar.

Faz o update do registro que possui o id passado como parâmetro.

---

```
DELETE: /registro/:RegId
```
No parâmetro <RegId> informar o ID do registro que deseja remover.

Remove o registro que possui o id passado como parâmetro.

---
