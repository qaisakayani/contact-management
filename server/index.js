const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "test_dev",
});
const whitelist = ["http://localhost:3000"];
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/getlist", (req, res) => {
  const sqlGet = "SELECT * FROM contact";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});
app.get("/", (req, res) => {
  //   const query =
  //     "INSERT INTO contact (name,email,contact) values('abc','k@gmail.com','5747644')";
  //   db.query(query, (error, result) => {
  //     console.log("error", error);
  //     console.log("result", result);
  //   });
});

app.listen(5000, () => {
  console.log("server is running on port 5000");
});
