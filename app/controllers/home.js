var express = require('express'),
  router = express.Router(),
  mongoose = require('mongoose'),
  Post = mongoose.model('Post');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  Post.find()
      .populate('author')
      .populate('category')
      .exec(function (err, posts) {
          if (err) return next(err);
          res.render('blog/index', {
            title: 'nodeBlog Home',
            posts: posts,
            pretty: true
          });
      });
});

router.get('/connect', function (req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'nodeBlog contain',
      posts:posts,
      pretty: true
    });
  });
});

router.get('/about', function (req, res, next) {
  Post.find(function (err, posts) {
    if (err) return next(err);
    res.render('blog/index', {
      title: 'nodeBlog about',
      posts:posts,
      pretty: true
    });
  });
});
