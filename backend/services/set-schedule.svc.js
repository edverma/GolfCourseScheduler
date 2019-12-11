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
                this.getAvailableEmployees(weekRequirements, shift, availableEmployees => {
                    this.chooseBestFit(weekRequirements, shift, availableEmployees, bestFitEmployee => {
                        shift.employee_id = bestFitEmployee._id;
                    });
                });
            });
        });
        callback( weekRequirements );
    },

    getAvailableEmployees ( weekRequirements, shift, callback ) {
        this.getEmployeesWhoseTimeMatches( shift.type, shift.start_datetime, shift.end_datetime, availableEmployees => {
            this.removeAlreadyScheduledEmployees( weekRequirements, availableEmployees, shift.start_datetime, availableEmployees => {
                callback(availableEmployees);
            });
        });
    },

    getEmployeesWhoseTimeMatches( shiftType, start_datetime, end_datetime, callback ) {
        start_datetime = new Date( start_datetime );
        end_datetime = new Date( end_datetime );
        const matchQuery = {
            "shiftType": shiftType,
            "availability.weekday": start_datetime.getDay()
        };

        User.aggregate([
            { $match: matchQuery },
            { $unwind: "$availability" },
            { $unwind: "$availability.time_ranges" },
            {
                $addFields: {
                    "availability.start_hour": {$toInt: {$substr: [{$arrayElemAt:["$availability.time_ranges",0]}, 0, 2]}},
                    "availability.start_minute": {$toInt: {$substr: [{$arrayElemAt:["$availability.time_ranges",0]}, 3, 2]}},
                    "availability.end_hour": {$toInt: {$substr: [{$arrayElemAt:["$availability.time_ranges",1]}, 0, 2]}},
                    "availability.end_minute": {$toInt: {$substr: [{$arrayElemAt:["$availability.time_ranges",1]}, 3, 2]}}
                }
            },
            {
                $match: {
                    "availability.start_hour": {$lte: start_datetime.getHours()},
                    "availability.start_minute": {$lte: start_datetime.getMinutes()},
                    "availability.end_hour": {$gte: end_datetime.getHours()},
                    "availability.end_minute": {$gte: end_datetime.getMinutes()}
                }
            }
        ],(err, users) => {
            callback(users); //TODO: currently user objects are unwound by availability.
        });
    },

    removeAlreadyScheduledEmployees( weekRequirements, availableEmployees, shiftStartDatetime, callback ) {
        shiftStartDatetime = new Date(shiftStartDatetime);
        weekRequirements.shifts.forEach(shift => {
            let start_datetime = new Date(shift.start_datetime);
            if(start_datetime.getDay() == shiftStartDatetime.getDay()) {
                availableEmployees.forEach((employee, i) => {
                    if(employee._id == shift.employee_id) availableEmployees.splice(i,1);
                });
            }
        });
        callback(availableEmployees);
    },

    chooseBestFit ( weekRequirements, shift, availableEmployees, callback ) {
        console.log(availableEmployees);
        callback(bestFitEmployee);
    }

};