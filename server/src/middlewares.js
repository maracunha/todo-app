const errorTypes = {
  validationError: 422,
  uniqueViolationError: 409,
};

const errorMessages = {
  uniqueViolationError: 'Already exist',
};

function notFound(req, res, next) {
  const error = new Error(`Not found - ${req.originalURL}`);
  res.status(404);
  next(error);
}

function errorHandler(error, req, res, next) {
  const statusCode = res.statusCode === 200 ? errorTypes[error.name] || 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    status: statusCode,
    message: errorMessages[error.name] || error.message,
    stack: process.env.NODE_ENV === 'production' ? 'prod' : error.stack,
    errors: error.errors || undefined,
  });
}

module.exports = {
  notFound,
  errorHandler,
};
