'use strict';

module.exports = function(app) {
  var controller = require('../controllers/MyController');

  // MyController Routes
  app.route('/api')
    .get(controller.list);
};
