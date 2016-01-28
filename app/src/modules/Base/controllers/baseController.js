class BaseController {
  constructor(){
    this.name = "BaseController";
  }

  getWelcome(){
    return "Bem vindo ao module " + this.name + " !";
  }
}

export default BaseController;
