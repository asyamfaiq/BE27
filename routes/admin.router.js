const express = require("express");
const router = express.Router();
const { 
    getAllForum,
    deleteForumById,
    getAllUser,
    updateUserById
 } = require("../controllers/admin.controller");

router.get('/', getAllForum)
router.delete('/', deleteForumById)
router.get('/user', getAllUser)
router.post('/user/:id', updateUserById)

module.exports = router