import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import { conectarServidorNoDB } from './config/db';

/**
 * Cria a aplicação
 */
export const app = express();

/**
 * Libera o acesso aos serviços
 */
app.use(cors());

/**
 * Permite receber e enviar JSON
 */
app.use(bodyParser.json());

/**
 * Configura os logs
 */
app.use(logger('dev'));


/**
 * Conecta no BD
 */
 conectarServidorNoDB()

/**
 * Configuração de rotas
 */

app.use('/', (req, res) => res.send('API veiculo'));