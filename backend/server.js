const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())

const db = mysql.createConnection({
    host:"local host",
    user: "root",
    password: "",
    database: ""        // Update to the name of your particular database set in mysqlWorkbench
})
app.get("./api", (req, res) => 
{
    res.json({"users": ["userOne", "userTwo", "userThree"]})
})

// Function to get the 100 animals from the animals table in the mysql db
app.get("/animals", (req,res) => {
    const sql = "SELECT * FROM animals";
    db.query(sql,(err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
})

app.listen(5000, ()=> {console.log("Server started on port 5000")})