const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const terser = require('gulp-terser');

// Paths to various files
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'src/css'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'src/js'
  },
  images: {
    // src: 'src/images/**/*',
    src: 'src/assets/images/**/*',
    dest: 'src/images'
  }
};

// Compile SCSS into CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Minify JavaScript
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest));
}

// Optimize images
function images() {
  return gulp.src(paths.images.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dest));
}

// Watch files for changes
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.images.src, images);
}

// Define complex tasks
const build = gulp.series(gulp.parallel(styles, scripts, images));
const dev = gulp.series(build, watch);

// Export tasks
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.default = dev;
