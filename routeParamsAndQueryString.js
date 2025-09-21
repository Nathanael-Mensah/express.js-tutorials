const express=require('express')
const {products}=require('./data')
const app=express()

app.get('/',(req,res)=>{
    res.status(200).send('<h1>HomePage</h1><a href="/api/products">Products</a>')
})
app.get('/api/products',(req,res)=>{
    const newProduct=products.map((product)=>{
        const {id,name,image}=product
        return {id,name,image}
    })
    res.json(newProduct)
})
app.get('/api/products/:productID',(req,res)=>{
    //console.log(req)
    //console.log(req.params)
    const {productID}=req.params 
    const singleProduct=products.find(
        (product)=>product.id===Number(productID))

    if(!singleProduct){
        return res.status(404).send('Product does not exist')
    }
    res.json(singleProduct)
})
app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
})//if we use the same route on server hello world is outputted and we have { productID: '4', reviewID: 'abc' }
//in our terminal.ie here /:productID is 4 and :/reviewID is abc

//QUERY STRING
app.get('/api/v1/query',(req,res)=>{
    //console.log(req.query)
    //res.send('hello world')
    const {search,limit}=req.query
    let sortedProducts=[...products]

    if(search){
        sortedProducts=sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    if(limit){
        sortedProducts=sortedProducts.slice(0,Number(limit))
    }
    
    if(sortedProducts.length <1){
        //return res.status(200).send('no products matched your search')
        res.status(200).json({success:true,data:[]})
    }
    res.status(200).json(sortedProducts)

})

app.listen(2000,()=>{
    console.log('server is listening on port 2000')
})
