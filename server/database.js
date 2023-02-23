const mysql = require("mysql2");
// const dotenv = require("dotenv");

// dotenv.config();

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password:"",
    database: "dietitian"
}).promise()

module.exports = pool