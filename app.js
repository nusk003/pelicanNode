const express = require('express');
const bodyParser = require('body-parser')
const tasks = require('./routes/task')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

// We can store th url in .env file securely but to make the testing process easy.I'll directly put here. but this is not a secured approach.
mongoose.connect("mongodb+srv://nusky:Amb1UKMlUCoTCG8n@cluster0.cn9ki.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{useNewUrlParser : true})
.then(data=>{
   console.log("connected to db")
})
.catch(error=>{
    console.log(error)
})

app.use(cors())
app.use(bodyParser.json())
app.use('/tasks',tasks)

app.listen(8000)