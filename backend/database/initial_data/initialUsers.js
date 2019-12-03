const UserRole = require('../../../enums.js').UserRole;
const ShiftType = require('../../../enums.js').ShiftType;

module.exports = [
    {
        fname: "test",
        lname: "tester",
        role: UserRole.BASIC,
        shiftTypes: [
            ShiftType.CARTS,
            ShiftType.RANGE,
            ShiftType.RANGE_REGISTER,
            ShiftType.SHOP
        ],
        preferredShifts: 4,
        availability: [
            {
                weekday: 'Monday',
                timeRanges: [
                    ['00:00', '23:59']
                    ]
            }
        ]
    },
    {
        fname: "Griffin",
        lname: "Rousseau",
        role: UserRole.BASIC,
        shiftTypes: [
            ShiftType.CARTS,
            ShiftType.RANGE,
            ShiftType.RANGE_REGISTER,
            ShiftType.SHOP
        ],
        preferredShifts: 4,
        availability: [
            {
                weekday: 'Sunday',
                timeRanges: [
                    ['00:00', '23:59']
                ]
            },
            {
                weekday: 'Monday',
                timeRanges: [
                    ['07:00', '10:30'],
                    ['13:00', "23:59"],
                ]
            },
            {
                weekday: 'Tuesday',
                timeRanges: [
                    ['16:00', "23:59"],
                ]
            },
            {
                weekday: 'Wednesday',
                timeRanges: [
                    ['07:00', '10:30'],
                    ['13:00', "23:59"],
                ]
            },
            {
                weekday: 'Thursday',
                timeRanges: [
                    ['16:00', "23:59"],
                ]
            },
            {
                weekday: 'Friday',
                timeRanges: [
                    ['07:00', '10:30'],
                    ['13:00', "23:59"],
                ]
            },
            {
                weekday: 'Saturday',
                timeRanges: [
                    ['00:00', '23:59']
                ]
            }
        ]
    }
];