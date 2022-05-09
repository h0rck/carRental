import { Request, Response } from "express";
import {CarrosModel} from '../../databases/models/Carros';

export default (() => {

    async function all(req: Request, res:Response){
        const data = await CarrosModel.findAll();
        return res.send(data);
    }
    async function register(req: Request, res:Response){
        const {marca,modelo,placa,ano} = req.body;
        const data = await CarrosModel.create({
          marca, modelo, placa, ano
    });
        return res.send(data);
    }


    return {
        all,
        register
    };

})()
