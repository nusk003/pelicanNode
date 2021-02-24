const express = require('express')
const router = express.Router()
const Task = require('../models/Task')

router.get('/',(request,response)=>{

    Task.find()
    .then(data=>{
        response.status(200).json(data)
    })
    .catch(error=>{
        response.status(500).json(error)
    })
})
router.post('/add',(request,response)=>{

    const task = new Task(request.body)
    task.save()
    .then(data=>{
        response.status(200).json(data)
    })
    .catch(error=>{
        response.status(400).json(error)
    })
})



module.exports = router