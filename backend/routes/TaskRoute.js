const {Router} = require('express')
const {getTasks, saveTasks, updateTask, deleteTask} = require("../contorllers/TaskController")
const router = Router()
router.get("/get", getTasks)
router.post("/save", saveTasks);
router.put("/update/:id", updateTask);
router.delete("/delete/:id", deleteTask)

module.exports = router