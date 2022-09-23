'use strict'

const express = require("express")

const PORT = 3000
const app = express();
app.get('/',(req,res)=>{
    res.send("<h1>This is the first code of node js that i am going to containerise</h1>")
})

app.listen(3000,()=>console.log('server Ready'))

// console.log(`Running on http://${HOST}:${PORT}`)