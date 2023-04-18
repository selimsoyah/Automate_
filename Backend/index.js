const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const cors = require('cors');
app.use(express.json())
app.use(cors());
const jwt = require('jsonwebtoken');
const db = mysql.createConnection({
    user: 'root',
    host :'localhost',
    password:'0011ooiiWWA',
    database:'user',
    port:'3306',
});
app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const password = req.body.password;
    const mecorcar = req.body.mecorcar;
    db.query('SELECT * FROM user WHERE useremail = ?', [email], (err, result) => {
      if (result.length > 0) {
        res.send('Email already exists, please choose another one');
      } else {
        db.query('INSERT INTO user(username, useremail, phonenumber, password, mecorcar) VALUES (?, ?, ?, ?, ?)',
          [name, email, phonenumber, password, mecorcar],
          (err, result) => {
            if (err) {
              console.log(err);
              res.send('Error inserting user data');

            } else {
              res.send('All the attributes were inserted into our tables!');
            }
          }
        );
      }
    });
  });
  app.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    db.query('SELECT * FROM user WHERE useremail = ? AND password = ?', [email, password], (err, result) => {
        if (result.length > 0) {
            const id= result[0].id;
             const token =jwt.sign({id},"jwtSecretKey",{expiresIn:300});
            res.json({Login:true,token,result}) 
        } else {
            res.send('Invalid email or password');
        }
    });
});
app.listen(port, () => {
    console.log(`Server Is Runnning On Your Port ${port}`);
});
