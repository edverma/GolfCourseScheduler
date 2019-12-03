const db = require('../database/database.js');
const User = require('../database/mongoModels.js').Models.User;

module.exports = {
    getEmployeesWhoseTimeMatches: function ( start_time, end_time ) {
        let employees = [];
        return employees;
    }
};