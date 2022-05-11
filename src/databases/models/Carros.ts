import {
  InferAttributes, InferCreationAttributes, CreationOptional,

  Association, DataTypes, Model, Optional, NonAttribute, ForeignKey,
} from 'sequelize';
import {sequelize} from '../db';


class Carros extends Model<InferAttributes<Carros>, InferCreationAttributes<Carros>> {
  declare id: CreationOptional<number>;
  declare marca:  string;
  declare modelo: string;
  declare placa: string;
  declare ano: number;
}

Carros.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        marca: {
            type: DataTypes.STRING,
            allowNull: false
        },
        modelo:{
            type :  DataTypes.STRING,
            allowNull: false,
        },
        placa:{
            type :  DataTypes.STRING,
            allowNull: false,
        },
        ano:{
            type :  DataTypes.INTEGER,
            allowNull: false,
        },
    },{
    tableName: 'Carros',
    sequelize,
  });

export {Carros};
