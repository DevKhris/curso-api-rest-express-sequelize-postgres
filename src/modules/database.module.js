const Sequelize = require('sequelize')

const connectDatabase = async (uri) => {
    const sequelize = new Sequelize({
        dialect: process.env.DB_PROVIDER,
        host: process.env.DB_HOST,
        username: process.env.DB_USER ,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    })

    try {
        await sequelize.authenticate()
        console.info('Database Connected Succesfully')
    } catch (ex) {
        console.error('Unable to establish connection with database:', ex)
    }
}

module.exports = {
    connectDatabase
}