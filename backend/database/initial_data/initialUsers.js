const UserRole = require('../../../enums.js').UserRole;
const ShiftType = require('../../../enums.js').ShiftType;

module.exports = [
    {
        fname: "test",
        lname: "tester",
        role: UserRole.BASIC,
        shift_types: [
            ShiftType.CARTS,
            ShiftType.RANGE,
            ShiftType.RANGE_REGISTER,
            ShiftType.SHOP
        ],
        preferred_shifts: 4,
        availability: [
            {
                weekday: 1,
                time_ranges: [
                    ['00:00', '23:59'],
                    ['10:00', '13:00']
                    ]
            }
        ]
    },
    {
        fname: "Griffin",
        lname: "Rousseau",
        role: UserRole.BASIC,
        shift_types: [
            ShiftType.CARTS,
            ShiftType.RANGE,
            ShiftType.RANGE_REGISTER,
            ShiftType.SHOP
        ],
        preferred_shifts: 4,
        availability: [
            {
                weekday: 0,
                time_ranges: [
                    ['00:00', '23:59']
                ]
            },
            {
                weekday: 1,
                time_ranges: [
                    ['07:00', '10:30'],
                    ['13:00', "23:59"],
                ]
            },
            {
                weekday: 2,
                time_ranges: [
                    ['16:00', "23:59"],
                ]
            },
            {
                weekday: 3,
                time_ranges: [
                    ['07:00', '10:30'],
                    ['13:00', "23:59"],
                ]
            },
            {
                weekday: 4,
                time_ranges: [
                    ['16:00', "23:59"],
                ]
            },
            {
                weekday: 5,
                time_ranges: [
                    ['07:00', '10:30'],
                    ['13:00', "23:59"],
                ]
            },
            {
                weekday: 6,
                time_ranges: [
                    ['00:00', '23:59']
                ]
            }
        ]
    }
];