import express from 'express'; 
const router = express.Router();

const data=[
    {
        studentFirstName: "Dipesh",
        collegeName: "Bhavans",
        location: "Nallasopara"
    }
]

router.post('/add',(req,res) => {
    console.log('Post request has been received');
    const studentDetail = req.body;
    data.push(studentDetail);
    console.log(req.body);
    res.json({"result":"Success"})
});

router.get('/getDetails',(req,res) => {
    console.log(data);
    res.send(data);
})

export default router;

/*
var array=[];
router.post('/add',(req,res)=>{
console.log(req.body)
console.log('Post request has been received');;

let student={
    studentFirstName:req.body.studentFirstName,
    collegeName:req.body.collegeName,
    location:req.body.location
};
array.push(student);
console.log(req.body);
res.json({"result":"Success"});

fs.appendFile('./user.json',JSON.stringify(student)+'\n', {
  },(err) => {
    if (err)
      console.log(err);
    else {
      console.log("File written successfully\n");
    }
}
    );
res.send(student);
res.end();
});

router.get('/getDetails',(req,res)=>{
    const store=fs.readFile('./user.json','utf-8',(err,data) => {
        if (err)
          console.log(err);
        else {
          console.log("File read successfully\n");
          console.log(data);
          res.send(data);
          res.end();
        }
    });
*/
