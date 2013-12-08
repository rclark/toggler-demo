module.exports = function (defaults) {
  return function oneMethod() {
    console.log('One Method fired');
    console.log(defaults.all);
  }
}