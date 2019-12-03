const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let tenantShiftSchema = new Schema ({
    tenant: Number,
    type: String,
    time: String,
    order: Number
});

let scheduleShiftSchema = new Schema ({
    shift: tenantShiftSchema,
    start_time: String,
    end_time: String,
    start_datetime: Date,
    end_datetime: Date,
    amount: Number,
    needed: Boolean,
    employee: { type: Schema.ObjectId, default: null }
});

let scheduleRequirementsImprovedSchema = new Schema({
    dateStrings: [String],
    dateDates: [Date],
    shifts: [Schema.Types.Mixed],
    eventNames: [String]
});

let availabilitySchema = new Schema({
    weekday: String,
    timeRanges: [Schema.Types.Mixed]
});

let userSchema = new Schema({
    role: String,
    type: String,
    preferredShifts: Number,
    availability: [availabilitySchema]
});

class MongoModels {
    constructor() {
        this.ScheduleShift = mongoose.model('schedule__shift', scheduleShiftSchema);
        this.ScheduleRequirementsImproved = mongoose.model('schedule_requirements_improved', scheduleRequirementsImprovedSchema);
        this.User = mongoose.model('user', userSchema);
    }
}

exports.Models = new MongoModels;