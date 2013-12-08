;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function (defaults) {
  return function anotherMethod() {
    console.log("Another method fired");
    console.log(defaults.overrideable);
  };
}
},{}],2:[function(require,module,exports){
module.exports = function (defaults) {
  return function oneMethod() {
    console.log('One Method fired');
    console.log(defaults.all);
  }
}
},{}],3:[function(require,module,exports){
window.UnfinishedToggler = function (options) {
  var defaults = {
    all: "your",
    internal: "properties",
    overrideable: options && options.overrideable ? options.overrideable : "regular default"
  };

  return {
    oneMethod: require('./oneMethod')(defaults),
    anotherMethod: require('./anotherMethod')(defaults)
  };
};
},{"./anotherMethod":1,"./oneMethod":2}]},{},[3])
;