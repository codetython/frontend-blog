class Config {

  constructor(app){
    this.app =  app;
    this.module =  "Blog";
  }

  getModuleName () {
    return this.app + "." +this.module;
  }

  getControllers() {
    return this.app + "." + this.module + '.Controllers';
  }

  getServices() {
    return this.app + "." + this.module + '.Services';
  }

  getFilters() {
    return this.app + "." + this.module + '.Filters';
  }

  getDirectives() {
    return this.app + "." + this.module + '.Directives';
  }

}

export default Config;
