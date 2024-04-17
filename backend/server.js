const express = require('express');
const session = require('express-session');
const mysql = require('mysql2')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

// Session middleware setup
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

const db = mysql.createConnection({
    host:"localhost",
    user: "root",
    password: "password",
    database: "AnimalSanctuary"        // Update to the name of your particular database set in mysqlWorkbench
});

// Function to get the 100 animals from the animals table in the mysql db
app.get("/animals", (req,res) => {
    const sql = "SELECT * FROM animals";
    db.query(sql,(err, data)=> {
        if(err) return res.json(err);
        return res.json(data)
    })
});

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
});

//Handles signup requests
app.post('/signup', (req, res) => 
{
    const sql =  "INSERT INTO `login`(`name`, `email`, `password`) VALUES ('" + req.body.username + "', '" + req.body.email + "', '" + req.body.password + "')";;
    const values = 
    [
        req.body.username,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, result) => 
    {
        if(err) return res.json({Message: "Error in inserting user values"})
        return res.json.result
    })
});

//Handles login requests
app.post('/login', (req, res) => {
    // Extract data from request body
    const { email, password } = req.body;

    const sql = "SELECT * FROM login WHERE email = ? AND password = ?";
    db.query(sql, [email, password], (err, result) => {
        if (err) {
            console.error('Error executing login query:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        if (result.length > 0) {
            // User found, set session and return success
            const username = result[0].username;
            req.session.username = username;
            return res.json({ success: true, username: username });
        } else {
            // No user found with provided credentials
            return res.status(401).json({ message: 'Invalid email or password' });
        }
    });
});


//Update donation info in DB
app.post('/donationUpdate', (req, res) => {
    // Extract data from request body
    const { animalId, amount } = req.body;
    // SQL query
    const sql = "UPDATE animals SET donation = donation + ? WHERE id = ?";
    db.query(sql, [amount, animalId], (err, result) => {
        if (err) {
          console.error('Error updating donation:', err);
          res.status(500).json({ error: 'Internal server error' });
        } else {
          console.log('Donation updated successfully');
          res.status(200).json({ message: 'Donation updated successfully' });
        }
    });
});

app.get("/topThreeAnimals", (req, res) => {
    const sql = "SELECT * FROM animals ORDER BY donation DESC LIMIT 3";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});



app.listen(8000, ()=> {console.log("Server started on port 8000")})
