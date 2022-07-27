var express = require("express");
var router = express.Router();
const { id } = require("date-fns/locale");
const notes = require("../../model/register/notes");

//update data in the database
router.put("/update/:id", async function (req, res){
    let userid = req.params.id;
    const{
        subjectName,
        note } = req.body;

    const updateuser = {
        subjectName,
        note
    }

    user.findByIdAndUpdate(userid, updateuser).then(() =>{
        res.status(200).send({status: "notes updated", user: update})

    }).catch((err) => {
        console.log(err);
        res.status(403).send({status: "Error with updating data"});
    })

})

router.get("/get/:id",async(req,res) => { // get data from frontend via request. async function is used to increase the performance 
    let userid = req.params.id; //fetch the id parameter 

     await notes.findById(userid) //pass two parameters and find user by id and update relevent data
    .then(() => {
        res.json("Success!");
     }).catch((err) => {
         console.log(err);
         res.json("Failed!");
     })

})

router.get("/getnotes" , async(req,res)=>{
    const notes= await user.find({} , err , result=>{
        if(err){
            res.status(500).send({msg:"err"})
        }else{
            res.status(200).send({"data":result})
        }
    })
})


module.exports = router;