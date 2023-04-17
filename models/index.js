const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(
  `postgres://postgres:123456@localhost:5432/auth-example`,
  { dialect: 'postgres' },
);

sequelize.authenticate().then(() => {
  console.log(`Database connected to api`)
}).catch((err) => {
  console.log(err)
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./userModel')(sequelize, DataTypes);

module.exports = db;
