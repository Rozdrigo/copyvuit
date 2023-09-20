const express = require("express");
const article = require("../controllers/articleController");

const ArticleRouter = express.Router();

ArticleRouter.post("/create", article.createArticle);
ArticleRouter.get("/getAll", article.getAllArticles);
ArticleRouter.post("/getArticleBySection", article.getArticleBySection);
ArticleRouter.get("/getById", article.getArticleById);
ArticleRouter.put("/update", article.updateArticle);
ArticleRouter.delete("/delete", article.deleteArticle);

module.exports = ArticleRouter;
