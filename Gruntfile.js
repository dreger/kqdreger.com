
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            jekyllBuild: {
                command: 'jekyll build'
            },
            jekyllServe: {
                command: 'jekyll serve'
            }
        },

        // Sass
        sass: {
          dist: {
            options: {
              compass: true
            },
            files: {
              '_src/public/css/master.css' : '_src/public/scss/master.scss'
            }
          }
        },

        watch: {
            files: [
                '_src/_includes/*.html',
                '_src/_layouts/*.html',
                '_src/_posts/*.md',
                '_src/_config.yml',
                '_src/index.html',
                '_src/public/scss/**/*'
            ],

            tasks: ['sass', 'shell:jekyllBuild'],
            options: {
                interrupt: true,
                atBegin: true,
                livereload: true,
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['grunt-contrib-sass', 'grunt-contrib-watch', 'shell']);
};