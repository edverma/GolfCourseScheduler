const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tenantShiftSchema = new Schema ({
    tenant: Number,
    type: Number,
    time: Number
});

let scheduleShiftSchema = new Schema ({
    shift: tenantShiftSchema,
    date: Date,
    time: String,
    amount: Number,
    needed: Boolean,
});

let scheduleRequirementsImprovedSchema = new Schema({
    dateStrings: [String],
    dateDates: [Date],
    shifts: [scheduleShiftSchema],
    eventNames: [String]
});

let scheduleRequirementsSchema = new Schema({
    dateStrings: [String],
    dateDates: [Date],

    needShopAM: [Boolean],
    needShopPM: [Boolean],
    needCartsAM: [Boolean],
    needCartsPM: [Boolean],
    needRangeAM: [Boolean],
    needRangePM: [Boolean],
    needRangeRegisterAM: [Boolean],
    needRangeRegisterPM: [Boolean],
    needStarterAM: [Boolean],
    needStarterPM: [Boolean],
    needTournamentCartsAM: [Boolean],
    needTournamentCartsPM: [Boolean],

    timesShopAM: [String],
    timesShopPM: [String],
    timesCartsAM: [String],
    timesCartsPM: [String],
    timesRangeAM: [String],
    timesRangePM: [String],
    timesRangeRegisterAM: [String],
    timesRangeRegisterPM: [String],
    timesStarterAM: [String],
    timesStarterPM: [String],
    timesTournamentCartsAM: [String],
    timesTournamentCartsPM: [String],

    amountsTournamentCartsAM: [Number],
    amountsTournamentCartsPM: [Number],

    eventNames: [String]
});

class MongoModels {
    constructor() {
        this.TenantShift = mongoose.model('tenant-shift', tenantShiftSchema);
        this.ScheduleRequirements = mongoose.model('schedule-requirements', scheduleRequirementsSchema);
    }
}

exports.Models = new MongoModels;