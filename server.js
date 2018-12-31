const express         = require('express');
const path            = require('path');
const bodyParser      = require('body-parser');
const config          = require('./config');
const cors            = require('cors');
const app             = express();
const router          = express.Router();
const db_url          = process.env.MONGODB_URI || config.dbUri
const port            = process.env.PORT || 5000;

require('./server/models').connect(db_url);

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



var allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5000',
    'https://marina-cove.herokuapp.com',
    'http://marina-cove.herokuapp.com',
    'http://marinacovestorage.com',
    'https://marinacovestorage.com'
];



app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                `allow access from the specified Origin: ${origin}`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}));



// Routes
const apiRoutes             	= require('./server/routes/api-routes');
const apiRoutesUsers        	= require('./server/routes/api-users');
const apiRoutesServices     	= require('./server/routes/api-services');
const apiRoutesVehicles     	= require('./server/routes/api-vehicles');
const apiRoutesPurchases    	= require('./server/routes/api-purchases');
const apiRoutesAuth         	= require('./server/routes/api-auth');
const apiRoutesVehicleStorage 	= require('./server/routes/api-vehicleStorage');



app.use('/api', apiRoutes);
app.use('/api/users', apiRoutesUsers);
app.use('/api/services', apiRoutesServices);
app.use('/api/vehicles', apiRoutesVehicles);
app.use('/api/purchases', apiRoutesPurchases);
app.use('/api/auth', apiRoutesAuth);
app.use('/api/vehicleStorage', apiRoutesVehicleStorage)



router.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});




app.use(router)

app.listen(port, function () {
    console.log(`server running on port ${port}`);
});