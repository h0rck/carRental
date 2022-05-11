import { Request, Response } from "express";
// import bcrypt from 'bcryptjs';
import jwt    from 'jsonwebtoken';
import {Usuarios} from '../../databases/models/Usuarios';
import bcrypt   from 'bcryptjs';

export default (() => {

    // Limpa o array 'user' para passar só os parâmetros necessários
    // Gera o token de segurança que serve para autentificar as apis
    const generateToken =  (params:Number) => jwt.sign({params}, 'carRental123',{expiresIn: 86480,});



    async function all(req: Request, res:Response){
        const users = await Usuarios.findAll();
        return res.send(users);
    }

    //POST    Cria usuários
    async function register(req: Request, res:Response) {
        try{
            console.log(req.body)
            const {nome,email,senha} = req.body;

            const data = await Usuarios.create({
                nome,
                email,
                senha : await bcrypt.hash(senha, 2)
            });

            return res.send({usuarios:{email:data.email,nome:data.nome}, token:generateToken(data.id)});

        }catch(err:any){
            return res.send({error:err?.message, req:req});
        }

    }

    // //POST    Valida os usuários
    async function authenticate (req:Request, res:Response) {
        // try{
            const {email, senha} = req.body;
            const data = await Usuarios.findOne({where: {email}});

            if(!data) return res.status(404).send({error:'Usuário não encontrado'})

            // Valida a senha
            console.log(data)
            if(!bcrypt.compareSync(senha, data.senha)) return res.status(404).send({error:'Senha invalida'})

            return res.send({user:{email:data.email,nome:data.nome} , token: generateToken(data.id)});
        // }catch(err){
        //     return res.status(404).send({error: err.message})
        // }
    }

    return {
        all,
        register,
        authenticate
    };

})()
