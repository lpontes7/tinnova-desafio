import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import { conectarServidorNoDB } from './config/db';
import { router } from './routes'
import swaggerJsDoc = require('swagger-jsdoc')
import swaggerUi = require('swagger-ui-express')

//Documentacao com Swagger
const swaggerDefinition = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Exercicio 5 API",
            version: "1.4.0",
            description: "Documentação da api"
        }
    },
    apis: ['swagger.yaml'],
}
const swaggerDocs = swaggerJsDoc(swaggerDefinition)

//Cria a aplicação
export const app = express();
//Rota documentação
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
//Libera o acesso aos serviços
app.use(cors());
//Permite receber e enviar JSON
app.use(bodyParser.json());
//Configura os logs
app.use(logger('dev'));
//Conecta no BD
conectarServidorNoDB()
//Configuração de rotas
app.use(router)

