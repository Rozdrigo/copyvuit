const ArticleModel = require("../models/article");

async function _createArticle(body, section, page, highlighted) {
  try {
    const newArticle = new ArticleModel({ body, section, page, highlighted });
    const savedArticle = await newArticle.save();
    return savedArticle;
  } catch (error) {
    throw error;
  }
}

async function _getAllArticles() {
  try {
    const articles = await ArticleModel.find();
    return articles;
  } catch (error) {
    throw error;
  }
}

async function _getArticleBySection(section, page) {
  try {
    const articles = await ArticleModel.find({
      section,
      page,
    });
    return articles;
  } catch (error) {
    throw error;
  }
}

async function _getArticleById(id) {
  try {
    const article = await ArticleModel.findById(id);
    if (!article) {
      throw new Error("Artigo não encontrado");
    }
    return article;
  } catch (error) {
    throw error;
  }
}

async function _updateArticle(articleId, model) {
  try {
    const updatedArticle = await ArticleModel.findByIdAndUpdate(
      articleId,
      model,
      { new: true }
    );
    if (!updatedArticle) {
      throw new Error("Artigo não encontrado");
    }
    return updatedArticle;
  } catch (error) {
    throw error;
  }
}

async function _deleteArticle(id) {
  try {
    const deletedArticle = await ArticleModel.findByIdAndRemove(id);
    if (!deletedArticle) {
      throw new Error("Artigo não encontrado");
    }
    return "Artigo excluído com sucesso";
  } catch (error) {
    throw error;
  }
}

module.exports = {
  _createArticle,
  _getAllArticles,
  _getArticleBySection,
  _getArticleById,
  _updateArticle,
  _deleteArticle,
};
