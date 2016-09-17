var gulp = require('gulp');  // 引入gulp

// 创建一个任务 两个参数 任务名 任务方法
gulp.task(
  'hello',
  function () {
    console.log('你好！')；
  }
);
