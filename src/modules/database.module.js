const { Sequelize } = require("sequelize");
const { config } = require("./configuration.module");

const connectDatabase = async () => {
  try {
    const sequelize = new Sequelize({
      dialect: 'postgres',
      host: config.DB_HOST,
      username: config.DB_USER,
      password: config.DB_PASS,
      database: config.DB_NAME,
    })

    await sequelize.sync({ force: true});
    console.info("Database Connected Succesfully")
  } catch (ex) {
    console.error("Unable to establish connection with database:", ex)
  }
}

module.exports = {
  connectDatabase,
}
