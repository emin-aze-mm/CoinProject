/** @format */

const mysql = require("mysql");
const express = require("express");
const cors = require("cors");


/* ------ Create connection ----- */

const db = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "1234",
  database: "coinsdb",
});

/*---- Connect ---- */

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Mysql Connected...");
});

const app = express();

app.listen("4000", () => {
  console.log("Server started on port 4000");
});

app.use(cors())

app.get('/coins', (req, res) => {
   db.query('SELECT * FROM coins;', 
    (err, data) => {
      if (err) return res.status(500);
      res.json(data);
    })
});