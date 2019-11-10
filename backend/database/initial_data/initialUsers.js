const UserRole = require('../../../enums.js').UserRole;
const UserType = require('../../../enums.js').UserType;

module.exports = [
    {
        role: UserRole.BASIC,
        type: UserType.EMPLOYEE,
        preferredShifts: 4,
        availability: [
            {
                day: 'Monday',
                timeRanges: ['00:00', '23:59']
            }
        ]
    }

];