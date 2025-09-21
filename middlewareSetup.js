const express=require('express')
const app=express()
const logger=require('./logger')
const authorize=require('./authorize')
app.use([logger,authorize]) //attaches the middleware globally or to all the routes
//app.use('/api',logger) attaches the middleware to only routes beginning with /api

//req =>middleware =>res

app.get('/',(req,res)=>{
    res.send('HomePage')  
})
app.get('/about',(req,res)=>{
    res.send('AboutPage')
})
app.get('/api/products',(req,res)=>{
    res.send('Products')
})
app.get('/api/items',(req,res)=>{
    res.send('Items')
})
app.listen(5000,()=>{
    console.log('server is listening on port 5000')
})