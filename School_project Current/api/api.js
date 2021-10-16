const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://vil:vil123@cluster0.eqhnr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser:true, useUnifiedTopology: true });

const Student = require('./models/student'); 

var express = require('express')
var bodyParser = require('body-parser')
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded({ extended: false })) 
app.use(bodyParser.json())
app.use(express.static('public'));


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });

app.get('/api/test', (req, res) => {
 res.send('The API is working!');
});

app.get('/api/students', (req, res) => {
    Student.find({}, (err, students) => {
    console.log(devices);
    });
});

// app.post('/api/registration', (req, res) => {
//     const { fname, lname, c_name, tutor } = req.body; 
//     console.log(fname);
//     const newStudent = new Student({
//     fname,
//     lname,
//     c_name,
//     tutor
//     });
//     newStudent.save().then(doc => {
//         console.log("Entered");
//     console.log(doc);
//     }).then(() => {

//     console.log('Hi ' + String(newStudent.fname));

//    });
// });

app.post('/api/registration', (req, res) => { 
    const { fname, password, c_name, tutor } = req.body; 
    Student.findOne({
        fname : fname
            }, (err, found) => {
                if (err) {
                    return res.send(err);
                }
                else if (found) {
                    message = 'Student already exists';
                    return res.send(message);
                }
                else {
                    const newStudent = new Student({
                        fname,
                        password,
                        c_name,
                        tutor
                    });
                    newStudent.save(err => {
                        return err
                            ? res.send(err)
                            :res.json({
                                success: true,
                                message: 'Created new student'
                            });
                    });
                }
        
    }); 
    
});

app.post('/api/authenticate', (req, res) => { 
    const { user, password } = req.body; 
    Student.findOne({
        fname : user
            }, (err, found) => {
                if (err) {
                    return res.send(err);
                }
                else if (!found) {
                    return res.send('No user found');
                }
                else if (found.password != password) {
                    
                    return res.send('Incorrect password');
                }
                else {
                    return res.json({
                        success: true,
                        message: 'Authenticated successfully', 
                        isAdmin: found.isAdmin
                    });
                }
        
    }); 
    
});


app.listen(port, () => {
 console.log(`listening on port ${port}`);
});