const _ = require('underscore');
const db = require('../database/database.js');
const ScheduleRequirementsImproved = require('../database/mongoModels.js').Models.ScheduleRequirementsImproved;
const User = require('../database/mongoModels.js').Models.User;

module.exports = {
    saveSchedule: function( schedule, callback ) {
        db.createDocument( schedule, ScheduleRequirementsImproved, () => {
            ScheduleRequirementsImproved.find().limit(1).sort({$natural:-1}).exec(
                (err, savedSchedule) => {
                    if (err) {
                        console.error(err);
                        return;
                    }
                    callback(savedSchedule);
                });
        });
    },

    chooseSchedule: function ( weekRequirements, callback ) {
        let test;
        _.each(weekRequirements.shifts, (day, i) => {
            test = false;
            _.each(day, (shift, j) => {
                this.getAvailableEmployees(weekRequirements, shift, availableEmployees => {
                    this.chooseBestFit(weekRequirements, shift, availableEmployees, bestFitEmployee => {
                        if( bestFitEmployee != undefined ) {
                            weekRequirements.shifts[i][j].employee_id = bestFitEmployee._id;
                        } else{
                            shift.employee_id = null;
                        }
                    });
                });
                if( i === weekRequirements.shifts.length-1 && j === weekRequirements.shifts[i].length-1) {
                    weekRequirements.shifts.forEach(day => {
                        day.forEach(shift => {
                            setTimeout( () => {
                                callback( weekRequirements );
                            },1000); //TODO: need to fix this so it does not only work with timeout
                        });
                    });
                }
            });


        });
    },

    getAvailableEmployees ( weekRequirements, shift, callback ) {
        this.getEmployeesWhoseTimeMatches( shift.shift.type, shift.start_datetime, shift.end_datetime, availableEmployees => {
            this.removeAlreadyScheduledEmployees( weekRequirements, availableEmployees, shift.start_datetime, availableEmployees => {
                callback(availableEmployees);
            });
        });
    },

    getEmployeesWhoseTimeMatches( shiftType, start_datetime, end_datetime, callback ) {
        start_datetime = new Date( start_datetime );
        end_datetime = new Date( end_datetime );

        User.aggregate([
            { $match: {
                $and: [
                    {"shift_types": shiftType},
                    {"availability.weekday": start_datetime.getDay()}
                ]
            }},
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
                    "availability.end_minute": {$gte: end_datetime.getMinutes()},
                    "availability.weekday": start_datetime.getDay()
                }
            }
        ],(err, users) => {
            if (err != null) { console.error(err); return;}
            let woundUsers = [];
            for ( let i = 0; i < users.length; i++ ){
                if ( users[i+1] === undefined || users[i]._id.toString().localeCompare(users[i+1]._id.toString()) != 0 ) {
                    users[i].availability = [users[i].availability];
                    woundUsers.push(users[i]);
                } else {
                    let count = 0;
                    users[i].availability = [users[i].availability];
                    for ( let j = i+1; j < users.length; j++ ) {
                        if(users[j]._id === users[i]._id)
                        users[i].availability.push( users[j].availability[0] );
                        count++;
                    }
                    woundUsers.push( users[i] );
                    i += count;
                }
            } // this is not correct
            /*
            console.log("wound users: ", woundUsers);
            woundUsers.forEach(user => {
                console.log('availability: ', user.availability);
            });
             */
            callback(users);
        });
    },

    removeAlreadyScheduledEmployees( weekRequirements, availableEmployees, shiftStartDatetime, callback ) {
        shiftStartDatetime = new Date(shiftStartDatetime);
        weekRequirements.shifts.forEach(day => {
            day.forEach(shift => {
                let start_datetime = new Date(shift.start_datetime);
                if (start_datetime.getDay() === shiftStartDatetime.getDay()) {
                    if(shift.employee_id != null) {
                        availableEmployees.forEach((employee, i) => {
                            if (employee._id.toString().localeCompare(shift.employee_id) === 0) {
                                availableEmployees.splice(i, 1);
                            }
                        });
                    }
                }
            });
        });
        callback(availableEmployees);
    },

    chooseBestFit ( weekRequirements, shift, availableEmployees, callback ) {
        let bestFitEmployee = availableEmployees[Math.floor(Math.random() * Math.floor(availableEmployees.length))];
        callback(bestFitEmployee);
    }

};