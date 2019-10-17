const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
        this.ScheduleRequirements = mongoose.model('schedule-requirements', scheduleRequirementsSchema);
    }
}

exports.Models = new MongoModels;