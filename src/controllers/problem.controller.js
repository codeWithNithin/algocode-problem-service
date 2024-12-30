const { StatusCodes } = require('http-status-codes')
const NotImplementedError = require('../errors/NotImplemented.error')

function addProblem(req, res, next) {
  try {
    throw new NotImplementedError('addProblem')
  } catch (err) {
    next(err)
  }
}

function getProblem(req, res, next) {
  try {
    throw new NotImplementedError('getProblem')
  } catch (err) {
    next(err)
  }
}

function getProblems(req, res, next) {
  try {
    throw new NotImplementedError('getProblems')
  } catch (err) {
    next(err)
  }
}

function updateProblem(req, res, next) {
  try {
    throw new NotImplementedError('updateProblem')
  } catch (err) {
    next(err)
  }
}

function deleteProblem(req, res, next) {
  try {
    throw new NotImplementedError('deleteProblem')
  } catch (err) {
    next(err)
  }
}

module.exports = {
  addProblem,
  getProblem,
  getProblems,
  deleteProblem,
  updateProblem,
}