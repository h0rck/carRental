import Sequelize, {Model} from 'sequelize';
import {sequelize} from '../db';


class Carros extends Model {
  declare id:    number;
  declare idUsuario: number;
  declare idCarro:  number;
}

export const CarrosModel = Carros.init(
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
            references: {         // User belongsTo Company 1:1
                model: 'Usuario',
                key: 'id'
          }
        },
        idCarro: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          references: {         // User belongsTo Company 1:1
              model: 'Carros',
              key: 'id'
          }
        },
    },{
    tableName: 'Carros',
    sequelize,
  });
