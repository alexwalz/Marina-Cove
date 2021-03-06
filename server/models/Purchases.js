var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PurchasesSchema = new Schema({
        userId: String,
        email: String,
        firstName: String,
        lastName: String,
        state: String,
        zip: String,
        paid: Boolean,
        payerId: String,
        paymentId: String,
        paymentToken: String,
        scheduledDate: Date,
        purchaseDate: Date,
        vehicleId: String,
        serviceId: String,
        serviceName: String,
        price: String, 
        complete: {
                type: Boolean,
                default: false
              },
        completed_by: {
                type: String,
                default: null
              },
});


module.exports = mongoose.model('Purchase', PurchasesSchema);