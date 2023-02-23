const db = require("../database");

exports.getCoustomer = (req , res)=>{
    db.query("SELECT * FROM users").then(result=>{
        res.status(200).send(result[0])
    }).catch(err=>{
        res.status(400).send(err);
    })
}

