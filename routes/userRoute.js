const { Router } = require("express")
const router = Router();
const {createUser} = require("../controller/userController");

router.post("/users",createUser);


module.exports = router;