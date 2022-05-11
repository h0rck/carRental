import { Request, Response } from "express";
import {Aluguel} from '../../databases/models/Aluguel';
import { Carros } from "../../databases/models/Carros";
import {Usuarios} from "../../databases/models/Usuarios";

export default (() => {

    async function usuario(req: Request, res:Response){
      try{

      const id = req.params.id;

      const data  = await Usuarios.findAll({
        where:{id:id},
        attributes: ['id','nome','email'],
        include: {
            model: Aluguel,
            attributes: ['id'],
            include: [{
              model:Carros,
            }]
          }
        }
      );
      return res.send(data);
      }catch(err){
        console.log(err)
        return res.send(err)

      }
    }

    async function register(req: Request, res:Response){
        const {idUsuario,idCarro} = req.body;
        const data = await Aluguel.create({
          idUsuario, idCarro
        });
        return res.send(data);
    }


    return {
        usuario,
        register
    };

})()
