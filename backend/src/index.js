//importar o express para dentro do projeto
const express = require('express');
const cors = require('cors');
const {errors} = require('celebrate');
const routes = require('./routes');

//criar a aplicação
const app = express();

app.use(cors());

app.use(express.json());

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP
 * GET: Buscar/listar informação do back-end
 * POST: Criar informação no back-end
 * PUT: Alterar informação no back-end
 * DELETE: Deletar informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * Query: Parâmetros nomeados/enviados na rota após o simbolo de ? (Filtros/Paginação)
  * Route Params: Parâmetros utilizados para indentificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostgeSQL, Oracle, Microsoft SQL
   * NoSQL: MongoDB, CouchDB
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('user').select('*').where()
    */

app.use(routes);

app.use(errors());

//porta pela qual vai ser acessada a aplicação
app.listen(3333);
