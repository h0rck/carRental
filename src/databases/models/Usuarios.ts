import {
  InferAttributes, InferCreationAttributes, CreationOptional,

  HasManyAddAssociationMixin, HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin,
  HasManySetAssociationsMixin, HasManyAddAssociationsMixin, HasManyHasAssociationsMixin,
  HasManyRemoveAssociationMixin, HasManyRemoveAssociationsMixin,

  Association, DataTypes, Model, Optional, NonAttribute, ForeignKey,
} from 'sequelize';

import {sequelize} from '../db';
import {Aluguel} from './Aluguel';


class Usuarios extends Model<InferAttributes<Usuarios>, InferCreationAttributes<Usuarios>>{
  declare id: CreationOptional<number>;
  declare nome:  string;
  declare email: string;
  declare senha: string;

  // declare getAluguels: HasManyGetAssociationsMixin<Aluguel>
  // declare addAluguel: HasManyAddAssociationMixin<Aluguel, number>;
  // declare addAluguels: HasManyAddAssociationsMixin<Aluguel, number>;
  // declare setAluguels: HasManySetAssociationsMixin<Aluguel, number>;
  // declare removeAluguel: HasManyRemoveAssociationMixin<Aluguel, number>;
  // declare removeAluguels: HasManyRemoveAssociationsMixin<Aluguel, number>;
  // declare hasAluguel: HasManyHasAssociationMixin<Aluguel, number>;
  // declare hasAluguels: HasManyHasAssociationsMixin<Aluguel, number>;
  // declare countAluguels: HasManyCountAssociationsMixin;
  // declare createAluguel: HasManyCreateAssociationMixin<Aluguel, 'idUsuario'>;

  // get fullNome(): NonAttribute<string> {
  //   return this.nome;
  // }


  // declare aluguels?: NonAttribute<Aluguel[]>
  // declare static associations: {
  //   aluguels: Association<Usuarios, Aluguel>;
  // };

}

Usuarios.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type :  DataTypes.STRING,
            allowNull: false,
        },
        senha:{
            type :  DataTypes.STRING,
            allowNull: false,
        }
    },{
    tableName: 'Usuarios',
    sequelize,
});

Usuarios.hasMany(Aluguel, {
  sourceKey: 'id',
  foreignKey: 'idUsuario'
});


export {Usuarios};
//   Usuarios.hasMany(Aluguel, {sourceKey: 'id', foreignKey:'idUsuario'});

// console.log(User)
// A validação de senha deve ser feita aqui
// User.prototype.validPassword = senha  =>  bcrypt.compareSync(senha, this.senha);


// User.beforeCreate(async (user) =>  user.senha = await bcrypt.hash(user.senha, 2));


