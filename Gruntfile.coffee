
module.exports = (grunt) ->

  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'
    concat:
      dist:
        src: [
          'lib/template.js'
          'lib/datepicker_view.js'
        ]
        dest: 'dist/<%= pkg.name %>.js'
    uglify:
      dist:
        src: '<%= concat.dist.dest %>'
        dest: 'dist/<%= pkg.name %>.min.js'
    jade:
      compile:
        options:
          client: true
          compileDebug: false
          processName: (filename) ->
            'datepicker'
        files:
          'lib/template.js': 'src/datepicker.jade'
    coffee:
      compile:
        files:
          'lib/datepicker_view.js': 'src/*.coffee'
    clean: [
      'lib'
      'dist'
    ]

  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-jade'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-clean'

  grunt.registerTask 'default', [
    'clean'
    'jade'
    'coffee'
    'concat'
    'uglify'
  ]
