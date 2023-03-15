const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const router = require('./routes.js/routes')
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/", router);

app.use(bodyParser.urlencoded({ extended: false }));

const port = 5000;

app.listen(port, () => console.log(`SERVER ON: ${port}`));