var express = require("express");
var router = express.Router();
const { id } = require("date-fns/locale");
const bcrypt = require('bcryptjs');
let student = require("../../model/register/student");


 //create data implementation - exception handling

 router.post("/addstudent",async function (req, res) {
    const id = req.body.id;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const dateOfBirth = req.body.dateOfBirth;
    const mobile = req.body.mobile;
    const status = req.body.status;
    const password = req.body.password;
    const accountType = req.body.accountType;
    
    const newstudent = new student({
        id,
        firstName,
        lastName,
        email,
        dateOfBirth,
        mobile,
        status,
        accountType,
        password
       
        
    });

     await newstudent.save().then(() => {
         res.json(" Success!");
     }).catch((err) => {
         console.log(err);
         res.json("Failed!");
     })
});

//log in
router.route('/login').post((req, res, next) => {
  var id = req.body.id;
  var password = req.body.password;

  systemReg.findOne({$or: [{id:id}]})
  .then(systemreg =>{
      if(systemreg){
              bcrypt.compare(password, systemreg.password, function(err, result){
                  if(err){
                      res.json({
                          error:err
                      })
                  }
                  if(result){
                      console.log(err);
                      res.json({
                          message: true
                      })      
                  }else{
                      console.log(err);
                       res.json({
                          message: false
                      })    
                  }
              })

      }else{
          res.json({
              message: false
          })
      }
  })
});


//update data in the database
router.put("/update/:id", async function (req, res){
    let userid = req.params.id;
    const{
        id,
        firstName,
        lastName,
        email,
        dateOfBirth,
        mobile,
        status,
        accountType,
        password } = req.body;

    const updatestudent = {
        id,
        firstName,
        lastName,
        email,
        dateOfBirth,
        mobile,
        status,
        accountType,
        password
    }

    student.findByIdAndUpdate(userid, updatestudent).then(() =>{
        res.status(200).send({status: "User updated"})

    }).catch((err) => {
        console.log(err);
        res.status(403).send({status: "Error with updating data"});
    })

})

//read implementaion
router.get("/",async(req,res)=> {

    await student.find(id)
    .then((student)=> res.json(student))
    .catch((err)=> res.status(403).json(
        {
            success : false,
            message : err,
            payload: {}
        }
        ));
});

//fecth
router.get("/get/:id",async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let userid = req.params.id; //fetch the id parameter in url

  await student.findById(userid).exec(function(err,result){
    if(err){
        res.json({"err":"Something went wrong"})
    } else{
        res.json({student:result})
    }
  
  }) //pass two parameters and find user by id and update relevent data
  

})

//delete data implementation from database
router.delete("/delete/:id", async (req, res) => {
    let userid = req.params.id;

    await student.findByIdAndDelete(userid).then(() => {
        res.status(200).send({status: "user deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleted", error:err.message});
    })
})


module.exports = router;
