const Sequelize = require("sequelize");

// const sequelize = new Sequelize("task", "osagie", "123456", {host: "localhost", dialet:"mysql", operatorsAliases:false})

// const dataConnection = async () => {
//   const sequelize = new Sequelize("task", "osagie", "123456", {
//     host: "localhost",
//     dialect: "mysql",
//   });
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

  const db = new Sequelize("task", "osagie", "123456", {
    host: "localhost",
    dialect: "mysql",
  });

// module.exports = dataConnection;
module.exports = db;
// global.sequelize = sequelize
