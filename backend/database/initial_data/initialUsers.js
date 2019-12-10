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
                weekday: 1,
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
                weekday: 0,
                timeRanges: [
                    ['00:00', '23:59']
                ]
            },
            {
                weekday: 1,
                timeRanges: [
                    ['07:00', '10:30'],
                    ['13:00', "23:59"],
                ]
            },
            {
                weekday: 2,
                timeRanges: [
                    ['16:00', "23:59"],
                ]
            },
            {
                weekday: 3,
                timeRanges: [
                    ['07:00', '10:30'],
                    ['13:00', "23:59"],
                ]
            },
            {
                weekday: 4,
                timeRanges: [
                    ['16:00', "23:59"],
                ]
            },
            {
                weekday: 5,
                timeRanges: [
                    ['07:00', '10:30'],
                    ['13:00', "23:59"],
                ]
            },
            {
                weekday: 6,
                timeRanges: [
                    ['00:00', '23:59']
                ]
            }
        ]
    }
];