const express = require("express");
const path = require("path");
const mysql = require("mysql");
const dotenv = require("dotenv")


dotenv.config({ path: './.env'});

const app = express();

const db = mysql.createConnection({
    host    : process.env.DATABASE_HOST,
    user    : process.env.DATABASE_USER,
    password    : process.env.DATABASE_PASSWORD,
    database    : process.env.DATABASE
});

const publicDirectory = path.join(__dirname,'./public');

// parse url encoded 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(publicDirectory));

app.use('/Pictures', express.static('Pictures'));

app.use('/Video', express.static('Video'));

app.set('view engine', 'hbs');

db.connect((err) => {
    if(err){
        throw err;
    } else {
        console.log('mysql connected');
    }
})

// app.get("/", (req, res) =>{
//     res.render('index')
// });

// app.get("/register", (req, res) =>{
//     res.render('register')
// });

// Define routes 
app.use('/', require('./routes/pages.js'));

// app.use('/register', require('./routes/pages.js'));

// to get data input 
app.use('/auth', require('./routes/auth'));


app.listen(5000, () =>{
    console.log("server started at port 5000")
})