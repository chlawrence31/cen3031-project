const express = require('express');
const session = require('express-session');
const mysql = require('mysql2')
const cors = require('cors')
const uuidv4 = require('uuid').v4;
//Do npm install uuid

const app = express()
app.use(cors())
app.use(express.json())

// Session middleware setup
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

const sessions = {};
const sessionId = uuidv4();

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
app.get('/loginCheck', (req, res) => 
{
    if(sessions[sessionId].userId == 1)
    {
        return res.json({
            username: sessions[sessionId].username,
            email: sessions[sessionId].email,
            donationAmount: sessions[sessionId].donationAmount,
            valid: true,
           })
    }
    else
    {
        return res.json({valid: false})
    }
});

//Handles signup requests
app.post('/signup', (req, res) => 
{
    const sql =  "INSERT INTO `login`(`username`, `email`, `password`) VALUES ('" + req.body.username + "', '" + req.body.email + "', '" + req.body.password + "')";;
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
            const username = result[0].username;
            const email = result[0].email;
            const donationAmount = result[0].donationAmount;
            sessions[sessionId] = {username: username, email: email, donationAmount: donationAmount, userId: 1};
            return res.json({ success: true, username: username, session: sessions[sessionId]});
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

// Return top 5 animals based on donation amount
app.get('/topThreeAnimals', (req, res) => {
    const sql = "SELECT * FROM animals ORDER BY donation DESC LIMIT 5";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/newAnimal', (req, res) => {
    // Extracting data from the request body
    const { name, species, sex, age, description, image } = req.body;

    // Constructing the SQL INSERT statement
    const sql = `INSERT INTO animals (Name, Species, Sex, Age, Description, Image, Donation) VALUES (?, ?, ?, ?, ?, ?, 0)`;
    
    // Executing the SQL query with the data
    db.query(sql, [name, species, sex, age, description, image], (err, data) => {
        if (err) {
            console.error('Error inserting new animal:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('Animal inserted successfully');
            res.status(200).json({ message: 'Animal inserted successfully' });
        }
    });
});

// Return total sum of all animal donations (total_donation: sum(donations))
app.get('/totalDonations', (req, res) => {
    const sql = "SELECT SUM(Donation) AS totalDonation FROM animals";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});



app.listen(8000, ()=> {console.log("Server started on port 8000")})
