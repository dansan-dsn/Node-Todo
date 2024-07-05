require('dotenv').config()
const mysql = require('mysql2')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL_PASS,
    database: 'todo_db'
})

module.exports = con