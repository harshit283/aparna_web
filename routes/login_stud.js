/**
 * Created by user on 1/3/17.
 */

var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

var url = 'mongodb://localhost:27017/dbms_lab';


var title = "DELHI TECHNOLOGICAL UNIVERSITY";
var action = "STUDENT REGISTRATION";


router.get('/', function (req,res,next) {
    res.render('login_stud', {
        title: title,
        action: action
    });
});

router.post('/logs/submit', function (req,res,next) {
    var rollno = req.body.rollno;
    MongoClient.connect(url, function (err, db) {
        var handler = db.collection('student');

        collection.find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            assert.equal(rollno, docs.roll_number);
            console.log("Found the following records");
            console.dir(docs);
            db.close();
            callback(docs);

        });

    });

});

    module.exports = router;