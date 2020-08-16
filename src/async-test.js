// 文件：async-test.js
const app = require("./app");

// 异步函数
function fn() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
      console.log("hello");
    }, 3000);
  });
}

app.use(async next => {
  console.log(1);
  await next();
  console.log(2);
});

app.use(async next => {
  console.log(3);
  await fn(); // 调用异步函数
  await next();
  console.log(4);
});

app.use(async next => {
  console.log(5);
  await next();
  console.log(6);
});

app.compose();
