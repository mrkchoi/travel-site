var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import');

gulp.task('default', function() {
    console.log("Hurrah, you created a gulp task!");
});

gulp.task('html', function() {
    console.log('imagine something useful being done to your HTML here');
});

gulp.task('styles', function() {
    return gulp.src('./assets/styles/style.css')
    .pipe(postcss([cssImport, nested, cssvars, autoprefixer]))
    .pipe(gulp.dest('./temp/styles'));
    
});

gulp.task('watch', function() {
    
    watch('./index.html', function() {
        gulp.start('html');
    });

    watch('./assets/styles/**/*.css', function() {
        gulp.start('styles');
    });
});


