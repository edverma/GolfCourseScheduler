const _ = require('underscore');
const db = require('../database/database.js');
const ScheduleShift = require('../database/mongoModels.js').Models.ScheduleShift;
const ScheduleRequirementsImproved = require('../database/mongoModels.js').Models.ScheduleRequirementsImproved;
const User = require('../database/mongoModels.js').Models.User;
const svc = require('../services/set-schedule.svc');

module.exports = {
    getRequirements: function(app) {
        app.get('/set-schedule/schedule-shift', ( req, res ) => {
            ScheduleShift.find({}, null, { sort: 'shift.order' }, (err, docs) => {
                if (err != null) {
                    console.error(err);
                    return;
                }
                res.send(docs);
            });
        });
    },

    //TODO: choose schedule!
    postRequirements: function(app) {
        app.post('/set-schedule/days', ( req, res ) => {
            svc.chooseSchedule( req.body, ( schedule ) => {
                svc.saveSchedule( schedule, (savedSchedule) => {
                    res.send(savedSchedule);
                });
            });
        });
    }
};