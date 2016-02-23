var BaseController = function() {
  var self = this;

  self.name = "BaseController";

  function getWelcome(){
    return "Bem vindo ao module " + self.name + " !";
  }

}

module.exports =  BaseController;
