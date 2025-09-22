const express=require('express')
const app=express()
const logger=require('./logger')
const authorize=require('./authorize')
app.use([logger,authorize]) //attaches the middleware globally or to all the routes
//app.use('/api',logger) attaches the middleware to only routes beginning with /api

//req =>middleware =>res
//for middleware we can use our own middleware function,express middlewarefunction or third party ie npm morgan
//app.use([logger authorize])//logger and authorize are our own built functions
//app.use(express.static('./public')) app.use and express.static are built in express middleware functions

// app.use is for mounting middleware (functions that run on every request).
// express.static is a built-in middleware to serve static files (HTML, CSS, JS, images).
// app.use(express.static('./public')) tells Express to serve files in the 'public' folder.

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