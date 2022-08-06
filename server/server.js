const express = require("express");
const cors = require("cors");

const app = express();
const router = require("../server/routes/api");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const PORT = process.env.PORT || "8000";
// const path = require('path');

require("dotenv").config();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(router);
// app.use(express.static(path.resolve(__dirname, "../client/build")));
console.log(__dirname);


app.use("/", api);

app.listen(PORT, () => console.log(`App is Up on port ${PORT}`));
module.exports = app;
