const express = require("express");
const router = express.Router();
const con = require("../model/model");

router
  .get("/all", (req, res) => {
    con.query("SELECT * FROM todo_tb", (err, result) => {
      if (err) return res.json({ err: err.message });
      res.status(200).json(result);
    });
  })

  .get("/_one/:id", (req, res) => {
    const { id } = req.params;
    con.query("SELECT * FROM todo_tb WHERE id=?", id, (err, result) => {
      if (err) return res.json({ err: err.message });

      if (result.length === 0)
        return res.status(500).json({ msg: "Id not Found" }).status(404);
      res.status(200).json(result);
    });
  })
  .post("/create", (req, res) => {
    const { title, info } = req.body;
    con.query(
      "INSERT INTO todo_tb(title, info) VALUES(?,?)",
      [title, info],
      (err, result) => {
        if (err) return res.json({ err: err.message }).status(500);

        res.status(200).json({ msg: "Todo added!" });
      }
    );
  })

  .put("/update/:id", (req, res) => {
    const { id } = req.params;
    const { title, info } = req.body;
    con.query(
      "UPDATE todo_tb SET title=?, info=? WHERE id=?",
      [title, info, id],
      (err, result) => {
        if (err) return res.json({ err: err.message }).status(500);

        if (result.affectedRows == 0) return res.json({ msg: "Id not Found" });
        if (result.affectedRows == 1 && result.changedRows == 0)
          return res.json({ msg: "same data towards a given id, NO UPDATE" });

        res.status(200).json({ msg: "Todo updated successfully" });
      }
    );
  })

  .delete("/remove/:id", (req, res) => {
    const { id } = req.params;
    con.query("DELETE FROM todo_tb WHERE id=?", id, (err, result) => {
      if (err) return res.json({ err: err.message }).status(500);

      if (result.affectedRows == 0) return res.json({ msg: "Id not Found" });
      res.status(200).json({ msg: "Todo Deleted successfully" });
    });
  });

module.exports = router;
