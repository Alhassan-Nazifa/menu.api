const { Router } = require("express")
const express = require("express")
const  {protect}= require("../middlewares/authMiddleware")
const {createFood,getMenu} = require("../controller/foodController")

const router = Router()

router.route("/food").post(protect, createFood).get(protect, getMenu)


module.exports=router
