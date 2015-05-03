var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/professional', function(req, res, next) {
  res.render('professional', {});
});

router.get('/personal', function(req, res, next) {
  res.render('personal', {});
});

module.exports = router;
