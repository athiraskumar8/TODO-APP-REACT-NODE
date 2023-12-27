const { Router } = require("express");
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require("../controllers/ToDoControllers"); // Fix: Import updateToDo and deleteToDo

const router = Router();

router.get("/", getToDo);
router.post("/save", saveToDo);
router.post("/update", updateToDo); // Fix: Use updateToDo instead of saveToDo
router.post("/delete", deleteToDo); // Fix: Use deleteToDo instead of saveToDo

module.exports = router;
