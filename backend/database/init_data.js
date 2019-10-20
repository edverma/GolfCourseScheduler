const TenantShift = require('./mongoModels').Models.TenantShift;

//check for if a certain collection exists or has data, if not add initial data
module.exports = function initData(db, callback) {
    if ( ! tenantShiftsExist() ) {
        const initialTenantShifts = require('./initial_data/initialTenantShifts');
        for ( let i = 0; i < initialTenantShifts.length; i++ ) {
            db.createDocument( initialTenantShifts[i], TenantShift, () => { } );
        }
    }
    callback();
};

function tenantShiftsExist() {
    TenantShift.count( (err, count) => {
        if ( count == 0 ) return true;
        return false;
    });
}
