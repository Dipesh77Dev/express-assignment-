const express = require('express');
const app = express();
const studentData = require('./studentsList.json');

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Hello!!");
})

app.get('/student', (req, res) => {
    res.send(studentData);
})

app.listen(port, () =>{
    console.log(`App is listening on port ${port}`);
})

// heroku api :-  https://expree-assign2.herokuapp.com/

/*
const fs = require('fs');
const express = require('express');
var app = express();
app.use(express.json());

app.get("/student", (req, res) => {
    fs.readFile("studentList.json", function(err, data) {
        if (err) throw err;
        const studentList = JSON.parse(data);
        res.send(studentList);
    });
})
*/