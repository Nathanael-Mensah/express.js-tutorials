const express=require('express')
const app=express()
const {people}=require('./data')

//static assets
app.use(express.static('./methods-public'))

//parse form data
app.use(express.urlencoded({extended:false}))

app.post('/login',(req,res)=>{
    //res.send('POST')
    const {name}=req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    else{
        res.status(404).send('Please provide credentials')
    }
})
app.get('/api/people',(req,res)=>{
    res.send({sucess:true,data:people})
})

app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})