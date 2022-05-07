import { NextFunction, Request, Response } from "express";
import * as jwt from 'jsonwebtoken';

import 'dotenv/config';

/*
    Essa função valida o token passado e retorna o id do usuário que o utiliza.
    O token tem que ser passado no headers como authorization
    ex:
        Bearer + ' ' + token    Só com um espaço separando

*/

export default (req:Request,res:Response,next:NextFunction) => {
    try{
        const authorization = req.headers.authorization;
        // verifica se o token foi passado no header
        if(!authorization) return res.status(401).send({erro: 'O token é necessário'});

        const [, token] = authorization.split(' ');; // Bearer, token

        // Valida antes para poupar processamento
        // if(!auth || parts === 2 || !/^Bearer$/i.test(schema))
        //     return res.status(401).send({error: 'Token invalido'});

        // valida o token usando o TOKEN do .env
        jwt.verify(token, process.env.TOKEN_AUTH)
        return next();

    }catch(err:any){
        return res.status(401).send({erro: err.message});
    }

}
