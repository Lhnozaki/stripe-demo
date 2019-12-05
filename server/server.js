require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SK);

const app = express();

app.use(bodyParser.text());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: false }));

//// GET

app.get("/", (req, res) => {
  console.log(require("dotenv").config());
  res.send("hello world");
});

//// POST

app.post("/api/charge", async (req, res) => {
  try {
    let { status } = await stripe.charges.create({
      amount: 10000,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

//// PORT

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
