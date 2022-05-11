import {
  InferAttributes, InferCreationAttributes, CreationOptional,

  Association, DataTypes, Model, Optional, NonAttribute, ForeignKey,
} from 'sequelize';

import {sequelize} from '../db';
import {Usuarios} from './Usuarios';
import {Carros} from './Carros';

class Aluguel extends Model<InferAttributes<Aluguel>, InferCreationAttributes<Aluguel>>{
  declare id: CreationOptional<number>;
  declare idUsuario:  ForeignKey<Usuarios['id']>;
  declare idCarro: ForeignKey<Carros['id']>;

}
Aluguel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    },{
    tableName: 'Aluguel',
    sequelize,
  });

Aluguel.belongsTo(Carros, {targetKey:'id', foreignKey: 'idCarro'})


export {Aluguel};



// AluguelModel.hasMany(CarrosModel, {foreignKey:'id'})
