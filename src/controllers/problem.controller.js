const {StatusCodes} = require('http-status-codes')

function pingCtrl(req, res) {
return res.json({msg: 'ping ctrl is up'})
}

function addProblem(req, res) {
return res.status(StatusCodes.NOT_IMPLEMENTED).json({message: 'Not Implemented !!!'})
}

function getProblem(req, res) {
  return res.status(501).json({message: 'Not Implemented !!!'})
}

function getProblems(req, res) {
  return res.status(501).json({message: 'Not Implemented !!!'})
}

function deleteProblem(req, res) {
  return res.status(501).json({message: 'Not Implemented !!!'})
}

function updateProblem(req, res) {
  return res.status(501).json({message: 'Not Implemented !!!'})
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
  pingCtrl
}