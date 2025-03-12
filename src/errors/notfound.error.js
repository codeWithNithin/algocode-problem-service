const { StatusCodes } = require("http-status-codes");
const BaseError = require("./base.error");

class NotFoundError extends BaseError {
  constructor(resourceName, resourceValue) {
    super('NotFound', StatusCodes.NOT_FOUND, `The request resource: ${resourceName} with value ${resourceValue} not found`, {
      resourceName,
      resourceValue
    });
  }
}

module.exports = NotFoundError;