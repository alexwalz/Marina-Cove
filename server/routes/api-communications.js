var mongoose    = require('mongoose');
var passport    = require('passport');
var settings    = require('../../config/settings');
var express     = require('express');
var jwt         = require('jsonwebtoken');
var router      = express.Router();
var User        = require("../models/Users");
var nodemailer  = require('nodemailer')

require('../../config/passport')(passport);


router.post('/contact', function(req, res) {

    console.log(req.body)

    try {

        nodemailer.createTestAccount((err, account) => {
            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 587,
                auth: {
                    user: process.env.EMAIL_USER || 'marinacovestorageutah@gmail.com',
                    pass: process.env.EMAIL_PASS || 'marinacovepassword123'
                }
            });

            let mailOptions = {
                from: `"${req.body.firstName + " " + req.body.lastName}" <${req.body.email}>`, // sender address
                to: `${process.env.EMAIL_USER}`, // list of receivers
                subject: 'Marina Cove Storage Contact Request', // Subject line
                html: `<div>
                <div style="height: 200px; background-color: #ef1b36; position: relative;">
                <div style="margin: auto; text-align: center;">
                <h1 style="color: white; font-size: 2.5rem; padding-top: 70px;">Marina Cove Storage</h1>
                </div>
                </div>
                <div style="padding: 20px;">
                <p>&nbsp;</p>
                <p>Marina Cove Storage Team,</p>
                <p>You have a new message!</p>
                <p>Name: ${req.body.firstName + " " + req.body.lastName}</p>
                <p>Email: ${req.body.email}</p>
                <p>Phone: ${req.body.phoneNumber}</p>
                <p>&nbsp;</p>
                <h2>Question</h2>
                <hr/>
                <p style='color: grey'>${req.body.body}</p>
                </div>
                <div style="margin-top: 60px;">
                <div style="height: 100px; background-color: #1e1e1e; color: white; padding: 20px;">
                <p>Marina Cove Storage</p>
                <p>22 E 1500 S<br />American Fork, UT 84003<br />(801) 230-7452</p>
                <p>&nbsp;</p>
                <p>&nbsp;</p>
                </div>
                </div>
                </div>` 
            };

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {console.log(error)}
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.json({success: true, message: "Message Sent"})
            });

        });

    }

    catch (e) {console.log(e)}

  });



  module.exports = router;