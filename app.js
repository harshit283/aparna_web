/**
 * Created by user on 24/2/17.
 */

var express = require('express');
var path = require('path');

var app = express();

var student_reg = require('./routes/student_reg');
var teacher_reg = require('./routes/teacher_reg');
var login_stud = require('./routes/login_stud');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','hbs');

app.use('/',express.static(path.join(__dirname, 'public')));
app.use('/student_reg',student_reg);
app.use('/teacher_reg',teacher_reg);
app.use('/login_student',login_stud);

app.listen(3333, function () {
    console.log("server running on port 3333");
});
