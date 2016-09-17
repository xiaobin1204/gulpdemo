var gulp = require('gulp');  // 引入gulp


// 复制文件
gulp.task('copy-index', function () {
  // src是源 pipe相当于一个管道 这里是把找到的index.html源放到管道里去处理 dest是目的地
  return gulp.src('index.html').pipe(gulp.dest('dist'));
});

// 复制图片
gulp.task('images', function () {
  return gulp.src('images/*.{png,jpg}').pipe(gulp.dest('dist/images'));
});
