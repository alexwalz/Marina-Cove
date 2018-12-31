var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VehicleStorageSchema = new Schema({
        type: String,
        year: Number,
        make: String,
        model: String,
        storageDate: Date,
        checkIns: Number,
        lastCheckIn: Date,
        active: Boolean,
        license: {
                type: String,
                uppercase: true,
            }
});


module.exports = mongoose.model('VehicleStorage', VehicleStorageSchema);