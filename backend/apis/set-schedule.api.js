const ScheduleShift = require('../database/mongoModels.js').Models.ScheduleShift;
const svc = require('../services/set-schedule.svc');

module.exports = {
    getRequirements: function(app) {
        app.get('/api/set-schedule/schedule-shift', ( req, res ) => {
            ScheduleShift.find({}, null, { sort: 'shift.order' }, (err, docs) => {
                if (err != null) { console.error(err); return; }
                res.send(docs);
            });
        });
    },

    //TODO: choose schedule!
    postRequirements: function(app) {
        app.post('/api/set-schedule/days', ( req, res ) => {
            svc.chooseSchedule( req.body, schedule => {
                svc.saveSchedule( schedule, savedSchedule => {
                    savedSchedule = JSON.stringify(savedSchedule);
                    res.end(savedSchedule);
                });
            });
        });
    }
};