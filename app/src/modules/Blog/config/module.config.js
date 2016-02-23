var Config = function (app) {
  var self = this;

  self.app = app;
  self.module = "Blog";

  self.getModuleName = getModuleName;
  self.getControllers = getControllers;
  self.getServices = getServices;
  self.getFilters = getFilters;
  self.getDirectives = getDirectives;

  function getModuleName () {
    return self.app + "." +self.module;
  }

  function getControllers() {
    return self.app + "." + self.module + '.Controllers';
  }

  function getServices() {
    return self.app + "." + self.module + '.Services';
  }

  function getFilters() {
    return self.app + "." + self.module + '.Filters';
  }

  function getDirectives() {
    return self.app + "." + self.module + '.Directives';
  }

}

module.exports = Config;
