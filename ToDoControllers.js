const ToDoModel = require("../models/ToDoModel");

module.exports.getToDo = async (req, res) => {
  try {
    const toDo = await ToDoModel.find();
    res.json(toDo);
  } catch (err) {
    console.error("Error fetching todos:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.saveToDo = async (req, res) => {
  try {
    const { text } = req.body;
    const data = await ToDoModel.create({ text });
    console.log("Added successfully...");
    console.log(data);
    res.json(data);
  } catch (err) {
    console.error("Error saving todo:", err);
    res.status(500).send("Internal Server Error");
  }
};

module.exports.updateToDo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    await ToDoModel.findByIdAndUpdate(_id, { text });
    res.send("Updated Successfully");
  } catch (err) {
    console.error("Error updating todo:", err);
    res.status(500).send("Internal Server Error");
  }
};
module.exports.deleteToDo = async (req, res) => {
  try {
    const { _id } = req.body;
    await ToDoModel.findByIdAndDelete(_id); // Use findByIdAndDelete
    res.send("Deleted Successfully");
  } catch (err) {
    console.error("Error deleting todo:", err);
    res.status(500).send("Internal Server Error");
  }
};
