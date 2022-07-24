const express = require("express");
const app = express();
const router = require("../server/routes/api");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
app.use(cors());

app.listen(process.env.PORT || 8000, () =>
  console.log(`App is Up on port ${process.env.PORT}`)
);

module.exports = app;
