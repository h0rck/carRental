import { Request, Response } from "express";
import {Aluguel} from '../../databases/models/Reservas';
import { Carros } from "../../databases/models/Carros";
import {Usuarios} from "../../databases/models/Usuarios";

export default (() => {

    async function busca(req: Request, res:Response){
      try{
      const placa = req.params.placa;



      // const data  = await Usuarios.findAll({
      //   // where:{id},
      //   attributes: ['id','nome','email'],
      //   include: {
      //       model: Aluguel,
      //       attributes: ['id'],
      //       include: [{
      //         model:Carros,
      //       }]
      //     }
      //   }
      // );
      // return res.send(data);
      }catch(err){
        console.log(err)
        return res.send(err)

      }
    }

    async function register(req: Request, res:Response){
        const {email,placa} = req.body;
        if(!email && !placa) return res.send('id do usuario e placa é Obrigatorio');

        const usuario = await Usuarios.findOne({where:{email:email}})
        const carro = await Carros.findOne({where:{placa:placa}})

        if(!usuario) res.send('Usuario não encontrado');
        if(!carro) res.send('Placa não encontrada');

        const data = await Aluguel.create({
          idUsuario:usuario?.id , placa
        });
        return res.send(data);
    }

    async function destroy(req: Request, res:Response){
        const id = req.params.id;
        const data = await Aluguel.destroy({ where:{ id: id } });
        return res.send(data);
    }


    return {
        busca,
        register,
        destroy
    };

})()
