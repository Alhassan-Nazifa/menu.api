const { Router } = require("express")
const express = require("express")
const {createFood,getMenu} = require("../controller/foodController")


const router = Router()

router.route("/food").post(createFood).get(getMenu)


module.exports=router
