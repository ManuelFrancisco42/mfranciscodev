
import gulp from 'gulp';
import sass from 'gulp-sass';
import * as nodeSass from 'sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import sourcemaps from 'gulp-sourcemaps';
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import terser from 'gulp-terser';

// Initialize gulp-sass with node-sass
const sassCompiler = sass(nodeSass);

// Paths to various files
const paths = {
  styles: {
    src: 'src/**/*.scss',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/**/*.js',
    dest: 'dist/js/'
  },
  images: {
    src: 'src/assets/images/**/*.{jpg,jpeg,png,gif,svg,webp}',
    dest: 'dist/images/'
  }
};

// Compile SCSS into CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(sassCompiler().on('error', sassCompiler.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Transpile and Minify JavaScript
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['@babel/preset-env', '@babel/preset-react']
    }))
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
export { styles, scripts, images, watch, build };
export default dev;
