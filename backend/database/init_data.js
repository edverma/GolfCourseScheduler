const ScheduleShift = require('./mongoModels').Models.ScheduleShift;
const initializeScheduleShifts = require('./initial_data/initialScheduleShifts.js');

//check for if a certain collection exists or has data, if not add initial data
module.exports = function initData(db, callback) {
    initializeScheduleShiftData(db);

    callback();
};

function initializeScheduleShiftData(db) {
    scheduleShiftsInitialized( (count) => {
        if (count == 0) {
            let initialScheduleShifts = initializeScheduleShifts();
            for (let i = 0; i < initialScheduleShifts.length; i++) {
                db.createDocument(initialScheduleShifts[i], ScheduleShift, (err) => {
                    if (err != null) {
                        console.log(err);
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
