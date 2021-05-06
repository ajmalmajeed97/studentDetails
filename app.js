const express = require('express')
const app = express()
const router=express.Router()
const mongoose  = require('mongoose')
const PORT = 4000


mongoose.connect('mongodb+srv://ajmal:ajmalmajeed@cluster0.wyuag.mongodb.net/student?retryWrites=true&w=majority',{ useNewUrlParser:true, useUnifiedTopology: true})
mongoose.connection.on('connected',()=>{console.log("conneted to mongodb ")
})
mongoose.connection.on('error',(err)=>{
    console.log("not connected",err)
}) 

   app.use(express.json())
   app.use(express.static('client'));
   app.use(require('./controllers/router'))

app.listen(PORT,()=>{
    console.log("server is running on",PORT)
})

