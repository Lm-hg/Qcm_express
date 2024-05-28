const express= require('express');
const cors= require('cors');
const port= 8000;
const app=express();
app.use(express.json());
app.use(cors());

app.post('/form1',(req,res)=>{
    const response="c"
    const data = req.body.res1;
    if(data==response){
        res.status(200).json()
    }else{
        res.status(500).json()
    }
})
app.post('/form2',(req,res)=>{
    const response="c"
    const data = req.body.res1;
    if(data==response){
        res.status(200).json()
    }else{
        res.status(500).json()
    }
})
app.post('/form3',(req,res)=>{
    const response="b"
    const data = req.body.res1;
    if(data==response){
        res.status(200).json()
    }else{
        res.status(500).json()
    }
})
app.post('/form4',(req,res)=>{
    const response="a"
    const data = req.body.res1;
    if(data==response){
        res.status(200).json()
    }else{
        res.status(500).json()
    }
})
app.post('/form5',(req,res)=>{
    const response="b"
    const data = req.body.res1;
    if(data==response){
        res.status(200).json()
    }else{
        res.status(500).json()
    }
})


app.listen(port,function(){
    console.log(`Serveur tourne sur le port ${port}`);
})