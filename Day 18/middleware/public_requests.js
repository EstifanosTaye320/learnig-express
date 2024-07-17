function check_requests(req, res, next) {
  console.log("Request Made");
  console.log(req.path);
  next();
}

module.exports = check_requests;
