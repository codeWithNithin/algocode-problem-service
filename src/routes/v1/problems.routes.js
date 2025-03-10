const express = require('express')
const { problemController } = require('../../controllers')
const problemRouter = express.Router()

//GET /api/v1/problems/:id
problemRouter.get('/:id', problemController.getProblem)

//GET /api/v1/problems
problemRouter.get('/', problemController.getProblems)

//POST /api/v1/problems
problemRouter.post('/', problemController.addProblem)

//UPDATE /api/v1/problems/:id
problemRouter.put('/:id', problemController.updateProblem)

//DEL /api/v1/problems/:id
problemRouter.delete('/:id', problemController.deleteProblem)

module.exports = problemRouter