const Tenant = require('../../../enums.js').Tenant;
const ShiftType = require('../../../enums.js').ShiftType;
const ShiftTime = require('../../../enums.js').ShiftTime;

module.exports = [
    {
        tenant: Tenant.UGA,
        type: ShiftType.SHOP,
        time: ShiftTime.AM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.SHOP,
        time: ShiftTime.PM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.CARTS,
        time: ShiftTime.AM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.CARTS,
        time: ShiftTime.PM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.RANGE,
        time: ShiftTime.AM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.RANGE,
        time: ShiftTime.PM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.RANGE_REGISTER,
        time: ShiftTime.AM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.RANGE_REGISTER,
        time: ShiftTime.PM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.STARTER,
        time: ShiftTime.AM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.STARTER,
        time: ShiftTime.PM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.TOURNAMENT_CARTS,
        time: ShiftTime.AM
    },
    {
        tenant: Tenant.UGA,
        type: ShiftType.TOURNAMENT_CARTS,
        time: ShiftTime.PM
    }
];