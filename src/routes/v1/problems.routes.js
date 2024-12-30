const express = require('express')
const { problemController } = require('../../controllers')
const problemRouter = express.Router()

// /api/v1/problems/:id
problemRouter.get('/:id', problemController.getProblem)
// /api/v1/problems
problemRouter.get('/', problemController.getProblems)
// /api/v1/problems/:id
problemRouter.post('/', problemController.addProblem)
// /api/v1/problems/:id
problemRouter.put('/:id', problemController.updateProblem)
// /api/v1/problems/:id
problemRouter.delete('/:id', problemController.deleteProblem)

module.exports = problemRouter