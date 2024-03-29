const express = require('express');
const dotenv = require('dotenv');

//Load env variables
dotenv.config({path: './config/config.env'});

const app = express();
const PORT = process.env.PORT || 7000;

app.listen(PORT, () => console.log(`application listening to port ${PORT} in ${process.env.NODE_ENV} environment`));