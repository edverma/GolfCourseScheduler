const ScheduleShift = require('./mongoModels').Models.ScheduleShift;
const User = require('./mongoModels').Models.User;
const getInitialScheduleShifts = require('./initial_data/initialScheduleShifts.js');
const getInitialUsers = require('./initial_data/initialUsers.js');

//check for if a certain collection exists or has data, if not add initial data
module.exports = function initData(db, callback) {
    initializeUserData(db);
    initializeScheduleShiftData(db);

    callback();
};

function initializeUserData(db) {
    usersInitialized( (count) => {
        if ( count == 0 ) {
            let initialUsers = getInitialUsers;
            for (let i = 0; i < initialUsers.length; i++) {
                db.createDocument(initialUsers[i], User, (err) => {
                    if (err != null) { console.error(err); }
                });
            }
        }
    });
}

function usersInitialized(callback) {
    User.countDocuments( {}, (err, count) => {
        if ( count == 0 ) {
            callback(count)
        }
    });
}

function initializeScheduleShiftData(db) {
    scheduleShiftsInitialized( (count) => {
        if (count == 0) {
            let initialScheduleShifts = getInitialScheduleShifts();
            for (let i = 0; i < initialScheduleShifts.length; i++) {
                db.createDocument(initialScheduleShifts[i], ScheduleShift, (err) => {
                    if (err != null) {
                        console.error(err);
                    }
                });
            }
        }
    });
}

function scheduleShiftsInitialized(callback) {
    ScheduleShift.countDocuments( {}, (err, count) => {
        if ( count == 0 ) {
            callback(count)
        }
    });
}
