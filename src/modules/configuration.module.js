const { error, parsed } = require('dotenv').config()

const getEnviroment = () => {
    try {
        if (error) throw error
        return parsed
    } catch (ex) {
        console.error("Can't parse enviroment vars:", ex)
    }    
}

module.exports = {
    getEnviroment
}