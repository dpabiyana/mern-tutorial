console.log("hi all")
const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000



const app = express()


app.get('/api/goals', (req, res )=>{
    res.send('Get Goals')
})
app.arguments('api/goals',require('.routes/goalRoutes.js'))
app.listen(port, () => console.log(`Server started on port ${port}`))