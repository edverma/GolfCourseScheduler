const db = require('../database/database.js');
const ScheduleShift = require('../database/mongoModels.js').Models.ScheduleShift;
const ScheduleRequirementsImproved = require('../database/mongoModels.js').Models.ScheduleRequirementsImproved;

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

    postRequirements: function(app) {
        app.post('/set-schedule/days', ( req, res ) => {
            db.createDocument( req.body, ScheduleRequirementsImproved, () => {
                ScheduleRequirementsImproved.find().limit(1).sort({$natural:-1}).exec(
                    (err, docs ) => {
                        //ShiftChooser.chooseAllShifts( scheduleRequirements, () => { } );
                        //res.send( scheduleRequirements ); //dev line so request doesn't stall
                        res.send(docs);
                    });
            });
        });
    }
};