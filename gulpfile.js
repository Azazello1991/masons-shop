const { src, dest, watch, parallel, series } = require('gulp');
const scss   = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const clean = require('gulp-clean');
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const svgSprite = require('gulp-svg-sprite');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const include = require('gulp-include');
const lightgallery = require('lightgallery');
const starryRating = require('starry-rating');



function pages() {
   return src('app/pages/*.html')
      .pipe(include({
         includePaths: 'app/components'
      }))
      .pipe(dest('app'))
      .pipe(browserSync.stream())
}

function fonts() {
   return src('app/fonts/src/*.*')
      .pipe(fonter({
         formats: ['woff', 'ttf']
      }))
      .pipe(src('app/fonts/*.ttf'))
      .pipe(ttf2woff2())
      .pipe(dest('app/fonts'))
}

function images() {
   return src(['app/images/src/*.*', '!app/images/src/*.svg'])
      .pipe(newer('app/images'))
      .pipe(avif({ quality : 50 }))
      
      .pipe(src('app/images/src/*.*'))
      .pipe(newer('app/images'))
      .pipe(webp())
      
      .pipe(src('app/images/src/*.*'))
      .pipe(newer('app/images'))
      .pipe(imagemin())

      .pipe(dest('app/images'))
}

function sprite() {
   return src('app/images/icon/*.svg')
      .pipe(svgSprite({
         mode: {
            stack: {
               sprite: '../sprite.svg',
               example: true
            }
         }
      }))
   .pipe(dest('app/images'))
}

function scripts() {
   return src([ // Добавляем нужные файлы для конкатинации
      'app/js/jquery.js',
      './node_modules/swiper/swiper-bundle.js',
      './node_modules/starry-rating/dist/starry.min.js',
      'app/js/lightgallery.min.js',
      './node_modules/lightgallery/plugins/pager/lg-pager.min.js',
      './node_modules/lightgallery/plugins/video/lg-video.min.js',
      'app/js/mixitup.js',
      'app/js/main.js',
   ]) // получаем файл style.scss (может быть несколько)
   .pipe(concat('main.min.js')) // Соберет указаные файли и вложит в один что в скобках
   .pipe(uglify()) // через константу uglify(в которой припроцессор) пропускаем наш файл
   .pipe(dest('app/js')) // скомпилированый файл отправляем в app/js
   .pipe(browserSync.stream())
}

function styles() {
   return src('app/scss/style.scss') // получаем файл style.scss (может быть несколько)
   .pipe(autoprefixer({overrideBrowserslist:['last 10 version']}))
   .pipe(concat('style.min.css')) // Соберет указаные файли и вложит в один что в скобках
   .pipe(scss({outputStyle: 'compressed'})) // через константу scss(в которой припроцессор) пропускаем наш файл
   .pipe(dest('app/css')) // скомпилированый файл отправляем в app/css
   .pipe(browserSync.stream())
}

function watching() {
   browserSync.init({
      server: {
         baseDir: "app/"
      }
   });
   watch(['app/scss/**/*.scss'], styles) // наблюдаем за изменениями в файле style.scss, и если есть изменения, то запускаем функцию styles
   watch(['app/images/src'], images) // наблюдаем за изменениями в файле style.scss, и если есть изменения, то запускаем функцию styles
   watch(['app/js/main.js'], scripts) // наблюдаем за изменениями в файле main.js, и если есть изменения, то запускаем функцию scripts
   watch(['app/components/**/*.html','app/pages/*'], pages) // наблюдаем за изменениями в файле main.js, и если есть изменения, то запускаем функцию scripts
   watch(['app/**/*.html']).on('change', browserSync.reload) // наблюдаем за изменениями у ВСЕХ файлах html (*.html) у всех папках app/**/*.html
}

function building() {
   return src([
      'app/css/style.min.css',
      'app/images/*.*',
      '!app/images/*.svg',
      'app/images/sprite.svg',
      'app/fonts/*.*',
      'app/js/main.min.js',
      'app/**/*.html'
   ], { base: 'app' }) // {base: 'app'} сохраняет структуру папок как у app
   .pipe(dest('dist'))
}

function cleanDist() {
   return src('dist')
   .pipe(clean())
}






exports.styles = styles; // Экспортируем нашу функцию для возможности запустка через консоль
exports.fonts = fonts; // Экспортируем нашу функцию для возможности запустка через консоль
exports.images = images; // Экспортируем нашу функцию для возможности запустка через консоль
exports.sprite = sprite; // Экспортируем нашу функцию для возможности запустка через консоль
exports.scripts = scripts; // Экспортируем нашу функцию для возможности запустка через консоль
exports.watching = watching; // Экспортируем нашу функцию для возможности запустка через консоль
exports.building = building; // Экспортируем нашу функцию для возможности запустка через консоль
exports.pages = pages; // Экспортируем нашу функцию для возможности запустка через консоль

exports.build = series(cleanDist, building); // Запускаем по очереди
exports.default = parallel(styles, images, scripts, pages, watching); // будет запускатся по дефолту при запуске gulp паралельно








