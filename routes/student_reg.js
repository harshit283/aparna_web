/**
 * Created by user on 24/2/17.
 */

var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/dbms_lab';


var title = "DELHI TECHNOLOGICAL UNIVERSITY";
var action = "STUDENT REGISTRATION";


router.get('/', function (req,res,next) {
    res.render('student_reg', {
        title: title,
        action: action
    });
});

router.post('/sreg/submit', function (req,res,next) {
    var name = req.body.nme;
    var rollno = req.body.rollno;
    var branch = req.body.branch;
    var sem = req.body.sem;
    var email = req.body.email;
    var phno = req.body.phno;


    MongoClient.connect(url, function(err, db) {
        if(err)
            throw err;

        var handler = db.collection('student');
        handler.insertOne(
            {
                name: name,
                roll_number: rollno,
                branch: branch,
                semester: sem,
                email: email,
                phone_no: phno
            },
            function (err,r) {
                if(err)
                    throw err;
                else
                    console.log("inserted");

            callback();
            }
        );

        console.log("Connected correctly to server");


        db.close();
    });


    });

module.exports = router;