const express = require('express')
const router = express.Router()

router.post('/', (req,res)=>{
    res.status(200).json({message:'Get Goals'})
})

router.put('/:id', (req,res)=>{
    res.status(200).json({message: 'update Goal ${req.params.id}'})
})

router.delete('/:id' , (req, res)=>{
    res.status(200).json({message: 'Delete Goal ${req.params.id}'})
})