import {WebAPI} from 'src/service';
import {Router} from 'aurelia-router';

export class User{

  getAll() {
    this.service.getAllUsers().then(result => {
      if (!result.isSuccess)
        alert('Error!');
      else
        this.Users = $.parseJSON(result.response);
    });
  }

  static inject() { return [WebAPI, Router]; }
  constructor(service, route){
    this.heading = 'User List';
    this.Users = [];
    this.service = service;
    this.route = route;
    this.getAll();
  }

  updateUser(userId){
    console.log(this.route);
    this.route.navigate("user/edit/" + userId);
  };

  removeUser(userId){
    var userToRemove = {
      id: userId
    };

    this.service.removeUser(userToRemove).then(result => {
      if (result.isSuccess){
        alert('Success!');
        this.getAll();
      }
      else
        alert('Error!');
    });
  }
}
