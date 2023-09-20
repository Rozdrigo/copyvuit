const mongoose = require("../database/dbcontext");
const { Schema, model } = mongoose;

const infoPointSchema = new Schema({
  title: String,
  body: String,
  created_at: {
    type: Date,
    default: Date.now
  }
}) 

const InfoPointModel = new model("InfoPoint", infoPointSchema);

module.exports = InfoPointModel;