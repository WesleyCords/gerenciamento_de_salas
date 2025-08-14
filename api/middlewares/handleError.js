const handleError = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const status = err.status || "error";

  console.log(err);

  res.status(statusCode).json({
    status,
    message: err.message,
  });
};

export default handleError;
