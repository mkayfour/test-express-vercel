const express = require("express");

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.json({ message: "Health check ok!" });
});

app.use(express.json());

app.listen(port, () =>
  console.log(`Hello world app listening on port ${port}!`)
);
