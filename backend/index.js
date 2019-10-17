const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const db = require('./database/database.js');
const createDocuments = require('./database/createDocument.js').createDocuments;

const app = express();
const port = 8080;

app.use( bodyParser.json() );
app.use( cors() );

app.post('/set-schedule', ( req, res ) => {
    createDocuments( req.body, () => {
        res.json(req.body);
    });
});

app.listen(port, () => console.log(`Golf Course Scheduler Server listening on port ${port}!`));

