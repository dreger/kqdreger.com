
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        shell: {
            jekyllBuild: {
                command: 'rm -rf _site/*; jekyll build',
                stdout: true
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
              '_src/public/css/master.css' : '_src/public/scss/master.scss',
              '_src/public/css/test.css' : '_src/public/scss/test.scss'
            }
          }
        },

        watch: {
            files: [
                '_src/public/scss/**/*'
            ],
            tasks: ['sass', 'shell:jekyllBuild'],
            options: {
                interrupt: true,
                atBegin: true,
                livereload: true,
            }
        },



        watch: {
            files: [
                '_src/_posts/*.md',
                '_src/_includes/*.html',
                '_src/_layouts/*.html',
                '_src/_config.yml',
                '_src/index.html',
            ],
            tasks: ['shell:jekyllBuild'],
            options: {
                interrupt: false,
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