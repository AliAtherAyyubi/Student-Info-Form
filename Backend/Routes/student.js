
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router()

let Stmodel = require('../models/add')


//      CRUD Features of Student info///



router.post('/addStudent', async (req, res) => {
    try {
        let { name, rollno, major, year, section, semester, dob, gender, age, email, mobile, country, religion } = req.body
        var fullname = req.body.fname + " " + req.body.lname
        var addStudent = new Stmodel({

            name: fullname,
            rollno: rollno,
            major: major,
            year: year,
            section: section,
            semester: semester,
            dob: dob,
            gender: gender,
            age: age,
            email: email,
            mobile: mobile,
            country: country,
            religion: religion,
        });
        // checking validation //

        var ch_rollno = await Stmodel.findOne({ rollno: rollno });

        var ch_email = await Stmodel.findOne({ email: email });

        var ch_phone = await Stmodel.findOne({ mobile: mobile });

        if (ch_rollno != null)
            return res.json({ success: false, msg: "Roll no is already exist!" });

        else if (ch_email != null)
            return res.json({ success: false, msg: "The email is already exist!" });

        else if (ch_phone != null)
            return res.json({ success: false, msg: "This mobile no is already exist!" });

        else {
            addStudent.save()
            return res.json({ success: true, msg: "Added Successfully" })
        }
    }
    catch (error) {
        return res.json({ error: error.message })
    }
})
///  To view data or search a specific roll NO ///

router.post('/searchstudent', async (req, res) => {


    try {
        var st_rollno = req.body.rollno;
    var stmajor = req.body.major;
    var styear = req.body.year;

    var search = await Stmodel.findOne({ rollno: st_rollno, major: stmajor, year: styear });

    if (search) {
        // console.log(search)
        return res.json(search)
    }
    else {
        return res.json({ success: false, msg: "Student Not Found!" });

    }
    } catch (error) {
        return res.json({ error: "Enter correct value" })
        
    }

});
        // to read or show whole database //
router.get('/fetchstudent',async(req,res)=>{

    var student= await Stmodel.find();
    res.json(student[1])
});


module.exports = router