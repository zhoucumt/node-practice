var curry = require('lodash').curry;

// var reduce = curry(function(f, ary) { return ary.reduce(f); });
var reduce = curry(function(f, init, arr) {
  return arr.reduce(f, init);
});

var compose = function(f,g) {
  return function(x) {
    return f(g(x));
  };
};

var head = function(x) {
  return x[0];
};
var reverse = reduce(function(acc, x){
  return [x].concat(acc);
} , []);
var last = compose(head, reverse);
var res = last(['jumpkick', 'roundhouse', 'uppercut']);
console.log(res);








// var compose = function(f, g) {
//   return function(x) {
//     return f(g(x));
//   };
// };

// var toUpperCase = function(x) {
//   return x.toUpperCase();
// };

// var exclaim = function(x) {
//   return x + '!';
// };

// var shout = compose(exclaim, toUpperCase);

// var res = shout('send in the clowns');
// console.log(res);
