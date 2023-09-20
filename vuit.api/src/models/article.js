const mongoose = require("../database/dbcontext");
const { Schema, model } = mongoose;

const articleSchema = new Schema({
  body: String,
  section: String,
  page: String,
  highlighted: {
    type: Boolean,
    default: false,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const ArticleModel = new model("Article", articleSchema);

module.exports = ArticleModel;
