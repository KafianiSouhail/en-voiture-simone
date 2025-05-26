const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use(cors());

let items = [
  {
    firstname: "alice",
    lastname: "jhon",
    meeting_point: null,
    date: null,
    status: "A organiser",
  },
  {
    firstname: "federeko",
    lastname: "valverdy",
    meeting_point: "paris",
    date: new Date(),
    status: "Confirmé",
  },
  {
    firstname: "luis",
    lastname: "khosess",
    meeting_point: "rabat",
    date: new Date(),
    status: "Recherche de place",
  },
  {
    firstname: "Markos",
    lastname: "jhon",
    meeting_point: "marseille",
    date: new Date(),
    status: "Annulé",
  },
  {
    firstname: "Khesos",
    lastname: "Navas",
    meeting_point: null,
    date: null,
    status: "Confirmé",
  },
  {
    firstname: "Raphael",
    lastname: "B",
    meeting_point: null,
    date: null,
    status: "Recherche de place",
  },
  {
    firstname: "Markos",
    lastname: "jhon",
    meeting_point: null,
    date: null,
    status: "Annulé",
  },
];

app.get("/api/exams", (req, res) => {
  res.json(items);
});

app.post("/api/exams", (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
