function fun1(callback) {
  callback();
}

function fun2(callback) {
  callback();
}

function fun3(callback) {
  callback();
}

function fun4(callback) {
  callback();
}

fun1(function () {
  fun2(function () {
    fun3(function () {
      fun4(function () {
        console.log(
          "this is the content of fun4 inside fun3 inside fun2 inside fun1"
        );
      });
    });
  });
});
