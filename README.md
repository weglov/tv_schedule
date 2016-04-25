**Решение**
-----------

**GitHub Pages:** http://weglov.github.io/tvtask/

Ознакомившись с существующими популярными телепрограммами (tv.yandex.ru, tv.mail.ru), я решил создать не как у всех. К дизайну своего приложения я решил подойти со стороны удобства на мобильных и смарт-тв девайсах, именно поэтому мое UI выглядит так, а не иначе.

![mobile media](http://weglov.github.io/tvtask/mobile.gif)

В решении данной задачи я ставил цель не использовать Java Script вообще, а пользоваться лишь магией CSS. Благодаря селекторам ~ и +, мне частично удалось это сделать. Но в ходе работы я понял, что структура мне важнее и поэтому фильтрацию и прямой эфир, я сделал с использованием Java Script.

Одной из важнейших частей моего приложения является сборка gulp и шаблонизатор jade, именно он сэмулировал некий бэкенд отдающий страницы телеканалов, как это примерно могло быть при реальных событиях, разве что страницы генерировались бы на сервере или клиенте.

Как работает: есть jade скелет куда параметрами передается data.json с расписанием на предыдущую неделю:
```javascript
// gulpfile.js
var config = require('./dev/data/data.json'); 
// Генерируем Jade в поток locals помещаем наши данные
gulp.task('files', function() {
	return gulp.src('dev/**/*.jade')
			.pipe($.jade({
				pretty: true,
				locals: config 
			}))
			.pipe($.newer('public'))
			.pipe(gulp.dest('public'));
});

```


В gulp я использовал плагины:

* browser-sync - для livereload для всего
* gulp-autoprefixer - автопрефиксы
* gulp-csso - лучший минимизатор
* gulp-data - работа с данными
* gulp-eslint - js linter
* gulp-imagemin - Сжимаем изображения
* gulp-jade - Шаблонизатор
* gulp-load-plugins 
* gulp-newer - Для оптимизации работы gulp (отказываемся от лишней сборки)
* gulp-notify - PUSH в систему об ошибках работает вместе с gulp-debug
* gulp-sass - SASS привык к нему
* gulp-size - Смотрю что на выходе сколько весит 
* gulp-sourcemaps - Отладка css

Эти плагины упрощают мне работу каждый день. 


1 задача |||       [2 задача](https://github.com/weglov/group-task)      |||    [3 задача](https://github.com/weglov/ya3)
