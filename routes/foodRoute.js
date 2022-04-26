const { Router } = require("express");
const express = require("express");
const  {protect,admin}= require("../middlewares/authMiddleware");
const {createFood,getMenu} = require("../controller/foodController");

const router = Router();

router.route("/").post(protect,admin, createFood).get(protect, getMenu)


module.exports=router
