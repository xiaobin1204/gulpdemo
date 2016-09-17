var gulp = require('gulp');  // 引入gulp
var sass = require('gulp-sass');  // 引入gulp-sass插件
var less = require('gulp-less');  // 引入gulp-less插件
var connect = require('gulp-connect');  // 引入gulp-connect插件
var concat = require('gulp-concat');  // 引入gulp-concat插件
var uglify = require('gulp-uglify');  // 引入gulp-uglify插件

// 合并文件
gulp.task('scripts', function () {
  return gulp.src(['javascript/jquery.js', 'javascript/modernizr.js'])
         .pipe(concat('vendor.js')) // 合并后文件的名字
         .pipe(uglify()) // 压缩合并后的js
         .pipe(gulp.dest('dist/js'));
});



gulp.task('server', function () {
  connect.server({
    root: 'dist',
    livereload: true //开启实时刷新
  });
});

// 复制文件
gulp.task('copy-index', function () {
  // src是源 pipe相当于一个管道 这里是把找到的index.html源放到管道里去处理 dest是目的地
  return gulp.src('index.html')
  .pipe(gulp.dest('dist'))
  .pipe(connect.reload()); // 刷新一下浏览器
});

// 复制图片
gulp.task('images', function () {
  // 多级目录
  return gulp.src('images/**/*').pipe(gulp.dest('dist/images'));
});

// 多个globs 排除的文件
gulp.task('data', function () {
  return gulp.src(['xml/*.xml', 'json/*.json', '!json/secret-*.json'])
         .pipe(gulp.dest('dist/data'));
});

// 主任务
gulp.task('build', ['copy-index', 'images', 'data'], function () {
  console.log('编译完成');
});

// 文件变化执行任务
gulp.task('watch', function () {
  gulp.watch('index.html', ['copy-index']);
  gulp.watch('images/**/*.{jpg,png}', ['images']);
  gulp.watch(['xml/*.xml', 'json/*.json', '!json/secret-*.json'], ['data']);
});

gulp.task('sass', function () {
  return gulp.src('stylesheets/**/*.scss')
         .pipe(sass())
         .pipe(gulp.dest('dist/css'));
});

gulp.task('less', function () {
  return gulp.src('stylesheets/**/*.less')
         .pipe(less())
         .pipe(gulp.dest('dist/css2'));
});

gulp.task('default', ['server', 'watch']);
