import {WebAPI} from 'src/service';
import {Router} from 'aurelia-router';

export class User{
  initialize() {
    this.User = {
      firstName:  '',
      lastName:  '',
    };
  }

  static inject() { return [WebAPI, Router]; }
  constructor(service, route){
    this.heading = 'New User';
    
    this.initialize();
    this.route = route;
    this.service = service;
  }

  back(){
    this.route.navigate("user");
  }

  get fullName(){
    return `${this.User.firstName} ${this.User.lastName}`;
  }

  save(){
    this.service.saveUser(this.User).then(result => {
      if (result.isSuccess){
        this.initialize();
        alert('Success!');
      }
      else
        alert('Error!');
    });
  }
}

export class UpperValueConverter {
  toView(value){
    return value && value.toUpperCase();
  }
}
