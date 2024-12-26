const express = require("express");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ msg: "It's working" });
});
app.get("/home", (req, res) => {
  res.status(200).send({ msg: "you are in home page now" });
});
app.get("/about", (req, res) => {
  res.status(200).send({ msg: "you are now in about page" });
});

const port = process.env.PORT || 4002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
