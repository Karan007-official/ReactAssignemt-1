const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// GET
app.get("/notes", (req, res) => {
  db.query("SELECT * FROM notes", (err, result) => {
    if (err) return res.send(err);
    res.json(result);
  });
});

// POST
app.post("/notes", (req, res) => {
  const { title, description } = req.body;

  db.query(
    "INSERT INTO notes (title, description) VALUES (?, ?)",
    [title, description],
    (err) => {
      if (err) return res.send(err);
      res.send("Added");
    }
  );
});

// DELETE
app.delete("/notes/:id", (req, res) => {
  db.query(
    "DELETE FROM notes WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) return res.send(err);
      res.send("Deleted");
    }
  );
});

// UPDATE
app.put("/notes/:id", (req, res) => {
  const { title, description } = req.body;

  db.query(
    "UPDATE notes SET title=?, description=? WHERE id=?",
    [title, description, req.params.id],
    (err) => {
      if (err) return res.send(err);
      res.send("Updated");
    }
  );
});

app.listen(3000, () => console.log("Server Running"));