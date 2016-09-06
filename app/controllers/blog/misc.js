var express = require('express'),
  router = express.Router();

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  res.redirect('/posts') //默认跳转到文章首页列表
});

router.get('/connect', function (req, res, next) {
  res.render('blog/index', {
      title: 'nodeBlog contain',
      posts:posts,
      pretty: true
  });
});

router.get('/about', function (req, res, next) {
  res.render('blog/index', {
      title: 'nodeBlog about',
      posts:posts,
      pretty: true
  });
});
