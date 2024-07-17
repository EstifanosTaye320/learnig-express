function json(req, res, next) {
  let body = "";
  req.on("data", function (chuck) {
    body += chuck.toString();
  });
  req.on("end", function () {
    body = JSON.parse(body);
    req.body = body;
    next();
  });
}

module.exports = json;
