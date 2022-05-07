import {Sequelize} from 'sequelize';

export const sequelize = new Sequelize(
  'carRental',
  'root',
  'root',
  {dialect: 'mysql', host: '0.0.0.0', port: 3306, define: {
  freezeTableName: true,
  timestamps: false,
}});

sequelize.authenticate().then( async () => {
  console.log('conexão feita na database.');
  // await sequelize.sync();
})
.catch(err => {
  console.error('erro na conexao com a database:', err);
});






