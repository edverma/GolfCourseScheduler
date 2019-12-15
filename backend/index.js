const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');

const setScheduleAPI = require('./apis/set-schedule.api');
const scheduleAPI = require('./apis/schedule.api');
const userListAPI = require('./apis/user-list.api');
const userEditAPI = require('./apis/user-edit.api');
const sessionAPI = require('./apis/session.api')

const app = express();
const port = 8080;

app.use( bodyParser.json() );
app.use( cors() );

setScheduleAPI.getRequirements(app);
setScheduleAPI.postRequirements(app);
scheduleAPI.getSchedule(app);
scheduleAPI.getEmployees(app);
userListAPI.getUsers(app);
userEditAPI.getUserById(app);
userEditAPI.saveUser(app);
sessionAPI.login(app);
sessionAPI.status(app);
sessionAPI.user(app);

app.listen(port, () => console.log(`Golf Course Scheduler Server listening on port ${port}!`));
