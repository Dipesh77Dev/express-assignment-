import express from 'express';
import bodyParser from 'body-parser';
import usersRouter from './router/student.js';
// import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/student',usersRouter);

app.get('/',(req,res)=>{
    res.send("Hello World!!!!");
});
app.listen(PORT,()=> console.log('Server Running!!!'));