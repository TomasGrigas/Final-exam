const express = require('express');
const cors = require('cors');
const mysql =require('mysql2')

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const mysqlConfig = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT
};

const connection =mysql.createConnection(mysqlConfig);

app.get('/attendees', (req, res) => {
    const { userId } = req.query;
    connection.execute('SELECT * FROM attendees WHERE userId=?', [userId], (err, attendees) => {
        res.send(attendees);
    });
});

app.post ('/attendees', (req, res) =>{
    const {name, surname, email, phone_number, userId } =req.body;

    connection.execute(
        'INSERT INTO attendees (name, surname, email, phone_number, userId) VALUES(?,?,?,?,?)',[name, surname, email, phone_number, userId],
        (err, result) => {
            connection.execute('SELECT * FROM attendees WHERE userId=?', 
            [userId],
            (err, attendees) => {
                res.send(attendees);
            });
        }
    )
});

app.post('/register', (req, res) => {
    const { email, name, surname, password } =req.body;
    
    connection.execute(
        'INSERT INTO users(email, name, surname, password) VALUES(?,?,?,?)',
        [email, name, surname, password],
        (err, result) => {
            res.sendStatus(200);
        }
    )
})

const PORT = 8000;

app.listen(PORT, () => console.log (`Express server running on PORT: ${PORT}`));