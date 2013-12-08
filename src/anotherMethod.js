module.exports = function (defaults) {
  return function anotherMethod() {
    console.log("Another method fired");
    console.log(defaults.overrideable);
  };
}