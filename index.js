const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");

app.use(morgan("combined"));
//route
app.get("/", (req, res) => {
  <h1>Hello World</h1>;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
