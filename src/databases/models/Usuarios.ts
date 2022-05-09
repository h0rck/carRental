import Sequelize, {Model} from 'sequelize';
import {sequelize} from '../db';
import { AluguelModel } from './Aluguel';


class  Usuarios extends Model {
  declare id:    number;
  declare nome:  string;
  declare email: string;
  declare senha: string;
}

export const UsuariosModel =  Usuarios.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        email:{
            type :  Sequelize.STRING,
            allowNull: false,
        },
        senha:{
            type :  Sequelize.STRING,
            allowNull: false,
        }
    },{
    tableName: 'Usuarios',
    sequelize,
  });

// AluguelModel.hasOne(UsuariosModel, {foreignKey:'id'})

// console.log(User)
// A validação de senha deve ser feita aqui
// User.prototype.validPassword = senha  =>  bcrypt.compareSync(senha, this.senha);


// User.beforeCreate(async (user) =>  user.senha = await bcrypt.hash(user.senha, 2));


// export const UserModel = sequelize.define('user', {
//         id: {
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             allowNull: false,
//             primaryKey: true
//         },
//         name: {
//             type: Sequelize.STRING,
//             allowNull: false
//         },
//         email:{
//             type :  Sequelize.STRING,
//             allowNull: false,
//         },
//         senha:{
//             type :  Sequelize.STRING,
//             allowNull: false,
//         },

// }, {
//   hooks: {
//     beforeCreate() {
//         // console.log(this)
//     }
//   }
// });
