var gulp       = require('gulp'), // Подключаем Gulp
	
	imagemin     = require('gulp-imagemin'), // Подключаем библиотеку для работы с изображениями
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	pngquant     = require('imagemin-pngquant'); // Подключаем библиотеку для работы с png
	



gulp.task('img', function() {
	return gulp.src('app/img/**/*') // Берем все изображения из app
		.pipe(cache(imagemin({  // Сжимаем их с наилучшими настройками с учетом кеширования
			interlaced: true,
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		})))
		.pipe(gulp.dest('dist/img')); // Выгружаем на продакшен
});

