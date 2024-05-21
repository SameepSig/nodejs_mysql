const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host: 'sameep-database-rds-mysql-1.cmuokqciitb8.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'admin123',
    database: 'sameep_mysql_db'
})

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

app.get('/', (req, res) => {
    return res.json("From backend side");
})

app.get('/users', (req, res)=>{
    const sql = "SELECT * FROM employees";
    db.query(sql, (err, data)=> {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8080, () => {
    console.log("Listening");
})