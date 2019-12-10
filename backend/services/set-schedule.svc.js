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
                // const employee = this.chooseBestFit(weekRequirements, shift, availableEmployees);
                shift.employee = availableEmployees[0];
            });
        });
        callback( weekRequirements );
    },

    getAvailableEmployees ( weekRequirements, shift ) {
//        availableEmployees = this.getEmployeesWhoAreTrained( shift.type )
        let availableEmployees = this.getEmployeesWhoseTimeMatches( shift.type, shift.start_datetime, shift.end_datetime );
//        availableEmployees = removeAlreadyScheduledEmployees( weekRequirements, availableEmployees );
        return availableEmployees;
    },

    //TODO: do aggregation query to go inside of 2D array of timeRanges and match.
    getEmployeesWhoseTimeMatches( shiftType, start_datetime, end_datetime ) {
        start_datetime = new Date(start_datetime);
        end_datetime = new Date(end_datetime);
        const matchQuery = {
            "shiftType": shiftType,
            "availability.weekday": start_datetime.getDay()
        };

        User.aggregate([
            { $match: matchQuery }
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