const express=require('express')
const app=express()

app.get('/',(req,res)=>{
    res.json([{name:'John'},{name:'susan'}])
})
app.listen(2000,()=>{
    console.log('server is listening on port 2000')
})