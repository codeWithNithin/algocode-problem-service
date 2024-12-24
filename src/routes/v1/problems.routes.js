const express = require('express')
const { ProblemController } = require('../../controllers')
const problemRouter = express.Router()

problemRouter.get('/ping', ProblemController.pingCtrl)

// /api/v1/problems/:id
problemRouter.get('/:id', ProblemController.getProblem)
// /api/v1/problems
problemRouter.get('/', ProblemController.getProblems)
// /api/v1/problems/:id
problemRouter.post('/', ProblemController.addProblem)
// /api/v1/problems/:id
problemRouter.put('/:id', ProblemController.updateProblem)
// /api/v1/problems/:id
problemRouter.delete('/:id', ProblemController.deleteProblem)

module.exports = problemRouter