exports.createDocument = function createDocument(scheduleRequirementsJSON, callback ) {
    const ScheduleRequirementsMongo = require('./mongoModels.js').Models.ScheduleRequirements;

    let scheduleRequirementsDocument = new ScheduleRequirementsMongo( scheduleRequirementsJSON );

    scheduleRequirementsDocument.save( (err) => {
        if(err){
            console.log(err);
        }
    });

    callback();
};