const InfoPointModel = require("../models/infoPoint");

async function _createInfoPoint(body, title) {
  const newInfoPoint = new InfoPointModel({ body, title });

  const savedInfoPoint = await newInfoPoint.save();
  return savedInfoPoint;
}

async function _getAllInfoPoints() {
  const infoPoints = await InfoPointModel.find();
  return infoPoints;
}

async function _getInfoPointById(infoPointId) {
  const infoPoint = await InfoPointModel.findById(infoPointId);
  if (!infoPoint) {
    throw new Error("InfoPoint not found");
  }
  return infoPoint;
}

async function _updateInfoPoint(infoPointId, model) {
  const updatedInfoPoint = await InfoPointModel.findByIdAndUpdate(
    infoPointId,
    model,
    { new: true }
  );
  if (!updatedInfoPoint) {
    throw new Error("InfoPoint not found");
  }
  return updatedInfoPoint;
}

async function _deleteInfoPoint(req, res) {
  const deletedInfoPoint = await InfoPointModel.findByIdAndRemove(
    req.params.id
  );
  if (!deletedInfoPoint) {
    throw new Error("InfoPoint not found");
  }
  res.status(204).send();
}

module.exports = {
  _createInfoPoint,
  _getAllInfoPoints,
  _getInfoPointById,
  _updateInfoPoint,
  _deleteInfoPoint,
};
