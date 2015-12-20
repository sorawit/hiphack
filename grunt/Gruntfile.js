module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    compass: {
      dist: {
        options: {
          sassDir: '../app/assets/sass',
          cssDir: '../app/static/css'
        }
      }
    },
    browserify: {
      dev: {
        options: {
          debug: true,
          transform: ['reactify']
        },
        files: {
          '../app/static/js/app.js': '../app/assets/ui/main.js'
        }
      },
      build: {
        options: {
          debug: false,
          transform: ['reactify']
        },
        files: {
          '../app/static/js/app.js': '../app/assets/ui/main.js'
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      js_vendor: {
        src: [
          '../app/assets/ui/vendor/jquery.min.js',
          '../app/assets/ui/vendor/moment.min.js',
          '../app/assets/ui/vendor/jquery.dataTables.min.js',
          '../app/assets/ui/vendor/fullcalendar.min.js',
          '../app/assets/ui/vendor/fullcalendar.lang.th.js',
          '../app/assets/ui/vendor/perfect-scrollbar.jquery.min.js',
        ],
        dest: '../app/static/js/vendor.js',
      },
    },
    shell: {
        ui: {
            command: 'cd ../app/assets/ui && npm install'
        },
    },
    watch: {
      options: {
        livereload: true,
      },
      css: {
        files: '../app/assets/sass/**/*.scss',
        tasks: ['compass']
      },
      browserify: {
        files: ['../app/assets/ui/company/**/*.js',
                '../app/assets/ui/candidate/**/*.js',
                '../app/assets/ui/translation/**/*.js'],
        tasks: ['browserify:dev']
      },
      js_vendor: {
        files: ['../app/assets/ui/vendor/**/*.js'],
        tasks: ['concat:js_vendor']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.registerTask('default', ['shell', 'compass', 'browserify', 'concat']);
  grunt.registerTask('assets', ['compass', 'browserify', 'concat']);
};
