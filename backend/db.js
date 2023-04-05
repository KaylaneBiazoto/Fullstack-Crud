import mysql from 'mysql'

export const db = mysql.createConnection({
    host: "localhost",
    user: "kaylane",
    password: "Kay112233.",
    database: "crud"
})