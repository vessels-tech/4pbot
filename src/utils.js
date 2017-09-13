

export const getError = (statusCode, message) => {
  let error = new Error(message);
  error.status = statusCode;

  return error;
}
