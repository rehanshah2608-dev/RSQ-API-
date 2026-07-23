
const express = require("express");

const app = express();

const apiRoutes = require("./routes/api");
const logger = require("./middleware/logger");

app.use(express.json());
app.use(logger);

app.use("/", apiRoutes);

module.exports = app;
