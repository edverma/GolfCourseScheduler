const _ = require('underscore');
const db = require('../database/database.js');
const ScheduleRequirementsImproved = require('../database/mongoModels.js').Models.ScheduleRequirementsImproved;
const User = require('../database/mongoModels.js').Models.User;
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
        _.each ( weekRequirements.shifts, (day) => {
            _.each( day, (shift) => {
                const availableEmployees = this.getAvailableEmployees(weekRequirements, shift);
                const employee = this.chooseBestFit(weekRequirements, shift, availableEmployees);

                shift.employee = employee;
            });
        });
        callback( weekRequirements );
    },

    getAvailableEmployees ( weekRequirements, shift ) {
//        availableEmployees = this.getEmployeesWhoAreTrained( shift.type )
        let availableEmployees = this.getEmployeesWhoseTimeMatches( shift.type, shift.start_time, shift.end_time );
//        availableEmployees = removeAlreadyScheduledEmployees( weekRequirements, availableEmployees );
        return availableEmployees;
    },

    //TODO: create field in User model where time is represented as integer. Make instance variables of schedule
    //      start/end hour. Return User documents where $gte schedule start_hour AND $lte schedule end_hour.
    getEmployeesWhoseTimeMatches( shiftType, start_time, end_time ) {
        User.aggregate([
            { $match: { shiftType: shiftType } }
        ]).then( (users) => {
            console.log(users);
            return users;
        });
    },

    chooseBestFit ( availableEmployees ) {
        const bestEmployee = chooseEmployeeWithHighestPreferredToActualShiftRatio( availableEmployees )
        return bestEmployee;
    }

};