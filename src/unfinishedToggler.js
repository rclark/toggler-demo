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