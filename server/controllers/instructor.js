const db = require("../database");

exports.getAllInstructor = (req, res) => {
    db.query("SELECT * FROM instructors")
  .then((result) => {
    // console.log(result[0]);
    res.send(result[0])
  })
  .catch((err) => {
    console.log(err);
  });
}


exports.addInstructor = (req, res) => {
    const {
      name,
      country_code,
      mobile,
      email,
      email_verified_at,
      mobile_verified_at,
      password,
      remember_token,
      ban,
      deleted,
      status,
      document_verified,
      available,
    } = req.body;
  
    db.query(
      "INSERT INTO instructors (name ,country_code,mobile,email,email_verified_at,mobile_verified_at,password,remember_token,ban,deleted,status,document_verified,available)  VALUE (?,?,?,?,?,?,?,?,?,?,?,?,?)", [name, country_code,mobile,email, email_verified_at , mobile_verified_at , password, remember_token, ban,deleted, status, document_verified, available]
    ).then(result=>{
      console.log(result);
      res.status(200).send(result[0])
    }).catch(err=>{
      console.log(err);
      res.status(400).send(err)
    });
  }