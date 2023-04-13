const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql');
const cors = require('cors');
app.use(express.json())
app.use(cors());
const db = mysql.createConnection({
    user: 'root',
    host :'localhost',
    password:'0011ooiiWWAA',
    database:'User',
    port:'3306',
});
app.post('/register',(req,res)=> {
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const password = req.body.password;
    const mecorcar = req.body.mecorcar;
    db.query(
        'INSERT INTO User(username,useremail,phonenumber,password,mecorcar) VALUES (?,?,?,?,?)',[name,email,phonenumber,password,mecorcar] ,(err,result) =>{
        if(err){
            console.log(err);
        }else{
            res.send("All The Attributes Were Inserted Into Our Tables !!!!");
            console.log(res.body)
        }
    })
})    


app.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const password = req.body.password;
    const mecorcar = req.body.mecorcar;
    
    db.query('SELECT * FROM username WHERE email = ?', [email], (err, result) => {
      if (result.length > 0) {
        res.send('Email already exists, please choose another one');
      } else {
        db.query('INSERT INTO username(username, email, phonenumber, password, mecorcar) VALUES (?, ?, ?, ?, ?)',
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
app.listen(port, () => {
    console.log(`Server Is Runnning On Your Port ${port}`);
});