const express = require('express');
const cors = require('cors');
const mysql =require('mysql2')

const app = express();

app.use(cors());
app.use(express.json());

const mysqlConfig = {
    host:"127.0.0.1",
    user:"root",
    password:"zalgiris",
    database:"registration_tracker",
    port: 3306
};

const connection =mysql.createConnection(mysqlConfig);

app.get('/attendees', (req, res) => {
    const { userId } = req.query;
    connection.execute('SELECT * FROM attendees WHERE userId=?', [userId], (err, attendees) => {
        res.send(attendees);
    });
});

const PORT = 8000;

app.listen(PORT, () => console.log (`Express server running on PORT: ${PORT}`));