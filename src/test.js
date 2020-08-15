const app = require('./app.js');
app.use(next => {
  console.log(1);
  next();
  console.log(2);
});

app.use(next => {
  console.log(3);
  next();
  console.log(4);
});

app.use(next => {
  console.log(5);
  next();
  console.log(6);
});
console.log('app: ', app);

app.compose();
