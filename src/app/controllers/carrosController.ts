import { Request, Response } from "express";
import {Carros} from '../../databases/models/Carros';

type Carro = {
        marca:string | null,
        modelo:string | null,
        placa:string | null,
        ano:string | null
    }

export default (() => {

    function validação<T>(obj:T[]}){
        obj.forEach(e => {
            console.log(e)
        })
    }

    async function all(req: Request, res:Response){
        const data = await Carros.findAll();
        return res.send(data);
    }

    async function register(req: Request, res:Response){
        try{
            const {marca,modelo,placa,ano} = req.body;
            const obj:{} ={marca,modelo,placa,ano}

            validação(obj)

            return

            if(!(/^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/.test(placa)))
                return res.send('A placa não é padrão Merco sul')

            const carro = await Carros.findOne({where:{placa}})
            if(carro) return res.send('placa já existe')
            const data = await Carros.create({ marca, modelo, placa, ano});
            return res.send(data);
        }catch(err){
            res.send(err);
        }
    }

    return {
        all,
        register
    };

})()
