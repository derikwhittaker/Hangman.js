const gulp = require('gulp');
const jshint = require('gulp-jshint');
const stylish = require('jshint-stylish');
const gutil = require('gulp-util');
const jasmine = require('gulp-jasmine');
const specReporter = require('jasmine-spec-reporter').SpecReporter;

gulp.task('compile', ['lint'], function() {
    
});

gulp.task('lint', function() {
  return gulp.src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('test', () =>
    gulp.src('./src/specs/**/*.js')
        // gulp-jasmine works on filepaths so you can't have any plugins before it 
        .pipe(jasmine({
          reporter: new specReporter({  
                                      spec: {
                                        displayPending: true
                                      }
                                    })
        }))
);