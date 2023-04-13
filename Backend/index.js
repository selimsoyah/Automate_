const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const mysql = require('mysql')

app.use(cors())
app.use(express.json())

const db = mysql.createConnection ({
        password : 'loumalimou',
        database:'automateappv10',
        user:'root',
        localhost:'localhost'
})

app.post('/location', (req,res)=>{
  
        const store_name = req.body.store_name
        const latitude = req.body.latitude
        const longitude = req.body.longitude
        const categories = req.body.categories

    db.query("INSERT INTO mechanicalstore (user_id,store_name,latitude,longitude,categories) VALUES (1,?,?,?,?)",
     [store_name,latitude,longitude,categories],(err, result)=>{
        if (err){console.log(err)}
        else{
            res.send('Great Success')
        }
     })
})

app.listen(port, ()=>{
    console.log(`connected to the server ${port}`)
})