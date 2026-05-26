const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Jiet9256@@@",
  database: "notesapp",
});

db.connect((err) => {
  if (err) console.log(err);
  else console.log("DB Connected");
});

module.exports = db;