import express from 'express';
import cors from 'cors';
import apis from './routes/apis';
import 'dotenv/config';


const app = express();


/*
    Esse é o arquivo principal aqui tudo é montado
*/

// cors e json para as apis
app.use(cors())
app.use(express.json());

app.use(express.urlencoded({ extended: true}));

//As apis entram aqui
app.use(apis)

// console.log(process.env)

// Aqui estabelecemos a conexão com o servidor
app.listen(process.env.PORT, () => {
  console.log('server on na porta: http://localhost:' + process.env.PORT)
});
