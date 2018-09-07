browserSync = require('browser-sync')
gulp        = require('gulp')
gutil       = require('gulp-util')
coffee      = require("gulp-coffee")
sass        = require('gulp-sass')
uglify      = require('gulp-uglify')
zip         = require('gulp-zip')
concat      = require('gulp-concat')
rename      = require('gulp-rename')

reload = browserSync.reload

html = (target) ->
  return () ->
    gulp.src(['html/index.html'])
      .pipe(gulp.dest(target))
    gulp.src(['node_modules/salet/lib/index.min.js'])
      .pipe(rename('salet.min.js'))
      .pipe(gulp.dest(target+"/game"))

# Images
img = (target) ->
  return () ->
    return gulp.src(['img/*.png', 'img/*.jpeg', 'img/*.jpg']).pipe(gulp.dest(target))

# Audio assets
audio = (target) ->
  return () ->
    return gulp.src(['audio/*.mp3']).pipe(gulp.dest(target))

gulp.task('html', html('./build'))
gulp.task('img', img('./build/img'))
gulp.task('audio', audio('./build/audio'))

# SCSS styles
gulp.task('sass', () ->
  gulp.src('sass/main.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
)

gulp.task('concatCoffee', () ->
  gulp.src([
    ## additional functions
    './game/dialogue.coffee',
    './game/phrase.coffee',
    ## the actual game
    './game/begin.coffee',
    './game/story.coffee',
  ]).pipe(concat('./main.coffee'))
    .pipe(gulp.dest('./build/game'))
)

gulp.task('coffee', ['concatCoffee'], () ->
  gulp.src('./build/game/main.coffee')
    .pipe(coffee({bare: true}))
    .pipe(gulp.dest('./build/game/'))
)

gulp.task('build', ['html', 'img', 'sass', 'coffee', 'audio'])

gulp.task('serve', ['build'], () ->
  browserSync({
    server: {
      baseDir: 'build'
    }
  })

  sassListener = () ->
    reload('./build/css/main.css')

  gulp.watch(['./html/*.html'], ['html'])
  gulp.watch(['./sass/*.scss'], ['sass'])
  gulp.watch(['./img/*.png', './img/*.jpeg', './img/*.jpg'], ['img'])
  gulp.watch(['./game/*.coffee'], ['coffee']);

  gulp.watch(['./build/css/main.css'], sassListener)
  gulp.watch(
    ['./build/game/bundle.js', './build/img/*', './build/index.html'],
    browserSync.reload)
)

gulp.task('html-dist', html('./dist'))
gulp.task('img-dist', img('./dist/img'))
gulp.task('audio-dist', audio('./dist/audio'))
gulp.task('legal-dist', () ->
  return gulp.src(['LICENSE.txt'])
         .pipe(gulp.dest("./dist"))
)

gulp.task('sass-dist', () ->
  return gulp.src('./sass/main.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./dist/css'))
)

gulp.task('coffee-dist', ['concatCoffee'], () ->
  gulp.src('./build/game/main.coffee', {sourcemaps: false})
    .pipe(coffee())
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(gulp.dest('./dist/game/'))
)

gulp.task('dist', [
  'html-dist',
  'img-dist',
  'sass-dist',
  'coffee-dist',
  'audio-dist',
  'legal-dist'
])

gulp.task('zip', ['dist'], () ->
  return gulp.src('dist/**')
    .pipe(zip('dist.zip'))
    .pipe(gulp.dest('.'))
)
