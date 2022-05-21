const express = require("express");
const router = express.Router();
const {
  getAll,
  getSingle,
  updateReminder,
  saveToDb,
  deleteSingle,
} = require("../controller/index");

router.route("/tasks").get(getAll).post(saveToDb);
router
  .route("/tasks/:id")
  .get(getSingle)
  .delete(deleteSingle)
  .put(updateReminder);

module.exports = router;
