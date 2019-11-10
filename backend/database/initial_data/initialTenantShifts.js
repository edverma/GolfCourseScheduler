const Tenant = require('../../../enums.js').Tenant;
const ShiftType = require('../../../enums.js').ShiftType;
const ShiftTime = require('../../../enums.js').ShiftTime;

module.exports = [
    {
        tenant: Tenant.UGA,
        type: ShiftType.SHOP,
        time: ShiftTime.AM,
        order: 1
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.SHOP,
        time: ShiftTime.PM,
        order: 2
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.CARTS,
        time: ShiftTime.AM,
        order: 3
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.CARTS,
        time: ShiftTime.PM,
        order: 4
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.RANGE,
        time: ShiftTime.AM,
        order: 5
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.RANGE,
        time: ShiftTime.PM,
        order: 6
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.RANGE_REGISTER,
        time: ShiftTime.AM,
        order: 7
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.RANGE_REGISTER,
        time: ShiftTime.PM,
        order: 8
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.STARTER,
        time: ShiftTime.AM,
        order: 9
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.STARTER,
        time: ShiftTime.PM,
        order: 10
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.TOURNAMENT_CARTS,
        time: ShiftTime.AM,
        order: 11
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.TOURNAMENT_CARTS,
        time: ShiftTime.PM,
        order: 12
    }
];