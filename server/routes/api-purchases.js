const express               = require('express');
const router                = new express.Router();
const mongoose              = require('mongoose');
const config                = require('../../config');
const db_url                = process.env.MONGODB_URI || config.dbUri
const purchasesController   = require('../controllers/purchasesController')
var passport                = require('passport');

mongoose.connect(db_url);

getToken = function (headers) {
    if (headers && headers.authorization) {
      var parted = headers.authorization.split(' ');
      if (parted.length === 2) {
        return parted[1];
      } else {
        return null;
      }
    } else {
      return null;
    }
  };

router.get('/', function (req, res) {
    var token = getToken(req.headers);

    if (token) {
        purchasesController.findAll(req, res);
    }

});

router.get('/user/:id', function (req, res) {
    var token = getToken(req.headers);

    if (token) {
        purchasesController.findAllUser(req, res);
    }

});

router.put('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        if(req.user.role === 'admin' || req.user.role === 'employee'){
            purchasesController.update(req, res)
        }else{
            res.json({success: false, message: "Unauthorized"})
        }
    }else{
        res.json({success: false, message: "Not Authenticated"})
    }
  })

  router.post('/', passport.authenticate('jwt', { session: false}), function(req, res) {

    var token = getToken(req.headers);

    if (token) {
            purchasesController.create(req, res)
    }else{
        res.json({success: false, message: "Not Authenticated"})
    }
    
  })

  router.delete('/:id', passport.authenticate('jwt', { session: false}), function(req, res) {
    var token = getToken(req.headers);
    if (token) {
        purchasesController.remove(req, res)
    }else{
        res.json({success: false})
    }
  })



module.exports = router;