const express=require('express')
const app=express()

app.get((req,res)=>{
    console.log('user hit the server')
    res.status(200).send('HomePage')
})
app.listen(5000,()=>{
    console.log("server is listening on port 5000")
})