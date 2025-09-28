const express = require("express")
const router = express.Router()

router.post("/reistration",()=>{
  console.log("ami registration")
})

router.post("/login",()=>{
  console.log("ami login")
})

module.exports = router