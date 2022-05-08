import Sequelize, {Model} from 'sequelize';
import {sequelize} from '../db';


class Carros extends Model {
  declare id:    number;
  declare marca:  string;
  declare modelo: string;
  declare placa: string;
  declare ano: number;
}

export const CarrosModel = Carros.init(
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        marca: {
            type: Sequelize.STRING,
            allowNull: false
        },
        modelo:{
            type :  Sequelize.STRING,
            allowNull: false,
        },
        placa:{
            type :  Sequelize.STRING,
            allowNull: false,
        },
        ano:{
            type :  Sequelize.INTEGER,
            allowNull: false,
        },
    },{
    tableName: 'Carros',
    sequelize,
  });
