import * as _ from 'underscore';
const db = require('../database/database.js');
const ScheduleShift = require('../database/mongoModels.js').Models.ScheduleShift;
const ScheduleRequirementsImproved = require('../database/mongoModels.js').Models.ScheduleRequirementsImproved;
const User = require('../database/mongoModels.js').Models.User;

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
            this.chooseSchedule( req.body, ( schedule ) => {

                db.createDocument( schedule, ScheduleRequirementsImproved, () => {
                    ScheduleRequirementsImproved.find().limit(1).sort({$natural:-1}).exec(
                        (err, docs ) => {
                            res.send(docs);
                        });
                });

            });
        });
    },

    chooseSchedule ( weekRequirements, callback ) {
        let i = -1;
        _.each ( weekRequirements.shifts, (shift, i, shifts) => {
            i = weekRequirements.shifts.indexOf(shift);

            const availableEmployees = this.getAvailableEmployees( weekRequirements, shift );
            const employee = this.chooseBestFit( weekRequirements, shift, availableEmployees );

            shift.employee = employee;
        });
        callback( weekRequirements );
    },

    getAvailableEmployees ( weekRequirements, shift ) {
        let availableEmployees = getEmployeesWhoseTimeMatches( shift );
        availableEmployees = removeAlreadyScheduledEmployees( weekRequirements, availableEmployees );
        return availableEmployees;
    },

    chooseBestFit ( availableEmployees ) {
        const bestEmployee = chooseEmployeeWithHighestPreferredToActualShiftRatio( availableEmployees )
        return bestEmployee;
    }
};