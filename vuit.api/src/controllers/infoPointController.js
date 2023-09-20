const {
  _createInfoPoint,
  _getAllInfoPoints,
  _getInfoPointById,
  _updateInfoPoint,
} = require("../services/infoPointServices");

const createInfoPoint = async (req, res) => {
  const { body, title } = req.body;
  try {
    const response = await _createInfoPoint(body, title);
    res.status(201).json(response);
  } catch (error) {
    res.status(400).json(error.Message);
  }
};

const getAllInfoPoints = async (req, res) => {
  try {
    const response = await _getAllInfoPoints();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getInfoPointById = async (req, res) => {
  const infoPointId = req.params.id;
  try {
    const response = await _getInfoPointById(infoPointId);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateInfoPoint = async (req, res) => {
  const infoPointId = req.params.id;
  try {
    const response = await _updateInfoPoint(infoPointId, req.body);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteInfoPoint = async (req, res) => {
  const infoPointId = req.params.id;
  try {
    _deleteInfoPoint(infoPointId);
    res.status(204).send();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createInfoPoint,
  getAllInfoPoints,
  getInfoPointById,
  updateInfoPoint,
  deleteInfoPoint,
};
