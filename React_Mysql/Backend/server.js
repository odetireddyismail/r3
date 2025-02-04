const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const PORT = 8080;
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(cors());

const {DB_USER,DB_HOST,DB_PASSWORD,DB_DATABASE,DB_PORT}=process.env
const con = mysql.createConnection({
  user:DB_USER,
  host:DB_HOST,
  password:DB_PASSWORD,
  database: DB_DATABASE,
});

//POst the data to the server
app.post("/register", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  con.query(
    "INSERT INTO usertable (email,password) VALUES(?,?)",
    [email, password],
    (error, result) => {
      if (result) {
        //res.send(result);
        console.log()
      } else {
        res.send({ message: "Enter Correct asked details" });
      }
    }
  );
});

//get the data from the server

app.get('/register',(req,res)=>{
con.query('select*from usertable',(err,result)=>{

    if(err){
        console.log(err)
    }
    else{
       res.send(result)
    }
})

})
app.get('/register',)

app.listen(PORT, () => {
  console.log("Hallow ");
});
