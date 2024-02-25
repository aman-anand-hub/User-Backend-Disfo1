const router = require("express").Router();
const { postUser, getAllUsers, getUsersByUsername } = require("../Controller/user.controller");
const { validateUserData } = require("../Middlewares/Validators/userValidation");
const { verifyAuth } = require("../Middlewares/verifyAuth");

router.post("/register", validateUserData, postUser);
router.get("/all", verifyAuth, getAllUsers);
router.get("/:username", getUsersByUsername);

module.exports = router;