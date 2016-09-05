var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Article = mongoose.model('Article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'nodeBlog Home',
      pretty: true
    });
  });
});

router.get('/connect', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'nodeBlog contain',
      pretty: true
    });
  });
});

router.get('/about', function (req, res, next) {
  Article.find(function (err, articles) {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'nodeBlog about',
      pretty: true
    });
  });
});
