const express = require('expre')
const router = express.Router()

router.get('/'(req, res)=>{
    res.status(200).json({message:'Get Goals'})
})
module.exports = router