const mysql = require('mysql2/promise')
const enviroment=  require('dotenv')

// pegando as variáveis de ambiente pra deixar
// como anônimo as variáveis
enviroment.config()

// 
const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

module.exports = {
    connection,
    enviroment
}