const express=require('express')
const app=express()
const {products}=require('./data')

app.get('/',(req,res)=>{
    res.json(products)
})
app.get('*',(req,res)=>{
    res.send('<h1>Page not found</h1>')
})
app.listen(2000,()=>{
    console.log('server is listening on port 2000')
})