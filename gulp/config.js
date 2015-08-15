'use strict';

module.exports = {

  'serverport': 3000,

  'scripts': {
    'src': './app/js/**/*.js',
    'dest': './build/js/'
  },

  'images': {
    'src': './app/images/**/*.{jpeg,jpg,png}',
    'dest': './build/images/'
  },

  'styles': {
    'src': './bower_components/bootstrap/dist/css/**/*.css',
    'dest': './build/css/'
  },

  'sourceDir': './app/',

  'buildDir': './build/'

};
