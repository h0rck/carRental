import { Request, Response } from "express";
import {sequelize} from '../../databases/db';
import {AluguelModel} from '../../databases/models/Aluguel';
import { CarrosModel } from "../../databases/models/Carros";
import { UsuariosModel } from "../../databases/models/Usuarios";

export default (() => {

    async function usuario(req: Request, res:Response){
      // try{

      const id = req.params.id;
      const data  = await AluguelModel.findAll({
        where:{idUsuario:id}
        });

      console.log(data.length)

      const usuario = await UsuariosModel.findOne({
        where:{id:id}
      });

      const obj = {
        nome: usuario?.nome,
        email: usuario?.email,
        carros: []
      }


      for (let i = 0; i < data.length; i++) {
        const carro = await CarrosModel.findOne({
          where:{id:data[i].idCarro},
        });
        console.log(carro)
        // obj.carros =+ {
        //   carro: carro?.marca,
        //   modelo: carro?.modelo,
        //   placa: carro?.placa
        // };

      }

      // for(let i of Object.keys(data)){
      //   console.log(data[i])
      // }

      // include: [
      //     {
      //       model: UsuariosModel,
      //       // required: true,
      //     },
      //     {
      //       model:CarrosModel,
      //     }
      //     ],
      // })

      return res.send(obj);
      // }catch(err){
      //   // return res.send(err)
      //   console.log(err)
      // }
    }

    async function register(req: Request, res:Response){
        const {idUsuario,idCarro} = req.body;
        const data = await AluguelModel.create({
          idUsuario,idCarro
        });
        return res.send(data);
    }


    return {
        usuario,
        register
    };

})()
