import Sequelize, {Model} from 'sequelize';
import {sequelize} from '../db';
import { CarrosModel } from './Carros';
import { UsuariosModel } from './Usuarios';


class  Aluguel extends Model {
  declare id:    number;
  declare idUsuario: number;
  declare idCarro:  number;
}

export const AluguelModel =  Aluguel.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        idUsuario: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: UsuariosModel,
                key: 'id'
          }
        },
        idCarro: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {
              model: CarrosModel,
              key: 'id'
          }
        },
    },{
    tableName: 'Aluguel',
    sequelize,
  });

AluguelModel.hasMany(UsuariosModel, {foreignKey:'id'})
AluguelModel.hasMany(CarrosModel, {foreignKey:'id'})
