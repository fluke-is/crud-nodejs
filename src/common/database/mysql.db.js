import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config()

const db = mysql.createConnection({
    host : process.env.MYSQL_HOST,
    user : process.env.MYSQL_USER,
    password : process.env.PASSWORD,
    database : process.env.MYSQL_DB_NAME
});

db.connect((error) => {
    if (error) {
        console.error(`[Error with DataBase Connection] ${error}`)
        return;
    }
    console.log(`MySQL Connection as id: ${db.threadId}`)
});

export const doQuery = (sql, options) => {
    return new Promise((resolve, reject) => {
        db.query(sql, options, (err, res) => {
            if (err) {
                throw err;
            }
            resolve(res)
        })
    })
}

export default db;