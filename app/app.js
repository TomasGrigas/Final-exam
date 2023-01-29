const express = require('express');
const cors = require('cors');
const mysql =require('mysql2');
const bcrypt = require('bcrypt');

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
    const hashedPassword = bcrypt.hashSync(password, 12);
    
    connection.execute(
        'INSERT INTO users(email, name, surname, password) VALUES(?,?,?,?)',
        [email, name, surname, hashedPassword],
        (err, result) => {
            if(err?.code=== 'ER_DUP_ENTRY'){
                res.sendStatus(400);
            }
            res.send(result);
        }
    )
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    connection.execute(
        'SELECT * FROM users WHERE email=?',
        [email],
        (err, result) => {
            if(result.length === 0) {
                res.sendStatus(401);
            } else {
                const hashPassword = result[0].password
                const isPasswordCorrect = bcrypt.compareSync(password, hashPassword);
                if(isPasswordCorrect){
                    res.send(result[0]);
                } else {
                    res.sendStatus(401);
                }              
            }
        }      
    );
});

const PORT = 8000;

app.listen(PORT, () => console.log (`Express server running on PORT: ${PORT}`));