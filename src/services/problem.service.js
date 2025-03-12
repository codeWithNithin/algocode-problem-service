const sanitizeMarkdownContent = require("../utils/markdownSanitizer");

class ProblemService {
  constructor(problemRepository) {
    this.problemRepository = problemRepository;
  }

  async createProblem(problemData) {
    try {
      //  1. sanitize the markdown for description
      problemData.description = sanitizeMarkdownContent(problemData.description);
      console.log(`problemData`, problemData)
      const problem = await this.problemRepository.createProblem(problemData)
      console.log('problem created', problem)
      return problem;
    } catch (err) {
      throw err;
    }
  }

  async getProblems() {
    const problems = await this.problemRepository.getProblems();
    return problems;
  }

  async getProblem(problemId) {
    console.log('problem id in service', problemId)
    const problems = await this.problemRepository.getProblem(problemId);
    return problems;
  }
}

module.exports = ProblemService;