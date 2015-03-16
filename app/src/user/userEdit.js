import {WebAPI} from 'src/service';
import {Router} from 'aurelia-router';

export class User{
  static inject() { return [WebAPI, Router]; }
  constructor(service, route){
    this.heading = 'Edit User';
    this.User = {
      id: undefined,
      firstName:  undefined,
      lastName:  undefined,
    };

    this.route = route;
    this.service = service;
  }

  back(){
    this.route.navigate("user");
  }

  activate(params){
    this.service.getUser(params.id).then(result => {
      if (result.isSuccess){
        this.User = $.parseJSON(result.response);
      }
      else
        alert('Error!');
    });
  }

  save(){
    this.service.updateUser(this.User.id, this.User).then(result => {
      if (result.isSuccess)
        alert('Success!');
      else
        alert('Error!');
    });
  }
}