/**
 * Deferred對象
 *
 * @产生的缘由  JS开发遇到某些很耗时的操作
 * @目的 jQuery回调函数解决方案，解决处理耗时的问题
 */
$(function () {

  /**
   * ajax 链式操作
   */
  // $.ajax({
  //   url: 'test.html',
  //   success: function () {
  //     console.log('哈哈，成功了！');
  //   },
  //   error: function () {
  //     console.log('ajax error!');
  //   }
  // });

  /**
   * jQuery version > 1.5.0
   */
  // $.ajax('test.html')
  //   .done(function () {
  //     console.log('哈哈，成功了！new function');
  //   })
  //   .fail(function () {
  //     console.log('ajax error');
  //   });

  // 指定同一操作的多个回调函数
  // $.ajax('test.html')
  //   .done(function () {
  //     console.log('哈哈，成功了！new function')
  //   })
  //   .fail(function () {
  //     console.log('error')
  //   })
  //   .done(function () {
  //     console.log('哈哈，成功了！new function 2')
  //   });

  // 类似于事务的操作，如果前两者都成功则执行done方法
  // $.when($.ajax('test.html'), $.ajax('test2.html'))
  //   .done(function () {
  //     console.log('success done');
  //   })
  //   .fail(function () {
  //     console.log('error');
  //   });

  // var dtd = $.Deferred();

  // 让wait耗时操作的方法返回deferred对象
  // var wait = function (dtd) {
  //   var tasks = function () {
  //     console.log('task done!');
  //   };

  //   setTimeout(tasks, 5000);
  //   return dtd;
  // };

  // $.when(wait(dtd))
  //   .done(function () {
  //     console.log('success done!');
  //   })
  //   .fail(function () {
  //     console.log('error');
  //   });

  // dtd.resolve();
  // 以上动作先操作done函数，然后5000毫秒后 task done

  // 定义一个耗时操作函数
  // var wait = function () {
  //   var dtd = $.Deferred();
  //   var tasks = function () {
  //     console.log('task done!');

  //     // change the deferred status
  //     dtd.resolve();
  //   };

  //   setTimeout(tasks, 5000);
  //   return dtd.promise();
  // };

  // $.when(wait())
  //   .done(function () {
  //     console.log('success done!');
  //   })
  //   .fail(function () {
  //     console.log('error!');
  //   });
  //
  $.when($.ajax('test2.html'))
    .then(function () {
      console.log('success!');
    }, function () {
      console.log('error!');
    });

  $.when($.ajax('test2.html'))
    .always(function () {
      console.log('all are done!');
    });
  // var wait = function () {
  //   var tasks = function () {
  //     console.log('done!');
  //   };

  //   setTimeout(tasks, 5000);
  // }

  // $.when(wait())
  //   .done(function () {
  //     console.log('success!');
  //   })
  //   .fail(function () {
  //     console.log('fail!');
  //   });
});
