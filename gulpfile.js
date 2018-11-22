const browserify = require("browserify");
const reload = browserSync.reload;
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const autoprefixer = require('autoprefixer');

gulp.task('styles', () => {
    return gulp.src('./dev/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        // .pipe(autoprefixer())
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./public/styles'))
});

gulp.task('bs', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', ['bs', 'styles'], () => {
    gulp.watch('dev/**/*.scss', ['styles']);
    gulp.watch('./public/styles/style.css', reload);
    gulp.watch('./*.html', reload);
});