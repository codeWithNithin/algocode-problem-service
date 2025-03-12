const { StatusCodes } = require('http-status-codes')
const NotImplementedError = require('../errors/NotImplemented.error')
const { ProblemService } = require('../services')
const { ProblemRepository } = require('../repositories');


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

async function getProblem(req, res, next) {
  try {
    console.log('problem id in controller', req.params.id)
    const problem = await problemService.getProblem(req.params.id);
    res.status(StatusCodes.OK).json({
      status: true,
      message: 'Successfully fetched a problem',
      error: {},
      data: problem
    })
  } catch (err) {
    next(err)
  }
}

async function getProblems(req, res, next) {
  try {
    const problems = await problemService.getProblems();
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully fetched all the problems',
      error: {},
      data: problems
    })
  } catch (err) {
    next(err)
  }
}

async function updateProblem(req, res, next) {
  try {
    const data = {
      id: req.params.id,
      body: req.body
    }
    const problem = await problemService.updateProblem(data);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully updated a problem',
      err: {},
      data: problem
    })
  } catch (err) {
    next(err)
  }
}

async function deleteProblem(req, res, next) {
  try {
    // throw new NotImplementedError('deleteProblem')
    const problem = await problemService.deleteProblem(req.params.id);
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Successfully deleted a problem',
      err: {},
      data: problem
    })
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