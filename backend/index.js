const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const setScheduleAPI = require('./apis/set-schedule.api');

const app = express();
const port = 8080;

app.use( bodyParser.json() );
app.use( cors() );

setScheduleAPI.getRequirements(app);
setScheduleAPI.postRequirements(app);

app.listen(port, () => console.log(`Golf Course Scheduler Server listening on port ${port}!`));
