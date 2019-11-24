const express = require("express");
const bodyParser = require("body-parser");
const knex = require("./database/knex");

require("dotenv").config();

const PORT = 8080;

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.status(200).json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
