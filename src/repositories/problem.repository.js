const NotFoundError = require('../errors/notfound.error');
const { Problem } = require('../models')

class ProblemRepository {

  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        testCases: problemData.testCases ? problemData.testCases : []
      })
      return problem;
    } catch (err) {
      console.log(err);
      throw err
    }
  }

  async getProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (err) {
      throw err;
    }
  }

  async getProblem(id) {
    try {
      console.log('problem id in service', id)
      const problem = await Problem.findById(id);
      console.log('final result', problem)
      if (!problem) {
        throw new NotFoundError('Problem', id)
      }
      return problem;
    } catch (err) {
      console.log(err)

      throw err;
    }
  }

}

module.exports = ProblemRepository;