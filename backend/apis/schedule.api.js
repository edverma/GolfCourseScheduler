const ScheduleRequirementsImproved = require('../database/mongoModels.js').Models.ScheduleRequirementsImproved;
const User = require('../database/mongoModels.js').Models.User;
const Tenant = require('../../enums.js').Tenant;

module.exports = {
    getSchedule: function(app) {
        app.get('/schedule', ( req, res ) => {
            ScheduleRequirementsImproved.find().limit(1).sort({$natural:-1}).exec(
                (err, schedule) => {
                    if (err) { console.error(err); return; }
                    schedule = JSON.stringify(schedule);
                    res.end(schedule);
                }
            )
        });
    },

    getEmployees: function(app){
        app.get('/schedule/employees', ( req, res ) => {
            User.find({tenant: Tenant.UGA}).exec(
                (err, employees) => {
                    if (err) { console.error(err); return; }
                    employees = JSON.stringify(employees);
                    res.end(employees);
                }
            )
        });
    }
}
;