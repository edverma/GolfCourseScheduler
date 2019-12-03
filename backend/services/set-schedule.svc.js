const _ = require('underscore');
const db = require('../database/database.js');
const ScheduleRequirementsImproved = require('../database/mongoModels.js').Models.ScheduleRequirementsImproved;
const userSvc = require('./user.svc');

module.exports = {
    saveSchedule: function( schedule, callback ) {
        db.createDocument( schedule, ScheduleRequirementsImproved, () => {
            ScheduleRequirementsImproved.find().limit(1).sort({$natural:-1}).exec(
                (err, docs ) => {
                    callback(docs);
                });
        });
    },

    chooseSchedule: function ( weekRequirements, callback ) {
        _.each ( weekRequirements.shifts, (day, i, week) => {
            _.each( day, (shift, j, shifts ) => {
                const availableEmployees = this.getAvailableEmployees(weekRequirements, shift);
                const employee = this.chooseBestFit(weekRequirements, shift, availableEmployees);

                shift.employee = employee;
            });
        });
        callback( weekRequirements );
    },

    getAvailableEmployees ( weekRequirements, shift ) {
        let availableEmployees = getEmployeesWhoseTimeMatches( shift.start_time, shift.end_time );
        availableEmployees = removeAlreadyScheduledEmployees( weekRequirements, availableEmployees );
        return availableEmployees;
    },

    chooseBestFit ( availableEmployees ) {
        const bestEmployee = chooseEmployeeWithHighestPreferredToActualShiftRatio( availableEmployees )
        return bestEmployee;
    }

};