const Tenant = require('../../../enums.js').Tenant;
const ShiftType = require('../../../enums.js').ShiftType;
const ShiftTime = require('../../../enums.js').ShiftTime;

module.exports = function (){
    const initialTenantShifts = require('./initialTenantShifts');
    let initialScheduleShifts = [];
    for (let i=0; i<initialTenantShifts.length; i++){
        let time;
        if ( initialTenantShifts[i].time == ShiftTime.AM ) {
            time = "07:00"
        } else {
            time = "13:00"
        }

        initialScheduleShifts.push(
            {
                shift: initialTenantShifts[i],
                time: time,
                amount: 0,
                needed: true
            }
        );
    }
    return initialScheduleShifts;
};