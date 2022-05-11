import express, {Application} from 'express';
import cors from 'cors';
import apis from './routes/apis';
import swaggerUi from 'swagger-ui-express';
import docs from './swagger.json';

import 'dotenv/config';

/*
    Esse é o arquivo principal aqui tudo é montado
*/

const app:Application = express();

// cors e json para as apis
app.use(cors())
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

//As apis entram aqui
app.use('/docs',swaggerUi.serve,swaggerUi.setup(docs))
app.use(apis)


// console.log(process.env)

// Aqui estabelecemos a conexão com o servidor
app.listen(3333, () => {
  console.log('server on na porta: http://localhost:' + 3333)
});
