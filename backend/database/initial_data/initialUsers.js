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
{tenant: Tenant.UGA, fname: 'matt', lname: 'peterson', order:1, gender: Gender.MALE, role: UserRole.MANAGER, email: 'Matt@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: Tenant.UGA, fname: 'john', lname: 'crumbley', order:2, gender: Gender.MALE, role: UserRole.MANAGER, email: 'John@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: Tenant.UGA, fname: 'nathan', lname: 'toburen', order:3, gender: Gender.MALE, role: UserRole.ADMIN, email: 'Nathan@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: Tenant.UGA, fname: 'jackson', lname: 'jones', order:4, gender: Gender.MALE, role: UserRole.MANAGER, email: 'Jackson@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: Tenant.UGA, fname: 'griffin', lname: 'rousseau', order:5, gender: Gender.MALE, role: UserRole.BASIC, email: 'Griffin@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '10:30:00'], ['13:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['16:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '10:30:00'], ['13:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['16:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '10:30:00'], ['13:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'evan', lname: 'verma', order:6, gender: Gender.MALE, role: UserRole.ADMIN, email: 'evanVerma@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '09:30:00'], ['17:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '10:30:00'], ['17:30:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '09:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '10:30:00'], ['17:30:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '09:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.SHOP, ShiftType.RANGE, ShiftType.RANGE_REGISTER, ShiftType.CARTS]},
{tenant: Tenant.UGA, fname: 'parker', lname: 'brooks', order:7, gender: Gender.MALE, role: UserRole.BASIC, email: 'Parker@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '14:30:00']]}, {weekday: 2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '14:30:00']]}, {weekday: 4, time_ranges:[['00:00:00', '14:30:00']]}, {weekday: 5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'robby', lname: 'wells', order:8, gender: Gender.MALE, role: UserRole.BASIC, email: 'Robby@gmail.com', preferred_shifts: 2, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '08:45:00'], ['14:30:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '08:45:00'], ['14:30:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'zach', lname: 'bibbs', order:9, gender: Gender.MALE, role: UserRole.BASIC, email: 'Zach@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['13:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['13:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['13:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'brooke', lname: 'unknown',order:10, gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Brooke@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'carly', lname: 'anderson',order:11, gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Carly@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['15:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '13:00:00'], ['17:30:00', '24:00:00']]}, {weekday: 3, time_ranges:[['17:30:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '13:00:00'], ['16:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '11:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.SHOP, ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'don', lname: 'niepoth',order:12, gender: Gender.MALE, role: UserRole.BASIC, email: 'Don@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.STARTER]},
{tenant: Tenant.UGA, fname: 'jeff', lname: 'unknown',order:13, gender: Gender.MALE, role: UserRole.BASIC, email: 'Jeff@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.STARTER]},
{tenant: Tenant.UGA, fname: 'jack', lname: 'unknown',order:14, gender: Gender.MALE, role: UserRole.BASIC, email: 'Jack@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.STARTER]},
{tenant: Tenant.UGA, fname: 'ron', lname: 'unknown',order:15, gender: Gender.MALE, role: UserRole.BASIC, email: 'Ron@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.STARTER]},
{tenant: Tenant.UGA, fname: 'mike', lname: 'c',order:16, gender: Gender.MALE, role: UserRole.BASIC, email: 'MikeC@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.STARTER]},
{tenant: Tenant.UGA, fname: 'ernest', lname: 'unknown',order:17, gender: Gender.MALE, role: UserRole.BASIC, email: 'Ernest@gmail.com', preferred_shifts: 2, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.STARTER]},
{tenant: Tenant.UGA, fname: 'steve', lname: 'unknown',order:18, gender: Gender.MALE, role: UserRole.BASIC, email: 'Steve@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.STARTER]},
{tenant: Tenant.UGA, fname: 'clint', lname: 'udell',order:19, gender: Gender.MALE, role: UserRole.MANAGER, email: 'Clint@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.SHOP, ShiftType.RANGE_REGISTER, ShiftType.TOURNAMENT_CARTS]},
{tenant: Tenant.UGA, fname: 'mike', lname: 'lockwood',order:20, gender: Gender.MALE, role: UserRole.BASIC, email: 'MikeL@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '11:30:00']]}, {weekday: 2, time_ranges:[['00:00:00', '11:45:00'], ['17:30:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '11:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '11:45:00'], ['17:30:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'patrick', lname: 'unknown',order:21, gender: Gender.MALE, role: UserRole.BASIC, email: 'Patrick@gmail.com', preferred_shifts: 2, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['17:30:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['17:30:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'Nathan', lname: 'a',order:22, gender: Gender.MALE, role: UserRole.BASIC, email: 'NathanA@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'jake', lname: 'lee',order:23, gender: Gender.MALE, role: UserRole.BASIC, email: 'JakeL@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '08:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '08:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '08:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'ethan', lname: 'finney',order:24, gender: Gender.MALE, role: UserRole.BASIC, email: 'Ethan@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '08:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '08:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['14:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'avery', lname: 'unknown',order:25, gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Avery@gmail.com', preferred_shifts: 3, availability: [{weekday:0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday:6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'alex', lname: 'weltz',order:26, gender: Gender.MALE, role: UserRole.BASIC, email: 'Alex', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '08:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '08:45:00'], ['11:30:00', '24:00:00']]}, {weekday: 4, time_ranges:[['11:30:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '08:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'cammie', lname: 'unknown',order:27, gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Cammie', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['14:30:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['14:30:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'asa', lname: 'unknown',order:28, gender: Gender.MALE, role: UserRole.BASIC, email: 'Asa', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '09:30:00'], ['12:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '08:45:00'], ['17:30:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '09:30:00'], ['12:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '08:45:00'], ['17:30:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '09:30:00'], ['12:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'charles', lname: 'canada',order:29, gender: Gender.MALE, role: UserRole.BASIC, email: 'Charles@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '08:30:00'], ['12:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '08:45:00'], ['14:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '08:30:00'], ['12:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '08:45:00'], ['16:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '08:30:00'], ['12:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'colton', lname: 'unknown',order:30, gender: Gender.MALE, role: UserRole.BASIC, email: 'Colton@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '10:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '08:45:00'], ['13:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '10:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '08:45:00'], ['13:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '10:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'tanner', lname: 'unknown',order:31, gender: Gender.MALE, role: UserRole.BASIC, email: 'Tanner@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'riggs', lname: 'unknown',order:32, gender: Gender.MALE, role: UserRole.BASIC, email: 'Riggs@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '13:30:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: Tenant.UGA, fname: 'andrew', lname: 'stine',order:33, gender: Gender.MALE, role: UserRole.BASIC, email: 'AndrewS@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '08:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '08:45:00'], ['13:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '08:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '08:45:00'], ['13:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '08:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: Tenant.UGA, fname: 'nevada', lname: 'unknown',order:34, gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Nevada@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '08:30:00'], ['13:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['17:30:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '08:30:00'], ['13:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['13:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '09:30:00'], ['13:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'cannon', lname: 'unknown',order:35, gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Cannon', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '08:30:00'], ['12:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '11:45:00'], ['17:30:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '08:30:00'], ['16:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '11:45:00'], ['17:30:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '09:30:00'], ['14:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'andrew', lname: 'taylor',order:36, gender: Gender.MALE, role: UserRole.BASIC, email: 'AndrewT@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '12:45:00'], ['15:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '10:30:00'], ['16:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '12:45:00'], ['15:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '10:30:00'], ['16:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '12:45:00'], ['15:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: Tenant.UGA, fname: 'noah', lname: 'unknown',order:37, gender: Gender.MALE, role: UserRole.BASIC, email: 'Noah@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '08:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '13:30:00'], ['16:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '08:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '08:30:00'], ['15:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: Tenant.UGA, fname: 'juliana', lname: 'unknown',order:38, gender: Gender.FEMALE, role: UserRole.BASIC, email: 'Juliana@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['13:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '13:00:00']]}, {weekday: 3, time_ranges:[['13:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '13:00:00']]}, {weekday: 5, time_ranges:[['13:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE, ShiftType.RANGE_REGISTER]},
{tenant: Tenant.UGA, fname: 'joe', lname: 'reichard',order:39, gender: Gender.MALE, role: UserRole.BASIC, email: 'Joe@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '11:30:00'], ['16:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '11:30:00'], ['16:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '11:30:00'], ['16:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.TOURNAMENT_CARTS]},
{tenant: Tenant.UGA, fname: 'rusty', lname: 'unknown',order:40, gender: Gender.MALE, role: UserRole.BASIC, email: 'Rusty', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.TOURNAMENT_CARTS]},
{tenant: Tenant.UGA, fname: 'bob', lname: 'unknown',order:41, gender: Gender.MALE, role: UserRole.BASIC, email: 'Bob@gmail.com', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.STARTER]},
{tenant: Tenant.UGA, fname: 'hudson', lname: 'unknown',order:42, gender: Gender.MALE, role: UserRole.BASIC, email: 'Hudson', preferred_shifts: 3, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]},
{tenant: Tenant.UGA, fname: 'jake', lname: 'edison',order:43, gender: Gender.MALE, role: UserRole.BASIC, email: 'JakeE@gmail.com', preferred_shifts: 2, availability: [{weekday: 0, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 1, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 2, time_ranges:[['00:00:00', '08:45:00'], ['17:30:00', '24:00:00']]}, {weekday: 3, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 4, time_ranges:[['00:00:00', '08:45:00'], ['17:30:00', '24:00:00']]}, {weekday: 5, time_ranges:[['00:00:00', '24:00:00']]}, {weekday: 6, time_ranges:[['00:00:00', '24:00:00']]}], shift_types: [ShiftType.CARTS, ShiftType.RANGE]}

];