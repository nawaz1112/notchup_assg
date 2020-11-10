const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
require('dotenv').config();

const Parentdetails = require('./../../models/ParentDetials');

// @route   GET api/users/test
// @desc    Tests post route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'this Works' }));

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});


// @route   GET api/users/
// @desc    Tests post route
// @access  Public
router.post('/', (req, res) => {

    let output = `
    <h3>Dear ${req.body.parentName}</h3>
    <p>${req.body.childName}'s class at ${req.body.date} has been successfully booked.</p>`;

    Parentdetails.findOne({
        parentEmail: req.body.parentEmail
    }).then( user => {
        if(user){
            console.log(user)
        }
    });

    let mailOptions = {
        from: process.env.EMAIL,
        to: `${req.body.parentEmail}`,
        subject: 'NotchUp Trial Class Booked successfully',
        text: '',
        html: output
    }
    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log(err);
        } else if (data.messageId) {
            console.log(data);
        }
    });

    const newPost = new Parentdetails({
        parentName: req.body.parentName,
        parentContactNo: req.body.parentContactNo,
        parentEmail: req.body.parentEmail,
        childName: req.body.childName,
        childAge: req.body.childAge,
        courseName: req.body.courseName,
        date: req.body.date
    });
console.log(req.body)
    newPost.save()
        .then(post => res.send(post))
        .catch(err => res.send(err));


});


module.exports = router;