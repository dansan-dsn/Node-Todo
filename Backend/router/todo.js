const express = require("express");
const collection = require("../model/Todo");
const mongoose = require("mongoose");
const router = express.Router();

router
  .get("/all", async (req, res) => {
    try {
      const data = await collection.find({});
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  })

  .get("/_one/:id", async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ msg: "Invalid Id" });

      const todo = await collection.findById(id);
      if (!todo) return res.status(404).json({ msg: "Todo Not Found" });

      res.status(200).json(todo);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  })
  .post("/create", async (req, res) => {
    try {
      const todo = await collection.create(req.body);
      res.status(201).json(todo);
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  })

  .put("/update/:id", async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ msg: "Invalid ID" });

      const todo = await collection.findByIdAndUpdate(id, req.body);
      if (!todo) return res.status(404).json({ msg: "Todo Not Found" });

      res.status(200).json({ msg: "Todo updated successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  })

  .delete("/remove/:id", async (req, res) => {
    try {
      const { id } = req.params;
      if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).json({ msg: "Invalid Id" });

      const todo = await collection.findByIdAndDelete(id);
      if (!todo) return res.status(404).json({ msg: "Todo Not Found" });

      res.status(200).json({ msg: "Todo deleted successfully" });
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  });

module.exports = router;
