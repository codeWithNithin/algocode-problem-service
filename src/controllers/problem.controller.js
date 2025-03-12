const { StatusCodes } = require('http-status-codes')
const NotImplementedError = require('../errors/NotImplemented.error')
const { ProblemService } = require('../services')
const { ProblemRepository } = require('../repositories')


const problemService = new ProblemService(new ProblemRepository());

async function addProblem(req, res, next) {
  try {
    // throw new NotImplementedError('addProblem')
    console.log('incoming req body', req.body)
    const newProblem = await problemService.createProblem(req.body)
    return res.status(StatusCodes.CREATED).json({
      status: true,
      message: 'Succefully created a new problem',
      error: {},
      data: newProblem
    })
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