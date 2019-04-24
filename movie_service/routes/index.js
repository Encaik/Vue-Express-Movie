var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/showIndex', function (req, res, next) {
});
router.get('/showRanking', function (req, res, next) {
});
router.get('/showArticle', function (req, res, next) {
});
router.post('/articleDetail', function (req, res, next) {
});
router.post('/showUser', function (req, res, next) {
});
module.exports = router;
