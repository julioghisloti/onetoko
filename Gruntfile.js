module.exports = function(grunt) {
'use strict';
 
  // configuração do projeto
  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),
    min: {
      dist: {
        src: ['lib/js/main.js'],
        dest: 'lib/js/all.min.js'
      }
    },
    cssmin: {
      dist: {
      src: ['lib/style/base.css'],
      dest: 'lib/style/base.min.css'
    }
  },
  jshint: {
    all: ['lib/js/*.js']
    }
  };
   
  grunt.initConfig(gruntConfig);
   
  // carregando plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
   
  // tarefas
  grunt.registerTask('default', ['jshint']);

};