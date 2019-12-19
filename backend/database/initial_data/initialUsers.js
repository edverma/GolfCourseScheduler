const UserRole = require('../../../enums.js').UserRole;
const ShiftType = require('../../../enums.js').ShiftType;
const Tenant = require('../../../enums.js').Tenant;
const Gender = require('../../../enums.js').Gender;

module.exports = [
    {
        tenant: Tenant.UGA,
        fname: "test",
        lname: "tester",
        role: UserRole.BASIC,
        email: 'edverma+tester@gmail.com',
        password: 'password',
        gender: Gender.NONBINARY,
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
                    ['00:00', '23:59'],
                ]
            },
            {
                weekday: 1,
                time_ranges: [
                    ['00:00', '23:59'],
                ]
            },
            {
                weekday: 2,
                time_ranges: [
                    ['00:00', '23:59'],
                ]
            },
            {
                weekday: 3,
                time_ranges: [
                    ['00:00', '23:59'],
                ]
            },
            {
                weekday: 4,
                time_ranges: [
                    ['00:00', '23:59'],
                ]
            },
            {
                weekday: 5,
                time_ranges: [
                    ['00:00', '23:59'],
                ]
            },
            {
                weekday: 6,
                time_ranges: [
                    ['00:00', '23:59'],
                ]
            }
        ]
    },
    {
        tenant: Tenant.UGA,
        fname: "Griffin",
        lname: "Rousseau",
        role: UserRole.BASIC,
        gender: Gender.MALE,
        shift_types: [
            ShiftType.CARTS,
            ShiftType.RANGE,
            ShiftType.RANGE_REGISTER,
            ShiftType.SHOP
        ],
        preferred_shifts: 4,
        email: 'edverma+griffin@gmail.com',
        password: 'password',
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
    },
{tenant: 'Tenant.UGA', fname: 'matt', lname: 'peterson', gender: Gender.MALE, role: UserRole.MANAGER, email: 'Matt@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: 'Tenant.UGA', fname: 'john', lname: 'crumbley', gender: Gender.MALE, role: UserRole.MANAGER, email: 'John@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: 'Tenant.UGA', fname: 'nathan', lname: 'toburen', gender: Gender.MALE, role: UserRole.ADMIN, email: 'Nathan@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: 'Tenant.UGA', fname: 'jackson', lname: 'jones', gender: Gender.MALE, role: UserRole.MANAGER, email: 'Jackson@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: 'Tenant.UGA', fname: 'griffin', lname: 'rousseau', gender: Gender.MALE, role: UserRole.BASIC, email: 'Griffin@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 1, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 3, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 5, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'evan', lname: 'verma', gender: Gender.MALE, role: UserRole.ADMIN, email: 'evanVerma@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '09:30:00']}, {weekday: 1, time_ranges: ['17:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 2, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '09:30:00']}, {weekday: 3, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 4, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '09:30:00']}, {weekday: 5, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.SHOP, ShiftType.RANGE, ShiftType.RANGE_REGISTER, ShiftType.CARTS]},
{tenant: 'Tenant.UGA', fname: 'parker', lname: 'brooks', gender: Gender.MALE, role: UserRole.BASIC, email: 'Parker@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '14:30:00']}, {weekday: 2, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '14:30:00']}, {weekday: 4, time_ranges: ['00:00:00', '14:30:00']}, {weekday: 5, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'robby', lname: 'wells', gender: Gender.MALE, role: UserRole.BASIC, email: 'Robby@gmail.com', preferred_shifts: 2, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 2, time_ranges: ['14:30:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 4, time_ranges: ['14:30:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'zach', lname: 'bibbs', gender: Gender.MALE, role: UserRole.BASIC, email: 'Zach@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'brooke', lname: 'unknown', gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Brooke@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'carly', lname: 'anderson', gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Carly@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '13:00:00']}, {weekday: 2, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 3, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '13:00:00']}, {weekday: 4, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '11:30:00']}, {weekday: 5, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'don', lname: 'niepoth', gender: Gender.MALE, role: UserRole.BASIC, email: 'Don@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.STARTER]},
{tenant: 'Tenant.UGA', fname: 'jeff', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Jeff@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.STARTER]},
{tenant: 'Tenant.UGA', fname: 'jack', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Jack@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.STARTER]},
{tenant: 'Tenant.UGA', fname: 'ron', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Ron@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.STARTER]},
{tenant: 'Tenant.UGA', fname: 'mike', lname: 'c', gender: Gender.MALE, role: UserRole.BASIC, email: 'MikeC@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.STARTER]},
{tenant: 'Tenant.UGA', fname: 'ernest', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Ernest@gmail.com', preferred_shifts: 2, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.STARTER]},
{tenant: 'Tenant.UGA', fname: 'steve', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Steve@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.STARTER]},
{tenant: 'Tenant.UGA', fname: 'clint', lname: 'udell', gender: Gender.MALE, role: UserRole.MANAGER, email: 'Clint@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: 'Tenant.UGA', fname: 'mike', lname: 'lockwood', gender: Gender.MALE, role: UserRole.BASIC, email: 'MikeL@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '11:30:00']}, {weekday: 2, time_ranges: ['00:00:00', '11:45:00']}, {weekday: 2, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '11:30:00']}, {weekday: 3, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '11:45:00']}, {weekday: 4, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'patrick', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Patrick@gmail.com', preferred_shifts: 2, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'Nathan', lname: 'a', gender: Gender.MALE, role: UserRole.BASIC, email: 'NathanA@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'jake', lname: 'lee', gender: Gender.MALE, role: UserRole.BASIC, email: 'JakeL@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 1, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 3, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 5, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'ethan', lname: 'finney', gender: Gender.MALE, role: UserRole.BASIC, email: 'Ethan@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 1, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 3, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'avery', lname: 'unknown', gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Avery@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:['00:00:00', '24:00:00']}, {weekday:1, time_ranges:['00:00:00', '24:00:00']}, {weekday:2, time_ranges:['00:00:00', '24:00:00']}, {weekday:3, time_ranges:['00:00:00', '24:00:00']}, {weekday:4, time_ranges:['00:00:00', '24:00:00']}, {weekday:5, time_ranges:['00:00:00', '24:00:00']}, {weekday:6, time_ranges:['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'alex', lname: 'weltz', gender: Gender.MALE, role: UserRole.BASIC, email: 'Alex', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 1, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 2, time_ranges: ['11:30:00', '24:00:00']}, {weekday: 4, time_ranges: ['11:30:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 5, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'cammie', lname: 'unknown', gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Cammie', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['14:30:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['14:30:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'asa', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Asa', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '09:30:00']}, {weekday: 1, time_ranges: ['12:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 2, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '09:30:00']}, {weekday: 3, time_ranges: ['12:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 4, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '09:30:00']}, {weekday: 5, time_ranges: ['12:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'charles', lname: 'canada', gender: Gender.MALE, role: UserRole.BASIC, email: 'Charles@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 1, time_ranges: ['12:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 2, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 3, time_ranges: ['12:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 4, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 5, time_ranges: ['12:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'colton', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Colton@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 1, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 2, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 3, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 4, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 5, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'tanner', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Tanner@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'riggs', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Riggs@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '13:30:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: 'Tenant.UGA', fname: 'andrew', lname: 'stine', gender: Gender.MALE, role: UserRole.BASIC, email: 'AndrewS@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 1, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 2, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 3, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 4, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 5, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: 'Tenant.UGA', fname: 'nevada', lname: 'unknown', gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Nevada@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 1, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 3, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '09:30:00']}, {weekday: 5, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'cannon', lname: 'unknown', gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Cannon', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 1, time_ranges: ['12:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '11:45:00']}, {weekday: 2, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 3, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '11:45:00']}, {weekday: 4, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '09:30:00']}, {weekday: 5, time_ranges: ['14:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'andrew', lname: 'taylor', gender: Gender.MALE, role: UserRole.BASIC, email: 'AndrewT@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '12:45:00']}, {weekday: 1, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 2, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '12:45:00']}, {weekday: 3, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '10:30:00']}, {weekday: 4, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '12:45:00']}, {weekday: 5, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: 'Tenant.UGA', fname: 'noah', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Noah@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 1, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '13:30:00']}, {weekday: 2, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 3, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '08:30:00']}, {weekday: 5, time_ranges: ['15:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: 'Tenant.UGA', fname: 'juliana', lname: 'unknown', gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Juliana@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '13:00:00']}, {weekday: 3, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '13:00:00']}, {weekday: 5, time_ranges: ['13:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: 'Tenant.UGA', fname: 'joe', lname: 'reichard', gender: Gender.MALE, role: UserRole.BASIC, email: 'Joe@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '11:30:00']}, {weekday: 1, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '11:30:00']}, {weekday: 3, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '11:30:00']}, {weekday: 5, time_ranges: ['16:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.TOURNAMENT_CARTS]},
{tenant: 'Tenant.UGA', fname: 'rusty', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Rusty', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.TOURNAMENT_CARTS]},
{tenant: 'Tenant.UGA', fname: 'bob', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Bob@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.STARTER]},
{tenant: 'Tenant.UGA', fname: 'hudson', lname: 'unknown', gender: Gender.MALE, role: UserRole.BASIC, email: 'Hudson', preferred_shifts: 3, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: 'Tenant.UGA', fname: 'jake', lname: 'edison', gender: Gender.MALE, role: UserRole.BASIC, email: 'JakeE@gmail.com', preferred_shifts: 2, availability: [{weekday: 0, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 1, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 2, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 2, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 3, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 4, time_ranges: ['00:00:00', '08:45:00']}, {weekday: 4, time_ranges: ['17:30:00', '24:00:00']}, {weekday: 5, time_ranges: ['00:00:00', '24:00:00']}, {weekday: 6, time_ranges: ['00:00:00', '24:00:00']}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]}

];