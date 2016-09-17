var gulp = require('gulp');  // 引入gulp


// 复制文件
gulp.task('copy-index', function () {
  // src是源 pipe相当于一个管道 这里是把找到的index.html源放到管道里去处理 dest是目的地
  return gulp.src('index.html').pipe(gulp.dest('dist'));
});

// 复制图片
gulp.task('images', function () {
  // 多级目录
  return gulp.src('images/**/*').pipe(gulp.dest('dist/images'));
});

// 多个globs
gulp.task('data', function () {
  return gulp.src(['xml/*.xml', 'json/*.json']).pipe(gulp.dest('dist/data'));
});
