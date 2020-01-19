const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const app = express();
const result = require('dotenv').config();

//console.log(process.env.DB_HOST);
// if (result.error) {
//     throw result.error
// }

// console.log(result.parsed);

mongoose.connect(process.env.DB_CONN, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());//{ origin: 'http://localhost:3000' }
app.use(express.json());
app.use(routes);
app.listen(3333);