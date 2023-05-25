const express = require("express");
const {
  getAllTodos,
  createTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  patchTodo,
} = require("../controller/TodoController");
const { protect } = require("../middleware/authTokenMiddleware");

const router = express.Router();

router.route("/")
.get(protect,getAllTodos)
.post(protect,createTodo);

router.route("/:id")
.get(protect,getTodo)
.put(protect,updateTodo)
.delete(protect,deleteTodo)
.patch(patchTodo);

module.exports = router;
