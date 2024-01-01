require("dotenv").config();

var express = require("express");
var cors = require("cors");
var app = express();
var client_id = process.env.NAVER_KEY;
var client_secret = process.env.NAVER_SECRET;

app.use(cors());

app.get("/search/shop", function (req, res) {
  var api_url =
    "https://openapi.naver.com/v1/search/shop?query=" +
    encodeURI(req.query.query); // JSON 결과
  var request = require("request");
  var options = {
    url: api_url,
    headers: {
      "X-Naver-Client-Id": client_id,
      "X-Naver-Client-Secret": client_secret,
    },
  };
  request.get(options, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.writeHead(200, { "Content-Type": "text/json;charset=utf-8" });
      res.end(body);
    } else {
      res.status(response.statusCode).end();
      console.log("error = " + response.statusCode);
    }
  });
});
app.listen(3000, function () {
  console.log(
    "http://127.0.0.1:3000/search/shop?query=검색어 app listening on port 3000!"
  );
});
