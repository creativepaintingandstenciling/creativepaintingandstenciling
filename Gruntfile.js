module.exports = function(grunt) {
// Load Grunt tasks declared in the package.json file
require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

//example taken from: http://thecrumb.com/2014/03/15/using-grunt-for-live-reload/
grunt.initConfig({
    
    //https://github.com/gruntjs/grunt-contrib-connect
    connect: {
        server: {
          options: {
            port: 3000,
            base: 'app',
            // Change this to '0.0.0.0' to access the server from outside.
            hostname: 'localhost',
            livereload: true,
            open: true
          }
        }
    },

    //https://github.com/gruntjs/grunt-contrib-cssmin
    cssmin: {
      combine: {
        files: {
          'app/css/style.min.css': ['app/css/bootstrap.override.css', 'app/css/style.css']
        }
      }
    },

    //combine files like this: 'assets/js/output.js': ['js/input.js', 'js/input2.js']
    // uglify: {
    //     scriptz: {
    //       files: {
    //         'assets/js/main.js': 'js/main.js'
    //       }
    //     }
    // },
    
    // https://github.com/gruntjs/grunt-contrib-watch
    watch: {
        all: {
                files: ['app/views/*.html', 'app/css/*.css', 'app/js/*.js'],
                tasks: ['cssmin'],
                options: {
                    livereload: true
            }
        }
    }

    });

    grunt.registerTask('build', ['cssmin']);
    grunt.registerTask('default', ['build', 'connect', 'watch']);

};
    
   
    