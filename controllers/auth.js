const mysql = require("mysql"); 
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

const db = mysql.createConnection({
    host    : process.env.DATABASE_HOST,
    user    : process.env.DATABASE_USER,
    password    : process.env.DATABASE_PASSWORD,
    database    : process.env.DATABASE
});

exports.profile = (req, res) => {
    console.log(req.body);
};

exports.discussion = (req, res) => {
    console.log(req.body);
};

exports.hw = (req, res) => {
    console.log(req.body);
};

exports.login = (req, res) => {
    console.log(req.body);

    // const name = req.body.name;
    // const email = req.body.email;
    // const password = req.body.password;
    // const passwordConfirm = req.body.passwordConfirm 
        // === shortcut below;

    const { name , email, password, passwordConfirm} = req.body;

    // confiirmation and duplicate check 
    db.query('SELECT email FROM user WHERE email = ?', [email], async (error, results)=>{
        if(error){
            console.log(error);
        }
        if(results.length > 0){
            return res.render('login', {
                message: "Email is already in use"
                
            })
        } else if(password !== passwordConfirm){
            return res.render('login', {
                message: "Passwords do not match"
                
            });
        }



        let hashedPassword = await bcrypt.hash(password, 8);
        console.log(hashedPassword);

        db.query('INSERT INTO user SET ?', {name: name, email: email, password: hashedPassword}, (error, results) => {
            if(error){
                console.log(error)
            } else {
                console.log(results)
                res.render('login', {
                    message: "User Registered"
                })
            }
        });
    });

}


