require('dotenv').config()

const express = require('express')  //we can write -->   import express from "express"
const app = express()     // we make a variable
const port = 3000    // Port number is a 16-bit numerical value that ranges from 0 to 65535.
// const port2=4000

app.get('/', (req, res) => {     // get is a method  / is home route - req belongs to request ans res belong to response
  res.send('Hello World!')
})

app.get('/greet',(req,res)=>{
res.send("welcome to this page")
})
app.get('/login',(req,res)=>{
res.send("<h1>please login vishal app </h1>")
})

// app.listen(port, () => {       // listen is also a method
//   console.log(`Example app listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {       // listen is also a method
    console.log(`Example app listening on port ${port}`)
  })



// app.listen(port2,()=>{
//    console.log(`congratulations you are listening from port ${port2}`)
// })