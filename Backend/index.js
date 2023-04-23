require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
app.use(express.json())
app.use(cors());
const serverport = process.env.serverport;
const jwt = require('jsonwebtoken');
const db = mysql.createConnection({
  user: process.env.user,
  host: process.env.host,
  password: process.env.password,
  database: process.env.database,
  port: process.env.port,
});
app.post('/register', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const phonenumber = req.body.phonenumber;
  const password = req.body.password;
  const mecorcar = req.body.mecorcar;
  db.query('SELECT * FROM user WHERE useremail = ?', [email], (err, result) => {
    if (result && result.length > 0) {
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
const verifyJWT = (req, res, next) => {
  const token = req.headers["access-token"];
  if (!token) {
    res.send("No Token Found !")
  } else {
    jwt.verify(token, "jwtSecretKey", (err, decoded) => {
      if (err) {
        res.json({ auth: false, message: "You Failed To Authenticate" })
      }
      else {
        req.Id = decoded.Id;
        next();
      }
    })
  }
}
app.get('/auth', verifyJWT, (req, res) => {
  res.send("You Are Authenticated !!")
})
app.post('/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query('SELECT * FROM user WHERE useremail = ? AND password = ?', [email, password], (err, result) => {
    if (result.length > 0) {
      const id = result[0].id;
      const token = jwt.sign({ id }, "jwtSecretKey", { expiresIn: 300 });
      res.json({ Login: true, token, result })
    } else {
      res.json({ Login: false, result })

    }
  });
});



// const db = mysql.createConnection ({
//         password : 'loumalimou',
//         database:'automateappv10',
//         user:'root',
//         localhost:'localhost'
// })

app.post('/location', (req, res) => {

  const store_name = req.body.store_name
  const latitude = req.body.latitude
  const longitude = req.body.longitude
  const categories = req.body.categories

  db.query("INSERT INTO mechanicalstore (user_id,store_name,latitude,longitude,categories) VALUES (1,?,?,?,?)",
    [store_name, latitude, longitude, categories], (err, result) => {
      if (err) { console.log(err) }
      else {
        res.send('Great Success')
      }
    });
})

app.listen(serverport, () => {
  console.log(`Server Is Runnning On Your Port ${serverport}`);
});

