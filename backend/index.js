const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const db = require('./database/database.js');
const ScheduleRequirements = require('./database/mongoModels.js').Models.ScheduleRequirements;
const ScheduleShift = require('./database/mongoModels.js').Models.ScheduleShift;

const ShiftChooser = require('./ShiftChooser.js').ShiftChooser;

const app = express();
const port = 8080;

app.use( bodyParser.json() );
app.use( cors() );

app.post('/set-schedule', ( req, res ) => {
    db.createDocument( req.body, ScheduleRequirements, () => {
        ScheduleRequirements.find().limit(1).sort({$natural:-1}).exec(
            (err, scheduleRequirements ) => {
                ShiftChooser.chooseAllShifts( scheduleRequirements, () => { } );
                res.send( scheduleRequirements ); //dev line so request doesn't stall
            });
    });
});

app.get('/set-schedule/schedule-shift', ( req, res ) => {
   ScheduleShift.find({}, null, { sort: 'shift.order' }, (err, docs) => {
       if (err != null) {
           console.error(err);
           return;
       }
       res.send(docs);
   });
});

app.listen(port, () => console.log(`Golf Course Scheduler Server listening on port ${port}!`));
