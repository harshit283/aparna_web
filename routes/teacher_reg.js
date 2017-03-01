/**
 * Created by user on 26/2/17.
 */

var express = require('express');
var router = express.Router();

var title = "DELHI TECHNOLOGICAL UNIVERSITY";
var action = "TEACHER REGISTRATION";

router.get('/', function (req,res,next) {
    res.render('teacher_reg', {
        title: title,
        action: action
    });
});

router.post('/treg/submit', function (req,res,next){
    var name = req.body.nme;
    var fid = req.body.Fid;
    var dept = req.body.dept;
    var age = req.body.age;
    var email = req.body.email;
    var phno = req.body.phno;

});

module.exports = router;