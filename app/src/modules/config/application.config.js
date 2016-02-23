var ConfigApplication = function () {
  var self = this;
  self.name = "Codetython";

  self.getName = getName;

  function getName () {
    return self.name;
  }
}

module.exports = ConfigApplication;
