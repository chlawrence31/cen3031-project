const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database: "AnimalSanctuary"        // Update to the name of your particular database set in mysqlWorkbench
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

//Checks if user is logged in
app.get('/', (req, res) => 
{
    if(req.session.username)
    {
        return res.json({valid: true, username: req.session.username})
    }
    else
    {
        return res.json({valid: false})
    }
})

//Handles signup requests
app.post('/signup', (req, res) => 
{
    const sql = "Insert user values"
    const values = 
    [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, result) => 
    {
        if(err) return res.json({Message: "Error in inserting user values"})
        return res.json.result
    })
})

//Handles login requests
app.post('/login', (req, res) => 
{
    const sql = "SELECT * FROM login WHERE email = ? AND password = ?"
    db.query(sql, [req.body.email, req.body.password], (err, result) => 
    {
        if(err) return res.json({Message: "Login Failed"});
        if(result.length > 0)
        {
            req.session.username = result[0].username;
            return res.json({Login: true})
        }
        else
        {
            return res.json({Login: false})
        }
    })
})

app.listen(8000, ()=> {console.log("Server started on port 8000")})
