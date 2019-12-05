require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.REACT_APP_STRIPE_SK);

const app = express();

app.use(express.json());
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
  console.log(req.body.token);

  try {
    let { status } = await stripe.charges.create({
      amount: req.body.amount,
      currency: "usd",
      description: "A Blurange Pineapple",
      receipt_email: req.body.token.email,
      metadata: { email: req.body.token.email },
      source: req.body.token.id
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
