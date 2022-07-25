const express = require("express")
const app = express()
const router = require("../server/routes/api")
const bodyParser = require("body-parser")
const cors = require("cors")
const api = require("./routes/api")

require("dotenv").config()

app.use(cors({ origin: "http://localhost:3000" }))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(router)

app.use("/", api)

const PORT = process.env.PORT || "8000"

app.listen(PORT, () => console.log(`App is Up on port ${PORT}`))
module.exports = app
