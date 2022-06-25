# Tasks-API

> Uma API que realiza o gerenciamento de tarefas.
  

Observações:

1. A string de conexão do banco de dados já está no .env, basta seguir as instruções e testar a aplicação a vontade.

2. Deixei o .env configurado para facilitar o manuseio da aplicação.

### _Instruções_

- Instalando as dependências:
```
$ yarn install
ou
$ npm run install

```
- Iniciando o server:
```
$ yarn start
ou
$ npm run start
```
*Server rodando no endereço localhost:3333*

**Observações:**

  1. Caso queira testar no insominia, deixei o arquivo das collections no projeto (nome do arquivo: insomnia_collection.json).
  2. Para realizar acesso nas rotas protegidas por autenticação, basta criar um usuário, fazer login e utilizar o acces_token na variavél de ambiente "token" do insominia.

### Testes

```
$ yarn test
ou
$ npm run test

```