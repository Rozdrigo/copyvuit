const {
  _createArticle,
  _getAllArticles,
  _getArticleById,
  _updateArticle,
  _deleteArticle,
  _getArticleBySection,
} = require("../services/articleService");

async function createArticle(req, res) {
  const { body, section, page, highlighted } = req.body;
  try {
    const response = await _createArticle(body, section, page, highlighted);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
}
async function getArticleBySection(req, res) {
  const { section, page } = req.body;
  try {
    const response = await _getArticleBySection(section, page);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
}
async function getAllArticles(req, res) {
  try {
    const response = await _getAllArticles();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
}
async function getArticleById(req, res) {
  const articleId = req.params.id;
  try {
    const response = await _getArticleById(articleId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
}
async function updateArticle(req, res) {
  const articleId = req.params.id;
  try {
    const response = await _updateArticle(articleId, req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
}
async function deleteArticle(req, res) {
  const articleId = req.params.id;
  try {
    const response = await _deleteArticle(articleId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
}

module.exports = {
  createArticle,
  getArticleBySection,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle,
};
