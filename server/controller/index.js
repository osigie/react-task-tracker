// let User = require("../models/user");
const db = require("../models/index");
// console.log(db.User);
// let User = require("../check");
// const User = sequelize.models.User;
const getAll = async (req, res, next) => {
  try {
    const data = await db.User.findAll();
    res.status(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const getSingle = async (req, res, next) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({
      where: {
        id: reqId,
      },
    });
    res.statusCode(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const updateReminder = async (req, res, next) => {
  try {
    const reqId = req.params.id;
    const reqBody = req.body;
    const data = await User.update(
      { reminder: reqBody },
      {
        where: {
          id: reqId,
        },
      }
    );
    res.statusCode(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};
const saveToDb = async (req, res, next) => {
  try {
    const { text, day, reminder } = req.body;
    const user = await User.create({ text, day, reminder });
    return res.statusCode(200).json(user);
  } catch (error) {
    console.log(error.message);
  }
};
const deleteSingle = async (req, res, next) => {
  try {
    const reqId = req.params.id;
    const data = await User.destroy({
      where: {
        id: reqId,
      },
    });
    res.statusCode(200).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  getAll,
  getSingle,
  updateReminder,
  deleteSingle,
  saveToDb,
};
