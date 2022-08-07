const express = require("express");
const cors = require("cors");
const compression = require("compression");
const logger = require("./middleware/logger");
const bodyParser = require("body-parser");
const api = require("./routes/api");
const errorHandler = require("./middleware/error_handler");
const path = require("path");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || "8000";

app.use([logger, compression()]);
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "..", "/client/build/")));

app.use("/", api);
app.use(errorHandler);

app.listen(PORT, () => console.log(`App is Up on port ${PORT}`));
module.exports = app;
