const Tenant = require('../../../enums.js').Tenant;
const ShiftType = require('../../../enums.js').ShiftType;
const ShiftTime = require('../../../enums.js').ShiftTime;

module.exports = function (){
    const initialTenantShifts = require('./initialTenantShifts');
    let initialScheduleShifts = [];
    for (let i=0; i<initialTenantShifts.length; i++){
        let start_time; let end_time;
        if ( initialTenantShifts[i].time == ShiftTime.AM ) {
            start_time = "07:00";
            end_time = "13:00"
        } else {
            start_time = "13:00";
            end_time = "21:00";
        }

        initialScheduleShifts.push(
            {
                shift: initialTenantShifts[i],
                start_time: start_time,
                end_time: end_time,
                amount: 0,
                needed: true
            }
        );
    }
    return initialScheduleShifts;
};