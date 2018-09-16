var express = require('express');
var router = express.Router();
var jsonData= require("../csvToJsonFile.json");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/:key', function(req, res, next) {
  var json={};
  var key=req.params.key;
  if(jsonData[key]){
    json["key"]=key;
    json["value"]=jsonData[key];
  }
  res.status(200);
  res.send(json);
});

module.exports = router;
