module.exports = {
  HOST: "localhost",
  USER: "nazar",
  PASSWORD: "123asdQ",
  DB: "authdb",
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
/* API Reference for the Sequelize constructor: https://sequelize.org/master/class/lib/sequelize.js~Sequelize.html#instance-constructor-constructor
max: maximum number of connection in pool
min: minimum number of connection in pool
idle: maximum time, in milliseconds, that a connection can be idle before being released
acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
*/