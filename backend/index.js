const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const db = require('./database/database.js');
const createDocument = require('./database/createDocument.js').createDocument;
const ScheduleRequirements = require('./database/mongoModels.js').Models.ScheduleRequirements;

const ShiftChooser = require('./ShiftChooser.js').ShiftChooser;

const app = express();
const port = 8080;

app.use( bodyParser.json() );
app.use( cors() );

app.post('/set-schedule', ( req, res ) => {
    createDocument( req.body, () => {
        ScheduleRequirements.find().limit(1).sort({$natural:-1}).exec(
            (err, scheduleRequirements ) => {
                ShiftChooser.chooseAllShifts( scheduleRequirements, () => { } );
                res.send( scheduleRequirements ); //dev line so request doesn't stall
            });
    });
});

app.listen(port, () => console.log(`Golf Course Scheduler Server listening on port ${port}!`));

