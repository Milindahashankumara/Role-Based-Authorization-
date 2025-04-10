const express = require("express");
const verifyToken = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");
const router = express.Router();


// Only admin can access this router
router.get("/admin", verifyToken,authorizeRoles("admin"),(req,res) => {
    res.json({message: "welcome Admin"});
});


// Both admin and manageer can access this router
router.get("/manager", verifyToken,authorizeRoles("admin","manager"),(req,res) => {
    res.json({message: "welcome Manager"});
});



//All can access this router
router.get("/user", verifyToken,authorizeRoles("admin","manager","user"),(req,res) => {
    res.json({message: "welcome User"});
});


module.exports = router;

